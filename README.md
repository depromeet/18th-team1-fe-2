# 📖 책 문장 일기

책 속 문장으로 나의 하루를 기록하는 웹 애플리케이션입니다.

## 🚀 시작하기

```bash
# 1. Node.js LTS 버전 사용 (nvm 권장)
nvm use

# 2. 의존성 설치
pnpm install

# 3. 환경 변수 준비
cp .env.example .env.local

# 4. 개발 서버 실행
pnpm dev
```

앱이 [http://localhost:3000](http://localhost:3000) 에서 열립니다.

## 🧰 기술 스택

- **언어 / 프레임워크**: TypeScript, Next.js (App Router), React 19
- **스타일링**: Tailwind CSS v4, shadcn/ui, lucide-react
- **상태 관리**: TanStack Query (서버 상태), Zustand (전역 상태)
- **품질**: Biome (lint + format), Husky, lint-staged, commitlint
- **아키텍처**: Feature-Sliced Design (FSD)


## 📚 Documentation

프로젝트 관련 상세 문서는 아래 표를 참고하세요.

| 문서 | 설명 |
|------|------|
| [커밋 컨벤션](./docs/commit-convention.md) | Git 커밋 메시지 작성 규칙 |
| [네이밍 컨벤션](./docs/naming-convention.md) | 변수, 함수, 파일명 작성 규칙 |
| [폴더 구조](./docs/folder-structure.md) | FSD 아키텍처 기반 프로젝트 구조 |
| [패키지 정보](./docs/packages.md) | 사용 중인 패키지 목록 및 설정 |
| [API 명세](./docs/api-specification.md) | API 엔드포인트 및 사용 가이드 |

## 🌿 브랜치 / PR 규칙 요약

- 브랜치: `feat/#17-login-api`, `fix/#23-button-error`, `refactor/#12-code-cleanup`
- 커밋: `feat: 로그인 API 연동 (#17)` — 이슈 번호는 훅이 자동 추가
- PR Merge 전략
  - `feature → develop`: **Squash and Merge**
  - `develop → main`: **Rebase and Merge**
  - `hotfix → main`: **Merge Commit**

상세는 [커밋 컨벤션 문서](./docs/commit-convention.md) 를 확인하세요.
