import {
  Display,
  Heading,
  Text,
  Lead,
  Muted,
  InlineCode,
  List,
  Blockquote,
} from '@/components/Typography';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const HEADING_PROPS: PropRow[] = [
  { name: 'level', type: '1 | 2 | 3 | 4 | 5 | 6', default: '2', description: '시각 위계 + 렌더 태그.' },
  { name: 'as', type: '1 | 2 | 3 | 4 | 5 | 6', description: '시각은 그대로, 태그만 강제. heading 순서 a11y.' },
  { name: 'asChild', type: 'boolean', default: 'false', description: 'Slot 위임.' },
];

const TEXT_PROPS: PropRow[] = [
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: `'md'`, description: 'body 크기.' },
  { name: 'weight', type: `'normal' | 'medium' | 'semibold'`, default: `'normal'`, description: '굵기.' },
  { name: 'asChild', type: 'boolean', default: 'false', description: 'Slot 위임.' },
];

const EXAMPLE = `<div className="space-y-3">
  <Heading level={2}>섹션 타이틀</Heading>
  <Lead>
    Lead — 페이지 인트로용 큰 본문.
  </Lead>
  <Text>
    본문은 <InlineCode>useReducedMotion</InlineCode> 같은 인라인 코드와
    함께 자연스럽게 흐릅니다.
  </Text>
  <Muted>부차 정보는 muted 톤으로.</Muted>
</div>`;

export function TypographySection() {
  return (
    <ComponentDoc
      id="typography"
      title="Typography"
      description="시스템 타입 스케일. Pretendard Variable + 한국어 폴백 단일 폰트. display / h1~h6 / body / lead / muted / code / list / blockquote."
    >
      <Demo caption="Display & Heading">
        <div className="space-y-4">
          <Display>흩어진 데이터에서, 한 줄의 사실을</Display>
          <Heading level={1}>H1 — 페이지 타이틀</Heading>
          <Heading level={2}>H2 — 섹션 헤더</Heading>
          <Heading level={3}>H3 — 서브섹션</Heading>
          <Heading level={4}>H4 — 카드 타이틀</Heading>
          <Heading level={5}>H5 — 그룹 라벨</Heading>
          <Heading level={6}>H6 — 미세 라벨</Heading>
        </div>
      </Demo>

      <Demo caption="Body / Lead / Muted">
        <div className="space-y-3">
          <Lead>Lead — 페이지 인트로용. text-xl + muted-foreground.</Lead>
          <Text size="lg">Text size="lg" — 18px. 강조 단락.</Text>
          <Text>Text size="md" (기본) — 16px. The quick brown fox 가나다라마바사.</Text>
          <Text size="sm">Text size="sm" — 14px. 카드 본문, 표.</Text>
          <Muted>Muted — 14px + muted-foreground. 부차 정보·캡션.</Muted>
        </div>
      </Demo>

      <Demo caption="Inline & Block">
        <div className="space-y-3">
          <Text>
            인라인 코드 <InlineCode>useReducedMotion()</InlineCode> 사용.
          </Text>
          <List>
            <li>비순서 항목 — disc 마커</li>
            <li>가나다라마바사</li>
          </List>
          <List ordered>
            <li>순서 항목</li>
            <li>워크플로우 단계 등</li>
          </List>
          <Blockquote>인용/면책 — 좌측 stripe + italic.</Blockquote>
        </div>
      </Demo>

      <Collapsible title="Props — Heading">
        <PropsTable rows={HEADING_PROPS} />
      </Collapsible>

      <Collapsible title="Props — Text">
        <PropsTable rows={TEXT_PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample
          code={EXAMPLE}
          scope={{ Display, Heading, Text, Lead, Muted, InlineCode, List, Blockquote }}
        />
      </Collapsible>
    </ComponentDoc>
  );
}
