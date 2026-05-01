import { Skeleton } from '@/components/Skeleton';
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
    name: 'className',
    type: 'string',
    description: '높이/너비/모양은 className 으로 지정 (h-, w-, rounded-).',
  },
];

const EXAMPLE = `<div className="rounded-lg border border-border bg-card p-4 w-full max-w-md">
  <div className="flex items-center gap-3">
    <Skeleton className="h-10 w-10 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-3 w-1/3" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  </div>
  <Skeleton className="mt-3 h-24 w-full" />
</div>`;

export function SkeletonSection() {
  return (
    <ComponentDoc
      id="skeleton"
      title="Skeleton"
      description="로딩 자리표시자. 카드/리스트가 비동기로 채워지는 동안 레이아웃 점프 방지."
    >
      <Demo caption="기본 형태">
        <div className="w-full max-w-md space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </Demo>

      <Demo caption="카드 자리표시 (뉴스 / 일자리 카드 로딩)">
        <div className="grid w-full gap-3 sm:grid-cols-2">
          {[0, 1].map((i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-3 w-1/3" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              <Skeleton className="mt-3 h-24 w-full" />
              <Skeleton className="mt-3 h-3 w-3/4" />
            </div>
          ))}
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ Skeleton }} />
      </Collapsible>
    </ComponentDoc>
  );
}
