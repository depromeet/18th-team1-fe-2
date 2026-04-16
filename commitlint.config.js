/**
 * 커밋 메시지 검증 설정.
 * 기본 규칙은 @commitlint/config-conventional 을 따른다.
 *   형식: `${tag}: ${커밋 내용} (${이슈번호})`
 *   예시: `feat: 로그인 API 연동 (#17)`
 */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 허용 태그 (프로젝트 컨벤션)
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "refactor",
        "test",
        "docs",
        "style",
        "chore",
        "ci",
        "perf",
        "build",
        "revert",
      ],
    ],
    // 제목/본문 언어는 자유롭게 쓰되, 마지막에 온점을 찍지 않는다.
    "subject-full-stop": [2, "never", "."],
    // 제목 최대 길이 (이슈 번호 포함 100자)
    "header-max-length": [2, "always", 100],
    // subject-case 는 한글/영문 혼용을 허용하기 위해 비활성화
    "subject-case": [0],
  },
};
