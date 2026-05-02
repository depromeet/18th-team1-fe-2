import { SentenceListView } from "@/features/sentence-select";
import { MOCK_SENTENCES } from "@/mock";

const SentenceListPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<React.ReactElement> => {
  const { id } = await params;
  return <SentenceListView initialSentenceId={id} sentences={MOCK_SENTENCES} />;
};

export default SentenceListPage;
