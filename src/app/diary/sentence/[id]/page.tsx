import { SentenceDetailView } from "@/features/sentence-select";
import { MOCK_SENTENCE } from "@/mock";

const SentenceDetailPage = (): React.ReactElement | null => {
  if (!MOCK_SENTENCE) return null;

  return <SentenceDetailView sentence={MOCK_SENTENCE} />;
};

export default SentenceDetailPage;
