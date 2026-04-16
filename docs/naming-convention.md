# 🪪 네이밍 컨벤션

이 문서는 변수, 함수, 파일, 폴더 등 식별자 작성 규칙을 정의합니다.

## 🔡 기본 케이스

| 대상 | 케이스 | 예시 |
|------|--------|------|
| 변수 / 함수 | `camelCase` | `currentUser`, `fetchBooks` |
| 컴포넌트 | `PascalCase` | `DeleteButton`, `BookCard` |
| 타입 / 인터페이스 | `PascalCase` | `type UserProfile`, `type BookDto` |
| 상수 (하드코딩 값) | `UPPER_SNAKE_CASE` | `COLOR_WHITE = "#ffffff"` |
| 환경 변수 | `UPPER_SNAKE_CASE` | `NEXT_PUBLIC_API_BASE_URL` |
| 파일 (컴포넌트) | `PascalCase.tsx` | `DeleteButton.tsx` |
| 파일 (훅) | `camelCase.ts` (`use` 접두사) | `useOnlineStatus.ts` |
| 파일 (일반 모듈) | `kebab-case.ts` | `query-client.ts` |
| 폴더 | `kebab-case` | `book-form`, `user-profile` |

## ✍️ 함수 선언

- 기본은 **Arrow Function** 을 사용합니다.
- **반환 타입을 명시**합니다. (`useExplicitType` lint 규칙으로 자동 검증)

```ts
// ✅ 권장
export const fetchBooks = async (query: string): Promise<Book[]> => {
  const response = await apiClient.get<Book[]>(`/books?q=${query}`);
  return response.data;
};

// ❌ 지양
export function fetchBooks(query) {
  return apiClient.get(`/books?q=${query}`).then((r) => r.data);
}
```

## 🧠 의도를 드러내는 이름

### boolean 은 `is` / `has` / `should` 로 시작

```ts
const isLoading = true;
const hasPermission = checkPermission(user);
const shouldRender = isVisible && hasData;
```

### 이벤트 핸들러는 `handle` / `on` 으로 시작

| 위치 | 접두사 | 예시 |
|------|--------|------|
| 내부에서 정의/호출하는 함수 | `handle` | `const handleSubmit = () => {}` |
| props 로 외부에서 전달받는 콜백 | `on` | `onClick`, `onChange` |

```tsx
type ButtonProps = {
  onClick: () => void;
};

const SubmitButton = ({ onClick }: ButtonProps): React.ReactElement => {
  const handleClick = (): void => {
    console.info("clicked");
    onClick();
  };

  return <button onClick={handleClick}>제출</button>;
};
```

### getter 함수는 `get` 으로 시작

```ts
const getUserName = (user: User): string => user.name;
const getBookById = (id: string): Book | undefined => ...;
```

### 비동기 함수는 동사형 + 대상

```ts
const fetchBooks = async (): Promise<Book[]> => {...};
const saveDiary = async (diary: Diary): Promise<void> => {...};
const deleteComment = async (id: string): Promise<void> => {...};
```

## 🚫 줄임말 지양

잘못된 이해를 유발할 수 있는 줄임말을 피합니다.

| ❌ | ✅ |
|----|----|
| `btn` | `button` |
| `img` | `image` |
| `usr` | `user` |
| `desc` | `description` |
| `idx` | `index` |

예외적으로 업계에서 굳어진 약어(`id`, `url`, `api`, `dto`, `uuid` 등)는 사용합니다.


## 🎯 TanStack Query Key

```ts
// 튜플로 작성하고, 전용 상수로 관리한다.
export const bookKeys = {
  all: ["books"] as const,
  lists: () => [...bookKeys.all, "list"] as const,
  list: (filters: BookFilter) => [...bookKeys.lists(), filters] as const,
  details: () => [...bookKeys.all, "detail"] as const,
  detail: (id: string) => [...bookKeys.details(), id] as const,
};
```

## 💡 체크리스트

- [ ] 변수/함수는 `camelCase` 인가?
- [ ] 컴포넌트는 `PascalCase` 인가?
- [ ] 하드코딩 상수는 `UPPER_SNAKE_CASE` 인가?
- [ ] 함수 반환 타입이 명시되어 있는가?
- [ ] boolean 변수는 `is` / `has` / `should` 로 시작하는가?
- [ ] 이벤트 핸들러는 `handle` / `on` 을 구분해서 사용하는가?
- [ ] 과도한 줄임말을 쓰지 않았는가?
