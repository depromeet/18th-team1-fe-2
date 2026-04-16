# 🌐 API 명세

TanStack Query 사용 가이드라인과 에러 핸들링 규칙을 정의합니다.

## 🔧 HTTP 클라이언트

`src/shared/api/` 에서 단일 `fetch` 래퍼를 만들어 사용합니다.

```
shared/api/
├── query-client.ts      # QueryClient 팩토리
├── http-client.ts       # fetch 래퍼 (에러 표준화, 인증 헤더)
└── error.ts             # ApiError 정의
```

## 🧰 TanStack Query 사용 가이드라인

### 1. 쿼리 훅은 `entities/` 또는 `features/` 내부에 둔다

```ts
// entities/book/api/bookQueries.ts
export const bookKeys = {
  all: ["books"] as const,
  list: (query: string) => [...bookKeys.all, "list", query] as const,
  detail: (id: string) => [...bookKeys.all, "detail", id] as const,
};

export const useBooksQuery = (query: string) => {
  return useQuery({
    queryKey: bookKeys.list(query),
    queryFn: async (): Promise<Book[]> => {
      const response = await httpClient.get<{ items: Book[] }>(`/books?q=${query}`);
      return response.items;
    },
    enabled: query.length > 0,
  });
};
```

### 2. Mutation 은 `invalidateQueries` 로 캐시 갱신

```ts
export const useCreateDiaryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateDiaryInput) => httpClient.post("/diaries", input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: diaryKeys.all });
    },
  });
};
```

### 3. 쿼리 키는 튜플 + 팩토리 패턴

문자열 배열을 직접 쓰지 말고 상수 팩토리로 관리합니다.
`all → list → detail` 계층을 유지해 `invalidate` 범위를 쉽게 제어할 수 있습니다.

### 4. `staleTime` / `gcTime` 은 리소스 특성에 맞게

기본값은 `src/shared/api/query-client.ts` 에 정의되어 있으며, 특수 케이스는 훅 수준에서 덮어쓰세요.

| 데이터 성격 | 추천 `staleTime` |
|-------------|------------------|
| 거의 안 바뀌는 참조 데이터 | `Infinity` 또는 1시간 이상 |
| 일반 목록 데이터 | `1 ~ 5분` |
| 실시간성 강한 데이터 | `0` |

## 🧨 에러 핸들링 규칙

1. **네트워크 에러**와 **비즈니스 에러**를 구분합니다.
2. 401은 `httpClient` 인터셉터에서 공통 처리 (로그아웃/리프레시).
3. 그 외 4xx/5xx는 호출 측에서 `onError` / `ErrorBoundary` 로 처리합니다.
4. 사용자에게 노출되는 메시지는 **한글 + 재시도 가이드**를 함께 제공합니다.

### 표준 에러 타입

```ts
// shared/api/error.ts
export type ApiErrorCode =
  | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "CONFLICT" | "INTERNAL_ERROR";

export class ApiError extends Error {
  constructor(
    public readonly code: ApiErrorCode,
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}
```

## ✅ 새 엔드포인트 추가 시 체크리스트

- [ ] Request/Response DTO 타입을 `entities/*/model/*.types.ts` 에 정의했는가?
- [ ] 쿼리 훅(`useXxxQuery`) / 뮤테이션 훅(`useXxxMutation`)을 작성했는가?
- [ ] 쿼리 키 상수를 선언했는가?
- [ ] 에러 코드별 UX 분기를 고려했는가?

