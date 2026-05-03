const KAKAO_LOGIN_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL ?? ""}/api/oauth2/authorization/kakao`;

const LoginPage = (): React.ReactElement => {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4">
      <h1 className="head2 text-foreground">로그인</h1>
      <a
        href={KAKAO_LOGIN_URL}
        className="rounded-lg bg-yellow-400 px-6 py-3 subhead1 text-gray-700"
      >
        카카오로 로그인
      </a>
    </div>
  );
};

export default LoginPage;
