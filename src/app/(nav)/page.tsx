import { BookOpen } from "lucide-react";

const HomePage = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center gap-8 py-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <BookOpen className="size-12 text-primary" aria-hidden="true" />
        <h1 className="text-4xl font-semibold tracking-tight">책 문장 일기</h1>
        <p className="max-w-md text-base text-muted-foreground">
          책 속 문장으로 나의 하루를 기록하는 웹 애플리케이션입니다.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
