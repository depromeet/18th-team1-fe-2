import { DiaryWriteView } from "@/features/diary-write";
import { MOCK_SENTENCES } from "@/mock";

const DiaryWritePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ sentenceId?: string }>;
}): Promise<React.ReactElement | null> => {
  const { sentenceId } = await searchParams;
  const sentence = MOCK_SENTENCES.find((s) => s.id === sentenceId) ?? MOCK_SENTENCES[0];

  if (!sentence) return null;

  return <DiaryWriteView sentence={sentence} />;
};

export default DiaryWritePage;
