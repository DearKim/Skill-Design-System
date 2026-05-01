import { Button } from '@/components/Button';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const VARIANTS = [
  'default',
  'secondary',
  'destructive',
  'outline',
  'ghost',
  'link',
  'inverse',
  'warning',
  'success',
  'info',
] as const;

const PROPS: PropRow[] = [
  {
    name: 'variant',
    type: `'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'inverse' | 'warning' | 'success' | 'info'`,
    default: `'default'`,
    description: '시각적 변형. 의미는 style02-variants 표.',
  },
  {
    name: 'size',
    type: `'sm' | 'md' | 'lg'`,
    default: `'md'`,
    description: '크기 토큰. 모바일 1차 CTA 는 lg.',
  },
  {
    name: 'asChild',
    type: 'boolean',
    default: 'false',
    description: 'true 면 자식에 props 위임 (Radix Slot).',
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: '비동기 진행 중. 자동 disabled + aria-busy + 스피너.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '비활성. opacity-50 + pointer-events-none.',
  },
  {
    name: 'className',
    type: 'string',
    description: '외부 Tailwind 확장. cn() 으로 병합.',
  },
];

const EXAMPLE = `<div className="flex flex-wrap items-center gap-3">
  <Button>Click me</Button>
  <Button variant="destructive" size="sm">Delete</Button>
  <Button variant="outline">Outline</Button>
  <Button loading>Saving...</Button>
</div>`;

export function ButtonSection() {
  return (
    <ComponentDoc
      id="button"
      title="Button"
      description="가장 중심이 되는 인터랙션. 11 variant × 3 size + loading/disabled. asChild 로 Link 와 합성 가능."
    >
      <Demo caption="Variants (size = md)">
        <div className="flex flex-wrap gap-3">
          {VARIANTS.map((v) =>
            v === 'inverse' ? (
              <div key={v} className="rounded-md bg-primary p-2">
                <Button variant={v}>{v}</Button>
              </div>
            ) : (
              <Button key={v} variant={v}>
                {v}
              </Button>
            ),
          )}
        </div>
      </Demo>

      <Demo caption="Sizes / States">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">sm — h-8</Button>
            <Button size="md">md — h-10 (기본)</Button>
            <Button size="lg">lg — h-12 (모바일 1차)</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button>default</Button>
            <Button disabled>disabled</Button>
            <Button loading>loading...</Button>
          </div>
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ Button }} />
      </Collapsible>
    </ComponentDoc>
  );
}
