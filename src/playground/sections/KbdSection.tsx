import { Kbd } from '@/components/Kbd';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const PROPS: PropRow[] = [
  { name: 'children', type: 'ReactNode', description: '보여줄 키 라벨 (⌘, ⏎, K 등).' },
];

const EXAMPLE = `<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
  <span className="flex items-center gap-1">
    검색 <Kbd>⌘</Kbd> <Kbd>K</Kbd>
  </span>
  <span className="flex items-center gap-1">
    확인 <Kbd>⏎</Kbd>
  </span>
  <span className="flex items-center gap-1">
    취소 <Kbd>Esc</Kbd>
  </span>
</div>`;

export function KbdSection() {
  return (
    <ComponentDoc
      id="kbd"
      title="Kbd"
      description="키보드 단축키 표시. 검색바 placeholder, 메뉴 항목 우측, 도움말 등에 사용."
    >
      <Demo caption="기본 사용">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            검색 <Kbd>⌘</Kbd> <Kbd>K</Kbd>
          </span>
          <span className="flex items-center gap-1">
            확인 <Kbd>⏎</Kbd>
          </span>
          <span className="flex items-center gap-1">
            취소 <Kbd>Esc</Kbd>
          </span>
          <span className="flex items-center gap-1">
            저장 <Kbd>⌘</Kbd> <Kbd>S</Kbd>
          </span>
        </div>
      </Demo>

      <Demo caption="검색바 안">
        <div className="flex h-10 w-full max-w-sm items-center gap-2 rounded-md border border-input bg-background px-3">
          <span className="flex-1 text-sm text-muted-foreground">틈새 검색하기</span>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ Kbd }} />
      </Collapsible>
    </ComponentDoc>
  );
}
