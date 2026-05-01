import { ComponentDoc, Demo } from '../ComponentDoc';

const TOKEN_GROUPS: Array<{
  label: string;
  tokens: Array<{ name: string; bg: string; fg?: string; note?: string }>;
}> = [
  {
    label: 'Surface (테마별 슬롯)',
    tokens: [
      { name: 'background', bg: 'bg-background', fg: 'text-foreground' },
      { name: 'card', bg: 'bg-card', fg: 'text-card-foreground' },
      { name: 'muted', bg: 'bg-muted', fg: 'text-muted-foreground' },
      { name: 'border', bg: 'bg-border' },
    ],
  },
  {
    label: 'Brand (테마별 슬롯)',
    tokens: [
      { name: 'primary', bg: 'bg-primary', fg: 'text-primary-foreground' },
      { name: 'secondary', bg: 'bg-secondary', fg: 'text-secondary-foreground' },
      { name: 'accent', bg: 'bg-accent', fg: 'text-accent-foreground' },
    ],
  },
  {
    label: '알림 (시스템 공유)',
    tokens: [
      { name: 'destructive', bg: 'bg-destructive', fg: 'text-destructive-foreground', note: '"danger" 의미' },
      { name: 'warning', bg: 'bg-warning', fg: 'text-warning-foreground' },
      { name: 'success', bg: 'bg-success', fg: 'text-success-foreground' },
      { name: 'info', bg: 'bg-info', fg: 'text-info-foreground' },
    ],
  },
];

function Swatch({
  name,
  bg,
  fg,
  note,
}: {
  name: string;
  bg: string;
  fg?: string;
  note?: string;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <div className={`${bg} ${fg ?? ''} flex h-20 items-center justify-center text-base font-medium`}>
        {fg ? 'Aa' : ''}
      </div>
      <div className="bg-card px-3 py-2 text-xs">
        <div className="font-mono">--{name}</div>
        {note ? <div className="mt-0.5 text-muted-foreground">{note}</div> : null}
      </div>
    </div>
  );
}

export function TokensSection() {
  return (
    <ComponentDoc
      id="tokens"
      title="Tokens"
      description="시맨틱 토큰은 시스템 globals.css 의 :root 한 곳에서 정의됩니다. 테마는 Surface/Brand 슬롯만 덮어쓰고, 알림 4종(destructive·warning·success·info)·radius·font 는 시스템 공유로 고정됩니다."
    >
      {TOKEN_GROUPS.map((group) => (
        <Demo key={group.label} caption={group.label}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {group.tokens.map((t) => (
              <Swatch key={t.name} {...t} />
            ))}
          </div>
        </Demo>
      ))}

      <Demo caption="Typography & Radius (시스템 공유)">
        <div className="space-y-4">
          <p className="text-2xl font-semibold">제목 — 빠른 갈색 여우가 게으른 개를 뛰어넘는다</p>
          <p className="text-base text-muted-foreground">
            본문 — 가나다라마바사 The quick brown fox jumps over the lazy dog 0123456789
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            font-family: var(--font-sans) → "Pretendard Variable", "Pretendard", "Apple SD Gothic Neo",
            system-ui, sans-serif
          </p>
          <div className="flex items-end gap-3 pt-2">
            <div className="h-12 w-12 rounded-sm bg-primary" />
            <div className="h-12 w-12 rounded-md bg-primary" />
            <div className="h-12 w-12 rounded-lg bg-primary" />
            <span className="self-center text-xs text-muted-foreground">
              rounded-sm / -md / -lg (--radius: 0.625rem)
            </span>
          </div>
        </div>
      </Demo>
    </ComponentDoc>
  );
}
