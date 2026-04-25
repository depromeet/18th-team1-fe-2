"use client";

import { useState } from "react";

import { Header } from "@/widgets/header";

const HomePage = (): React.ReactElement => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col gap-6 py-4">
      <p className="caption1 px-5 text-muted-foreground">default — 캘린더</p>
      <div>
        <Header
          variant="default"
          title="캘린더"
          onBack={() => alert("뒤로가기")}
          onShare={() => alert("공유하기")}
          onSetting={() => alert("설정")}
        />
      </div>

      <p className="caption1 px-5 text-muted-foreground">detail — 내 일기</p>
      <div>
        <Header
          variant="detail"
          title="4월 20일"
          onBack={() => alert("뒤로가기")}
          optionMenuVariant="default"
          onEdit={() => alert("수정하기")}
          onShare={() => alert("공유하기")}
          onDelete={() => alert("삭제")}
        />
      </div>

      <p className="caption1 px-5 text-muted-foreground">detail — 다른 사람 일기</p>
      <div>
        <Header
          variant="detail"
          title="4월 20일"
          onBack={() => alert("뒤로가기")}
          optionMenuVariant="report"
          onReport={() => alert("신고하기")}
          onShare={() => alert("공유하기")}
        />
      </div>

      <p className="caption1 px-5 text-muted-foreground">write — 일기 작성 (버튼 눌러서 토글)</p>
      <div>
        <Header
          variant="write"
          title="일기"
          onBack={() => alert("뒤로가기")}
          isChecked={isChecked}
          onCheck={() => setIsChecked((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default HomePage;
