import { SentenceDetailView } from "@/features/sentence-select";
import { MOCK_SENTENCES } from "@/mock";

interface SentenceDetailPageProps {
  params: Promise<{ id: string }>;
}

const SentenceDetailPage = async ({
  params,
}: SentenceDetailPageProps): Promise<React.ReactElement | null> => {
  const { id } = await params;
  const sentence = MOCK_SENTENCES.find((s) => s.id === id);
  if (!sentence) return null;

  return <SentenceDetailView sentence={sentence} />;
};

export default SentenceDetailPage;
