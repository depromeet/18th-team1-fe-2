export const SentenceListCardSkeleton = (): React.ReactElement => (
  <div className="flex w-full flex-col items-start rounded-xl border border-transparent bg-white p-5">
    <div className="flex w-full animate-pulse flex-col gap-2">
      <div className="h-[15px] w-full rounded bg-gray-100" />
      <div className="h-[15px] w-[201px] rounded bg-gray-100" />
      <div className="h-[15px] w-[201px] rounded bg-gray-100" />
    </div>
  </div>
);
