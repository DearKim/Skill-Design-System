import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from '@/components/Select';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const PROPS: PropRow[] = [
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: `'md'`, description: 'Trigger 높이. Input 동일.' },
  {
    name: 'value / onValueChange',
    type: 'string / (value) => void',
    description: 'controlled 상태 (Select root).',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: '전체 비활성.' },
];

const REGIONS = ['강남구', '서초구', '송파구', '마포구', '용산구', '성동구'];

const EXAMPLE = `<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="지역 선택" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>서울</SelectLabel>
      <SelectItem value="gangnam">강남구</SelectItem>
      <SelectItem value="seocho">서초구</SelectItem>
      <SelectItem value="songpa">송파구</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`;

export function SelectSection() {
  return (
    <ComponentDoc
      id="select"
      title="Select"
      description="단일 선택 드롭다운. Radix Select — 키보드 검색·virtualized 스크롤 지원."
    >
      <Demo caption="Sizes">
        <div className="grid w-full max-w-xs gap-3">
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <Select key={s}>
              <SelectTrigger size={s}>
                <SelectValue placeholder={`${s} — 지역 선택`} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>서울</SelectLabel>
                  {REGIONS.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                  <SelectSeparator />
                  <SelectItem value="all">서울 전체</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
            Select,
            SelectTrigger,
            SelectValue,
            SelectContent,
            SelectGroup,
            SelectLabel,
            SelectItem,
            SelectSeparator,
          }}
          previewClassName="min-h-[260px] items-start"
        />
      </Collapsible>
    </ComponentDoc>
  );
}
