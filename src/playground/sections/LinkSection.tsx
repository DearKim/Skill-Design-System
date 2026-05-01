import { ExternalLink } from 'lucide-react';
import { Link } from '@/components/Link';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const PROPS: PropRow[] = [
  {
    name: 'variant',
    type: `'default' | 'muted' | 'underline'`,
    default: `'default'`,
    description: '시각적 변형.',
  },
  {
    name: 'external',
    type: 'boolean',
    default: 'false',
    description: 'true 면 target="_blank" + rel="noopener noreferrer" 자동.',
  },
  {
    name: 'asChild',
    type: 'boolean',
    default: 'false',
    description: 'Slot — React Router NavLink 등에 props 위임.',
  },
];

const EXAMPLE = `<div className="space-y-2">
  <p>
    <Link href="#">기본 링크</Link>
  </p>
  <p>
    <Link href="https://anthropic.com" external>
      Anthropic <ExternalLink className="h-3.5 w-3.5" />
    </Link>
  </p>
  <p>
    <Link href="#" variant="muted">muted 링크</Link>
  </p>
</div>`;

export function LinkSection() {
  return (
    <ComponentDoc
      id="link"
      title="Link"
      description="텍스트 링크. asChild 로 React Router 등 라우팅 라이브러리와 합성 가능."
    >
      <Demo caption="Variants">
        <div className="space-y-2 text-base">
          <p>
            <Link href="#">default — text-primary, hover underline</Link>
          </p>
          <p>
            <Link href="#" variant="muted">muted — 본문에 묻히는 링크</Link>
          </p>
          <p>
            <Link href="#" variant="underline">underline — 항상 underline</Link>
          </p>
        </div>
      </Demo>

      <Demo caption="External + 아이콘 합성">
        <Link href="https://anthropic.com" external>
          Anthropic <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ Link, ExternalLink }} />
      </Collapsible>
    </ComponentDoc>
  );
}
