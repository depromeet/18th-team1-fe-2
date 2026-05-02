import { Suspense } from "react";

import { EmotionStepView } from "@/features/diary-emotion";

const EmotionPage = (): React.ReactElement => (
  <Suspense>
    <EmotionStepView />
  </Suspense>
);

export default EmotionPage;
