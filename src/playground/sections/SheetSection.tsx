import { Button } from '@/components/Button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@/components/Sheet';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const SIDES = ['top', 'right', 'bottom', 'left'] as const;

const PROPS: PropRow[] = [
  {
    name: 'side',
    type: `'top' | 'right' | 'bottom' | 'left'`,
    default: `'right'`,
    description: '슬라이드 방향 (SheetContent prop).',
  },
  {
    name: 'open / onOpenChange',
    type: 'boolean / (open) => void',
    description: 'Sheet root 의 controlled 상태.',
  },
];

const EXAMPLE = `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">필터 열기</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>필터</SheetTitle>
      <SheetDescription>
        지역, 시간대, 임금을 한 번에 적용하세요.
      </SheetDescription>
    </SheetHeader>
    <SheetFooter className="mt-4">
      <SheetClose asChild>
        <Button>적용</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`;

export function SheetSection() {
  return (
    <ComponentDoc
      id="sheet"
      title="Sheet (Drawer)"
      description="슬라이드 인 드로어. Radix Dialog 재사용 — 모바일 햄버거 네비, 필터 바텀시트 등에 사용."
    >
      <Demo caption="4방향 side">
        <div className="flex flex-wrap gap-2">
          {SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  {side}
                </Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>{side} 드로어</SheetTitle>
                  <SheetDescription>
                    side="{side}" 방향에서 슬라이드되는 드로어 예시입니다.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter className="mt-4">
                  <SheetClose asChild>
                    <Button>확인</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample
          code={EXAMPLE}
          scope={{
            Button,
            Sheet,
            SheetTrigger,
            SheetContent,
            SheetHeader,
            SheetTitle,
            SheetDescription,
            SheetFooter,
            SheetClose,
          }}
        />
      </Collapsible>
    </ComponentDoc>
  );
}
