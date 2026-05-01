import { Button } from '@/components/Button';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/Tooltip';
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
    name: 'side',
    type: `'top' | 'right' | 'bottom' | 'left'`,
    default: `'top'`,
    description: '노출 방향 (TooltipContent prop).',
  },
  {
    name: 'delayDuration',
    type: 'number',
    default: '700ms',
    description: '호버 후 표시까지 지연.',
  },
  {
    name: 'sideOffset',
    type: 'number',
    default: '4',
    description: '트리거와의 간격(px).',
  },
];

const EXAMPLE = `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">호버해 주세요</Button>
  </TooltipTrigger>
  <TooltipContent side="top">
    이게 툴팁입니다 ⭐
  </TooltipContent>
</Tooltip>`;

export function TooltipSection() {
  return (
    <ComponentDoc
      id="tooltip"
      title="Tooltip"
      description="호버 / 포커스 시 노출되는 짧은 보조 설명. App 루트의 TooltipProvider 가 필요합니다."
    >
      <Demo caption="4방향 side">
        <div className="flex flex-wrap gap-3">
          {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
            <Tooltip key={side}>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  {side}
                </Button>
              </TooltipTrigger>
              <TooltipContent side={side}>side="{side}"</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample
          code={EXAMPLE}
          scope={{ Button, Tooltip, TooltipTrigger, TooltipContent }}
        />
      </Collapsible>
    </ComponentDoc>
  );
}
