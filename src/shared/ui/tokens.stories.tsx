import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta = {
  title: "@tokens",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj;

// ─── Color Palette ───────────────────────────────────────────────────────────

const grayScale: { label: string; tw: string; hex: string }[] = [
  { label: "gray-0", tw: "bg-gray-0", hex: "#ffffff" },
  { label: "gray-50", tw: "bg-gray-50", hex: "#f7f7f7" },
  { label: "gray-100", tw: "bg-gray-100", hex: "#eaebeb" },
  { label: "gray-200", tw: "bg-gray-200", hex: "#dcdcdc" },
  { label: "gray-300", tw: "bg-gray-300", hex: "#8a8a8a" },
  { label: "gray-400", tw: "bg-gray-400", hex: "#737373" },
  { label: "gray-500", tw: "bg-gray-500", hex: "#5c5c5c" },
  { label: "gray-600", tw: "bg-gray-600", hex: "#303030" },
  { label: "gray-700", tw: "bg-gray-700", hex: "#090909" },
];

//const semanticColors: { label: string; tw: string; hex: string }[] = [
//  { label: 'background', tw: 'bg-background', hex: '#ffffff' },
//  { label: 'foreground', tw: 'bg-foreground', hex: '#090909' },
//  { label: 'muted', tw: 'bg-muted', hex: '#f7f7f7' },
//  { label: 'muted-foreground', tw: 'bg-muted-foreground', hex: '#737373' },
//  { label: 'border', tw: 'bg-border', hex: '#eaebeb' },
//  { label: 'primary', tw: 'bg-primary', hex: '#090909' },
//  { label: 'primary-foreground', tw: 'bg-primary-foreground', hex: '#ffffff' },
//  { label: 'secondary', tw: 'bg-secondary', hex: '#f7f7f7' },
//  { label: 'secondary-foreground', tw: 'bg-secondary-foreground', hex: '#090909' },
//  { label: 'destructive', tw: 'bg-destructive', hex: '#ff3b30' },
//  { label: 'destructive-foreground', tw: 'bg-destructive-foreground', hex: '#ffffff' },
//  { label: 'accent', tw: 'bg-accent', hex: '#f7f7f7' },
//  { label: 'accent-foreground', tw: 'bg-accent-foreground', hex: '#090909' },
//];

const ColorSwatch = ({
  label,
  tw,
  hex,
}: {
  label: string;
  tw: string;
  hex: string;
}): React.ReactElement => (
  <div className="flex flex-col gap-1.5">
    <div className={`h-14 w-full rounded-lg border border-gray-100 ${tw}`} />
    <div>
      <p className="caption1 text-foreground">{label}</p>
      <p className="caption2 text-muted-foreground">{hex}</p>
    </div>
  </div>
);

export const Color: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <section>
        <h2 className="subhead1 text-foreground mb-4">Gray Scale</h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
          {grayScale.map((color) => (
            <ColorSwatch key={color.label} {...color} />
          ))}
        </div>
      </section>
      {/*<section>
        <h2 className="subhead1 text-foreground mb-4">Semantic Tokens</h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
          {semanticColors.map((color) => (
            <ColorSwatch key={color.label} {...color} />
          ))}
        </div>
      </section>*/}
    </div>
  ),
};

// ─── Typography ──────────────────────────────────────────────────────────────

const pretendardTokens: { cls: string; size: string; weight: string; usage: string }[] = [
  { cls: "head1", size: "1.625rem", weight: "600", usage: "페이지 대제목" },
  { cls: "head2", size: "1.25rem", weight: "600", usage: "섹션 제목" },
  { cls: "head3", size: "1.25rem", weight: "500", usage: "섹션 부제목" },
  { cls: "subhead1", size: "1.125rem", weight: "700", usage: "강조 소제목" },
  { cls: "subhead2", size: "1.125rem", weight: "500", usage: "소제목" },
  { cls: "subhead3", size: "1.125rem", weight: "400", usage: "소제목(보통)" },
  { cls: "subhead4", size: "1.0625rem", weight: "400", usage: "소제목(작은)" },
  { cls: "subhead5", size: "1rem", weight: "700", usage: "강조 본문" },
  { cls: "subhead6", size: "1rem", weight: "600", usage: "세미볼드 본문" },
  { cls: "body1", size: "1rem", weight: "500", usage: "기본 본문" },
  { cls: "body2", size: "0.875rem", weight: "500", usage: "작은 본문" },
  { cls: "body3", size: "0.875rem", weight: "400", usage: "작은 본문(보통)" },
  { cls: "caption1", size: "0.75rem", weight: "600", usage: "강조 캡션" },
  { cls: "caption2", size: "0.75rem", weight: "400", usage: "캡션" },
];

const nanumTokens: { cls: string; size: string; weight: string; usage: string }[] = [
  { cls: "title1", size: "1.875rem", weight: "800", usage: "책 문장 대표 강조" },
  { cls: "title2", size: "1.125rem", weight: "800", usage: "문장 강조 (중간)" },
  { cls: "title3", size: "1.125rem", weight: "700", usage: "문장 강조 (보통)" },
  { cls: "title4", size: "0.875rem", weight: "800", usage: "문장 강조 (작은)" },
  { cls: "title5", size: "0.875rem", weight: "700", usage: "문장 강조 (작은, 보통)" },
  { cls: "title6", size: "0.75rem", weight: "400", usage: "문장 캡션" },
];

const SAMPLE_TEXT = "책 속 한 문장이 오늘의 하루를 바꾼다";

const TypographyRow = ({
  cls,
  size,
  weight,
  usage,
}: {
  cls: string;
  size: string;
  weight: string;
  usage: string;
}): React.ReactElement => (
  <div className="flex items-baseline gap-6 border-b border-border py-4 last:border-0">
    <div className="w-28 shrink-0">
      <p className="caption1 text-muted-foreground">.{cls}</p>
      <p className="caption2 text-muted-foreground">
        {size} / {weight}
      </p>
      <p className="caption2 text-muted-foreground">{usage}</p>
    </div>
    <p className={`${cls} text-foreground`}>{SAMPLE_TEXT}</p>
  </div>
);

export const Typography: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <section>
        <h2 className="subhead1 text-foreground mb-1">Pretendard</h2>
        <p className="caption2 text-muted-foreground mb-4">head · subhead · body · caption</p>
        <div>
          {pretendardTokens.map((token) => (
            <TypographyRow key={token.cls} {...token} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="subhead1 text-foreground mb-1">NanumMyeongjo</h2>
        <p className="caption2 text-muted-foreground mb-4">title — 책 문장 강조용 보조 서체</p>
        <div>
          {nanumTokens.map((token) => (
            <TypographyRow key={token.cls} {...token} />
          ))}
        </div>
      </section>
    </div>
  ),
};
