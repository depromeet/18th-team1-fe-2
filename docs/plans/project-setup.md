# 프론트엔드 프로젝트 초기 세팅 계획서

"책 문장 일기: 책 속 문장으로 나의 하루를 기록하기" 프로젝트의 초기 세팅 계획서

## 📋 프로젝트 개요

- **프로젝트명**: 책 문장 일기
- **설명**: 책 속 문장으로 나의 하루를 기록하는 웹 애플리케이션
- **Node.js 버전**: 최신 LTS 버전 사용 (.nvmrc 파일 생성)

## 🛠 기술 스택

다음 기술 스택으로 프로젝트를 초기화하고, **모든 패키지는 최신 안정화 버전으로 설치**할 것:

- **패키지 매니저**: pnpm
- **언어**: TypeScript
- **프레임워크**: Next.js (App Router)
- **API 관리**: TanStack Query (React Query)
- **스타일링**: Tailwind CSS
- **디자인 시스템**: shadcn/ui
- **전역 상태관리**: Zustand
- **린터/포매터**: Biome
- **Git Hooks**: Husky + lint-staged (커밋 전 린트/포맷 자동 체크)

## 📁 폴더 구조

**FSD (Feature-Sliced Design)** 아키텍처를 기반으로 다음과 같은 구조를 생성할 것:

```
src/
├── app/                 # Next.js App Router
├── pages/              # (App Router 사용 시 필요한 경우만)
├── widgets/            # 독립적인 UI 블록
├── features/           # 비즈니스 기능
├── entities/           # 비즈니스 엔티티
├── shared/             # 공통 코드
│   ├── api/           # API 클라이언트 설정
│   ├── config/        # 설정 파일
│   ├── lib/           # 유틸리티, 헬퍼
│   ├── ui/            # shadcn/ui 컴포넌트
│   ├── hooks/         # 공통 커스텀 훅
│   └── types/         # 공통 타입 정의
└── store/              # Zustand 스토어
```

## 🔧 설정 파일

### 1. TypeScript 설정
- strict 모드 활성화
- **절대 경로 사용 설정**: `@/*` → `src/*`
- 함수 반환 타입 체크 강제

### 2. Biome 설정
- 린트 + 포맷터 통합 설정
- 커밋 컨벤션에 맞는 규칙 적용
- Import 정렬 규칙 포함

### 3. Tailwind CSS 설정
- shadcn/ui와 호환되는 설정
- 커스텀 컬러, 폰트 등 확장 가능하도록 구성

### 4. Husky + lint-staged
- pre-commit 훅 설정
- 커밋 전 Biome를 통한 자동 린트/포맷 체크
- commitlint 설정 (커밋 메시지 검증)
- **prepare-commit-msg 훅 설정**: 브랜치명에서 이슈 번호를 자동으로 추출하여 커밋 메시지에 추가
  - 브랜치: `feat/#17-login-api` → 커밋: `feat: 로그인 API 연동` → 자동 변환: `feat: 로그인 API 연동 (#17)`

### 5. 환경변수
- `.env.example` 파일 생성
- Next.js 환경변수 예시 포함 (NEXT_PUBLIC_ prefix 등)

## 📝 Git 설정

### 브랜치 전략 (Git Flow)

**기본 흐름**:
```
feature → develop → main
hotfix → main (긴급 버그 수정)
```

**⚠️ 모든 브랜치는 반드시 GitHub Issue와 연결할 것**

### 브랜치 예시

| 브랜치 유형 | 네이밍 규칙 | 예시 | 설명 |
|------------|------------|------|------|
| feature | `feat/{issue-number}-{description}` | `feat/#17-login-api` | 새로운 기능 개발 |
| fix | `fix/{issue-number}-{description}` | `fix/#23-button-error` | 버그 수정 |
| hotfix | `hotfix/{issue-number}-{description}` | `hotfix/#45-critical-bug` | 프로덕션 긴급 수정 |
| refactor | `refactor/{issue-number}-{description}` | `refactor/#12-code-cleanup` | 코드 리팩토링 |

### Merge 전략

| 방향 | 전략 | 설명 |
|------|------|------|
| `feature` → `develop` | **Squash and Merge** | 여러 커밋을 하나로 압축하여 병합 |
| `develop` → `main` | **Rebase and Merge** | 커밋 히스토리를 선형으로 유지 |
| `hotfix` → `main` | **Merge Commit** | 긴급 수정 이력 명확히 보존 |

### 커밋 컨벤션

**형식**:
```
${tag}: ${커밋 내용} (${이슈번호})
```

**예시**: `feat: 로그인 API 연동 (#17)`

> 💡 **자동화**: prepare-commit-msg 훅을 통해 브랜치명에서 이슈 번호를 자동으로 추출하여 커밋 메시지 끝에 추가됨
> - 개발자는 `feat: 로그인 API 연동`만 입력
> - Git Hook이 자동으로 `(#17)` 추가
> - 브랜치명이 `feat/#17-login-api` 형식일 때 동작

**커밋 태그**:

| 태그 | 설명  |
|------|------|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 | 
| `refactor` | 코드 리팩토링 (기능 변화 X) | 
| `test` | 테스트 추가/수정 | 
| `docs` | 문서 수정 | 
| `style` | 코드 포맷팅  |
| `chore` | 빌드 설정, 패키지 매니저 등 |
| `ci` | CI 설정 변경, 빌드 시스템 변경 |(#89)` |
| `revert` | 커밋 되돌리기 | 

### GitHub 템플릿

#### Issue 템플릿

**`.github/ISSUE_TEMPLATE/feature.yml`**

```yaml
name: ✨ Feature
description: 새로운 기능 제안
title: "[FEAT] "
labels: ["feature"]
body:
  - type: textarea
    id: summary
    attributes:
      label: 🎯 요약
      description: 구현할 기능을 한 줄로 요약해주세요
      placeholder: 예) 사용자가 책을 검색할 수 있는 기능
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: 📄 상세 설명
      description: 기능에 대한 상세한 설명을 작성해주세요
      placeholder: |
        - 왜 이 기능이 필요한가요?
        - 어떻게 동작해야 하나요?
        - 참고할 만한 레퍼런스가 있나요?
    validations:
      required: true

  - type: textarea
    id: tasks
    attributes:
      label: ✅ 체크리스트
      description: 구현해야 할 작업 목록
      value: |
        - [ ] 작업 1
        - [ ] 작업 2
        - [ ] 작업 3
    validations:
      required: true
```

**`.github/ISSUE_TEMPLATE/fix.yml`**

```yaml
name: 🐛 Bug Fix
description: 버그 수정
title: "[FIX] "
labels: ["bug"]
body:
  - type: textarea
    id: summary
    attributes:
      label: 🎯 요약
      description: 발생한 버그를 한 줄로 요약해주세요
      placeholder: 예) 로그인 버튼 클릭 시 오류 발생
    validations:
      required: true

  - type: textarea
    id: current-behavior
    attributes:
      label: 🔴 현재 동작
      description: 현재 어떤 문제가 발생하고 있나요?
      placeholder: 버그가 발생하는 상황을 구체적으로 설명해주세요
    validations:
      required: true

  - type: textarea
    id: expected-behavior
    attributes:
      label: 🟢 예상 동작
      description: 어떻게 동작해야 하나요?
      placeholder: 정상적으로 동작할 때의 모습을 설명해주세요
    validations:
      required: true

  - type: textarea
    id: tasks
    attributes:
      label: ✅ 체크리스트
      description: 수정해야 할 작업 목록
      value: |
        - [ ] 버그 원인 파악
        - [ ] 수정 작업
        - [ ] 테스트 확인
    validations:
      required: true
```

**`.github/ISSUE_TEMPLATE/refactor.yml`**

```yaml
name: ♻️ Refactor
description: 코드 리팩토링
title: "[REFACTOR] "
labels: ["refactor"]
body:
  - type: textarea
    id: summary
    attributes:
      label: 🎯 요약
      description: 리팩토링할 내용을 한 줄로 요약해주세요
      placeholder: 예) 인증 로직을 커스텀 훅으로 분리
    validations:
      required: true

  - type: textarea
    id: reason
    attributes:
      label: 💡 리팩토링 이유
      description: 왜 이 코드를 리팩토링하려고 하나요?
      placeholder: |
        - 코드 중복 제거
        - 가독성 개선
        - 성능 최적화
        - 유지보수성 향상
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: 📄 상세 설명
      description: 어떻게 리팩토링할 계획인가요?
      placeholder: 구체적인 리팩토링 방법을 설명해주세요
    validations:
      required: true

  - type: textarea
    id: tasks
    attributes:
      label: ✅ 체크리스트
      description: 리팩토링 작업 목록
      value: |
        - [ ] 작업 1
        - [ ] 작업 2
        - [ ] 작업 3
    validations:
      required: true
```

#### PR 템플릿 (`.github/PULL_REQUEST_TEMPLATE.md`)

```markdown
## 🔗 연결된 이슈
- Closes #이슈번호

## 📝 작업 요약
<!-- 이 PR에서 수행한 작업을 간단히 요약해주세요 -->

## 🔍 주요 변경사항
<!-- 리뷰어가 특별히 확인해줬으면 하는 부분을 작성해주세요 -->
- 
- 

## 📸 스크린샷 (선택사항)
<!-- UI 변경사항이 있다면 스크린샷을 첨부해주세요 -->

## 📌 PR 중요도
<!-- 해당하는 항목에 체크해주세요 -->
- [ ] 🔴 High: 중요한 기능 추가/버그 수정 (반드시 리뷰 필요)
- [ ] 🟡 Medium: 일반적인 기능 개선
- [ ] 🟢 Low: 사소한 수정/문서 업데이트

## 💬 기타 사항
<!-- 리뷰어에게 전달하고 싶은 추가 정보가 있다면 작성해주세요 -->
```


## 📚 문서 작성

다음 문서들을 `docs/` 폴더에 생성할 것:

### 필수 문서

1. **`commit-convention.md`**
   - 위에 명시된 커밋 컨벤션 상세 설명
   - 다른 프로젝트에서 많이 사용하는 추가 태그들 (build, ci, perf 등) 포함
   - Gitmoji 옵션 설명
   - 예시 포함

2. **`naming-convention.md`**
   - 변수명, 함수명: camelCase
   - 컴포넌트: PascalCase
   - 상수 (하드코딩 값): UPPER_SNAKE_CASE (예: `COLOR_WHITE = "#ffffff"`)
   - 함수 선언: Arrow Function 사용
   - 함수 반환 타입 명시 필수
   - 줄임말 지양 (btn ✗ → button ✓)
   - 파일명 예시:
     - 컴포넌트: `DeleteButton.tsx`
     - 훅: `useOnlineStatus.ts`
   - 다른 프로젝트 일반적 규칙 추가 (boolean은 is/has로 시작, 이벤트 핸들러는 handle로 시작 등)

3. **`folder-structure.md`**
   - FSD 아키텍처 상세 설명
   - 각 레이어(app, widgets, features, entities, shared)별 역할
   - 폴더별 파일 배치 규칙
   - 예시 코드 포함

4. **`packages.md`**
   - 설치된 모든 패키지 목록 및 용도
   - 주요 패키지 설정 방법
   - 버전 정보

5. **`api-specification.md`**
   - API 엔드포인트 작성 템플릿
   - Request/Response 예시 포맷
   - TanStack Query 사용 가이드라인
   - 에러 핸들링 규칙

### 루트 파일

1. **`README.md`**
   ```markdown
   # 📖 책 문장 일기
   
   책 속 문장으로 나의 하루를 기록하는 웹 애플리케이션
   
   ## 📚 Documentation
   
   프로젝트 관련 상세 문서는 아래 표를 참고하세요.
   
   | 문서 | 설명 |
   |------|------|
   | [커밋 컨벤션](./docs/commit-convention.md) | Git 커밋 메시지 작성 규칙 |
   | [네이밍 컨벤션](./docs/naming-convention.md) | 변수, 함수, 파일명 작성 규칙 |
   | [폴더 구조](./docs/folder-structure.md) | FSD 아키텍처 기반 프로젝트 구조 |
   | [패키지 정보](./docs/packages.md) | 사용 중인 패키지 목록 및 설정 |
   | [API 명세](./docs/api-specification.md) | API 엔드포인트 및 사용 가이드 |
   ```

2. **`CLAUDE.md`**
   - 이 프로젝트에서 Claude Code가 코드 작업 시 참고해야 할 규칙
   - 사용 기술 스택 요약
   - 폴더 구조 설명
   - 코딩 컨벤션 요약
   - 자주 사용하는 명령어

## ✅ 최종 체크리스트

프로젝트 세팅 완료 후 다음 사항들을 확인할 것:

- [ ] pnpm으로 모든 패키지 설치 완료
- [ ] `.nvmrc` 파일 생성 (최신 LTS 버전)
- [ ] TypeScript 설정 완료 및 절대 경로 (`@/*`) 동작 확인
- [ ] Biome 린트/포맷 정상 동작 확인
- [ ] Husky pre-commit 훅 동작 확인
- [ ] **Husky prepare-commit-msg 훅 동작 확인** (브랜치명에서 이슈 번호 자동 추출)
- [ ] shadcn/ui 초기 설정 완료
- [ ] FSD 폴더 구조 생성
- [ ] 모든 문서 파일 생성 (README.md, CLAUDE.md, docs/*)
- [ ] GitHub 템플릿 파일 생성
- [ ] `.env.example` 파일 생성
- [ ] `.gitignore` 파일 확인
- [ ] 초기 커밋 가능한 상태

## 🚀 시작하기

세팅 완료 후 다음 명령어로 프로젝트를 실행할 수 있어야 함:

```bash
pnpm install
pnpm dev
```

---

**참고**: 모든 설정과 문서는 프로젝트 특성에 맞게 커스터마이징 가능하도록 명확한 주석과 예시를 포함할 것