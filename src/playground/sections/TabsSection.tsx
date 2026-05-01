import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/Tabs';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const PARTS: PropRow[] = [
  { name: 'Tabs', type: 'div', description: 'value / onValueChange (controlled) 또는 defaultValue.' },
  { name: 'TabsList', type: 'div', description: 'role="tablist" 자동.' },
  { name: 'TabsTrigger', type: 'button', description: 'data-[state=active] 로 활성 표시.' },
  { name: 'TabsContent', type: 'div', description: '비활성 panel 은 mount 안 됨 (forceMount 옵션).' },
];

const EXAMPLE = `<Tabs defaultValue="10min" className="w-full max-w-md">
  <TabsList className="w-full">
    <TabsTrigger value="10min" className="flex-1">10분</TabsTrigger>
    <TabsTrigger value="30min" className="flex-1">30분</TabsTrigger>
    <TabsTrigger value="4h" className="flex-1">4시간</TabsTrigger>
  </TabsList>
  <TabsContent value="10min" className="rounded-md border border-border bg-card p-4 text-sm">
    10분 안에 끝나는 일들.
  </TabsContent>
  <TabsContent value="30min" className="rounded-md border border-border bg-card p-4 text-sm">
    30분 단위 단기 알바.
  </TabsContent>
  <TabsContent value="4h" className="rounded-md border border-border bg-card p-4 text-sm">
    4시간 미만 반나절 일감.
  </TabsContent>
</Tabs>`;

export function TabsSection() {
  return (
    <ComponentDoc
      id="tabs"
      title="Tabs"
      description="좌우 분할 탭 네비. selected state 표준(data-state=active)을 그대로 활용."
    >
      <Demo caption="기본 사용">
        <Tabs defaultValue="10min" className="w-full max-w-md">
          <TabsList className="w-full">
            <TabsTrigger value="10min" className="flex-1">
              10분
            </TabsTrigger>
            <TabsTrigger value="30min" className="flex-1">
              30분
            </TabsTrigger>
            <TabsTrigger value="4h" className="flex-1">
              4시간
            </TabsTrigger>
          </TabsList>
          <TabsContent value="10min" className="rounded-md border border-border bg-card p-4 text-sm">
            10분 안에 끝나는 일들을 모았어요. 출퇴근길에 바로 시작 가능.
          </TabsContent>
          <TabsContent value="30min" className="rounded-md border border-border bg-card p-4 text-sm">
            30분 단위 단기 알바. 점심 시간 활용.
          </TabsContent>
          <TabsContent value="4h" className="rounded-md border border-border bg-card p-4 text-sm">
            4시간 미만 반나절 일감.
          </TabsContent>
        </Tabs>
      </Demo>

      <Collapsible title="Parts">
        <PropsTable rows={PARTS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample
          code={EXAMPLE}
          scope={{ Tabs, TabsList, TabsTrigger, TabsContent }}
        />
      </Collapsible>
    </ComponentDoc>
  );
}
