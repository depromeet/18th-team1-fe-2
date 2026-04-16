import { BookOpen } from "lucide-react";

import { Button } from "@/shared/ui/button";

const HomePage = (): React.ReactElement => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <BookOpen className="size-12 text-primary" aria-hidden="true" />
        <h1 className="text-4xl font-semibold tracking-tight">책 문장 일기</h1>
        <p className="max-w-md text-base text-muted-foreground">
          책 속 문장으로 나의 하루를 기록하는 웹 애플리케이션입니다.
        </p>
      </div>
      <div className="flex gap-3">
        <Button>오늘의 문장 작성하기</Button>
        <Button variant="outline">문장 모아보기</Button>
      </div>
    </main>
  );
};

export default HomePage;
