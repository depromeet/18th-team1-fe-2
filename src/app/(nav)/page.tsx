import { DiaryDeleteModal } from "@/features/diary-delete";
import { Button } from "@/shared/ui/button";
import { ButtonDouble } from "@/shared/ui/button-double";
import { ButtonWithIcon } from "@/shared/ui/button-with-icon";
import { IcPlus } from "@/shared/ui/icons";

const HomePage = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <section className="flex flex-col items-center gap-3">
        <Button label="다음" />
        <Button label="다음" isDisabled />
        <Button label="오늘의 문장 작성하기" icon={<IcPlus size={11} className="text-gray-0" />} />
        <ButtonDouble secondaryLabel="취소" primaryLabel="확인" />
        <ButtonWithIcon primaryLabel="공유하기" />
        <DiaryDeleteModal isOpen={true} />
      </section>
    </div>
  );
};

export default HomePage;
