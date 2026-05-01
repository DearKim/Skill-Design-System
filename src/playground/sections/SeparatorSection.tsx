import { Separator } from '@/components/Separator';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const PROPS: PropRow[] = [
  { name: 'orientation', type: `'horizontal' | 'vertical'`, default: `'horizontal'`, description: '방향.' },
  { name: 'decorative', type: 'boolean', default: 'true', description: 'true 면 시맨틱 미부여(role="none").' },
];

const EXAMPLE = `<div>
  <p className="text-sm font-medium">Skill Design System</p>
  <p className="text-xs text-muted-foreground">React + TypeScript + Tailwind</p>
  <Separator className="my-3" />
  <p className="text-sm text-muted-foreground">메뉴 항목 사이 구분</p>
</div>`;

export function SeparatorSection() {
  return (
    <ComponentDoc
      id="separator"
      title="Separator"
      description="가로 / 세로 구분선. 시맨틱이 필요하면 decorative={false}."
    >
      <Demo caption="Horizontal">
        <div>
          <p className="text-sm font-medium">Skill Design System</p>
          <p className="text-xs text-muted-foreground">React + TypeScript + Tailwind</p>
          <Separator className="my-3" />
          <p className="text-sm text-muted-foreground">메뉴 항목 사이 구분</p>
        </div>
      </Demo>

      <Demo caption="Vertical">
        <div className="flex h-5 items-center gap-3 text-sm">
          <span>홈</span>
          <Separator orientation="vertical" />
          <span>제품</span>
          <Separator orientation="vertical" />
          <span>회사 소개</span>
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ Separator }} />
      </Collapsible>
    </ComponentDoc>
  );
}
