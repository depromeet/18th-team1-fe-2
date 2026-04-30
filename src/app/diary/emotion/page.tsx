import { Suspense } from "react";

import { EmotionStepView } from "@/widgets/diary-emotion";

const EmotionPage = (): React.ReactElement => (
  <Suspense>
    <EmotionStepView />
  </Suspense>
);

export default EmotionPage;
