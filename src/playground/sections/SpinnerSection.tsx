import { Spinner } from '@/components/Spinner';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const PROPS: PropRow[] = [
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: `'md'`, description: '12 / 16 / 24px.' },
  { name: 'label', type: 'string', description: '있으면 role="status" + aria-label.' },
];

const EXAMPLE = `<div className="flex items-center gap-4 text-primary">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
  <Spinner className="text-success" />
  <Spinner className="text-destructive" />
</div>`;

export function SpinnerSection() {
  return (
    <ComponentDoc
      id="spinner"
      title="Spinner"
      description="비동기 진행 중 표시. Button.loading 내부에서 자동으로 사용됨; 단독으로도 가능."
    >
      <Demo caption="Sizes">
        <div className="flex items-center gap-4 text-primary">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </Demo>

      <Demo caption="컬러는 currentColor 따라감">
        <div className="flex items-center gap-4">
          <Spinner className="text-primary" />
          <Spinner className="text-success" />
          <Spinner className="text-warning" />
          <Spinner className="text-destructive" />
          <Spinner className="text-muted-foreground" />
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ Spinner }} />
      </Collapsible>
    </ComponentDoc>
  );
}
