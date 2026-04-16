# 📁 폴더 구조 (FSD)

본 프로젝트는 [Feature-Sliced Design](https://feature-sliced.design) 아키텍처를 따릅니다.
FSD 는 프론트엔드 모노리스를 **레이어 → 슬라이스 → 세그먼트** 3단 구조로 분리해,
기능 단위로 응집도를 높이고 레이어 간 의존 방향을 일관되게 제어합니다.

## 🗺️ 전체 구조

```
src/
├── app/          # Next.js App Router (라우팅 / 글로벌 프로바이더)
├── widgets/      # 여러 feature 를 조합한 독립적인 UI 블록
├── features/     # 비즈니스 기능 단위 (사용자 행동 중심)
├── entities/     # 비즈니스 엔티티 (User, Book, Diary 등)
├── shared/       # 재사용 가능한 공통 코드
│   ├── api/      # HTTP 클라이언트, QueryClient 설정
│   ├── config/   # 환경 변수, 런타임 상수
│   ├── lib/      # 순수 유틸리티, 헬퍼
│   ├── ui/       # shadcn/ui 컴포넌트 (Button, Card, ...)
│   ├── hooks/    # 범용 커스텀 훅
│   └── types/    # 프로젝트 전역 타입
└── store/        # 전역 Zustand 스토어
```

## 🧱 레이어 설명

### 1. `app/`
- Next.js App Router 루트. `layout.tsx`, `page.tsx`, 글로벌 프로바이더를 둡니다.
- 라우팅 및 앱 초기화 로직만 담고, 비즈니스 로직은 하위 레이어로 위임합니다.

### 2. `widgets/`
- 여러 feature 를 조합한 **독립적인 UI 블록** 입니다.
- 예: `<Header/>`, `<DiaryBoard/>`, `<BookShelf/>`

```
widgets/
└── diary-board/
    ├── ui/
    │   └── DiaryBoard.tsx
    ├── model/
    │   └── useDiaryBoard.ts
    └── index.ts
```

### 3. `features/`
- **사용자 행동**에 대응하는 기능 단위입니다.
- 예: `login`, `book-search`, `diary-write`, `comment-like`

```
features/
└── book-search/
    ├── ui/
    │   ├── BookSearchInput.tsx
    │   └── BookSearchResult.tsx
    ├── model/
    │   └── useBookSearch.ts
    ├── api/
    │   └── fetchBooks.ts
    └── index.ts
```

### 4. `entities/`
- **도메인 모델**과 관련된 코드입니다. 엔티티 단위의 UI, 스토어, 쿼리 훅이 들어갑니다.
- 예: `user`, `book`, `diary`

```
entities/
└── book/
    ├── ui/
    │   └── BookCard.tsx
    ├── model/
    │   └── book.types.ts
    ├── api/
    │   └── bookQueries.ts
    └── index.ts
```

### 5. `shared/`
- **어떤 도메인에도 종속되지 않는** 재사용 가능한 코드입니다.
  - `api/` — `fetch` 래퍼, `QueryClient` 설정
  - `config/` — 환경 변수 로더, 상수
  - `lib/` — `cn()`, `formatDate()` 등 순수 유틸
  - `ui/` — shadcn/ui 원시 컴포넌트
  - `hooks/` — `useDebounce`, `useMediaQuery` 등 범용 훅
  - `types/` — 공통 타입 정의

### 6. `store/`
- 앱 전역 상태(테마, 모달, 토스트 등)를 관리하는 **Zustand 스토어**를 둡니다.
- 도메인 상태는 `features/` 또는 `entities/` 하위의 `model/` 로 분리하세요.

## 🧩 슬라이스 내부 세그먼트

각 슬라이스(`features/book-search/` 같은 단위) 안에서는 다음 세그먼트를 권장합니다.

| 세그먼트 | 역할 |
|----------|------|
| `ui/` | React 컴포넌트 |
| `model/` | 상태/훅/비즈니스 로직 |
| `api/` | 서버 통신 함수, 쿼리/뮤테이션 |
| `lib/` | 슬라이스 내부 헬퍼 |
| `config/` | 슬라이스 내부 상수 |
| `index.ts` | 외부로 공개할 barrel export |

## ➡️ 의존 방향 규칙

**상위 레이어는 하위 레이어만 참조할 수 있습니다.**

```
app → widgets → features → entities → shared
                                      ↑
                                     store (전역)
```

- ✅ `features/book-search` 가 `entities/book`, `shared/ui` 를 import
- ✅ `widgets/header` 가 `features/auth`, `entities/user` 를 import
- ❌ `entities/book` 이 `features/book-search` 를 import (상향 참조 금지)
- ❌ 같은 레이어 내 다른 슬라이스 직접 참조 금지 (예: `features/a` → `features/b`)
  - 공유가 필요하면 `entities/` 또는 `shared/` 로 끌어올리기

## 🚪 Public API (barrel export)

각 슬라이스는 `index.ts` 를 통해서만 외부에 공개합니다.

```ts
// features/book-search/index.ts
export { BookSearchInput } from "./ui/BookSearchInput";
export { useBookSearch } from "./model/useBookSearch";
export type { BookSearchFilter } from "./model/book-search.types";
```

외부에서는 반드시 루트 경로(`@/features/book-search`)로만 import 합니다.

```ts
// ✅
import { BookSearchInput } from "@/features/book-search";

// ❌
import { BookSearchInput } from "@/features/book-search/ui/BookSearchInput";
```

## 📂 실제 예시

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   └── globals.css
├── widgets/
│   └── header/
│       ├── ui/Header.tsx
│       └── index.ts
├── features/
│   ├── auth/
│   │   ├── ui/LoginForm.tsx
│   │   ├── model/useLogin.ts
│   │   ├── api/login.ts
│   │   └── index.ts
│   └── diary-write/...
├── entities/
│   └── book/
│       ├── ui/BookCard.tsx
│       ├── model/book.types.ts
│       ├── api/bookQueries.ts
│       └── index.ts
├── shared/
│   ├── api/query-client.ts
│   ├── lib/utils.ts
│   ├── ui/button.tsx
│   └── ...
└── store/
    └── useAppStore.ts
```
