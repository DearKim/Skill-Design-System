import { Badge } from '@/components/Badge';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const VARIANTS = ['default', 'secondary', 'destructive', 'outline', 'warning', 'success', 'info'] as const;

const PROPS: PropRow[] = [
  {
    name: 'variant',
    type: `'default' | 'secondary' | 'destructive' | 'outline' | 'warning' | 'success' | 'info'`,
    default: `'default'`,
    description: '시각적 변형. Beta 라벨에는 warning 권장.',
  },
  {
    name: 'className',
    type: 'string',
    description: '외부 Tailwind 확장.',
  },
];

const EXAMPLE = `<div className="flex flex-wrap items-center gap-2">
  <Badge>New</Badge>
  <Badge variant="warning">Beta</Badge>
  <Badge variant="success">완료</Badge>
  <Badge variant="destructive">취소</Badge>
  <Badge variant="outline">draft</Badge>
</div>`;

export function BadgeSection() {
  return (
    <ComponentDoc
      id="badge"
      title="Badge"
      description="라벨 / 태그 / 상태 표시. 알림 4종 토큰을 그대로 가져옴."
    >
      <Demo caption="Variants">
        <div className="flex flex-wrap gap-2">
          {VARIANTS.map((v) => (
            <Badge key={v} variant={v}>
              {v}
            </Badge>
          ))}
        </div>
      </Demo>

      <Demo caption="실제 사용 예시">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="flex items-center gap-2">
            AI 상담 <Badge variant="warning">Beta</Badge>
          </span>
          <span className="flex items-center gap-2">
            매칭 성사 <Badge variant="success">완료</Badge>
          </span>
          <span className="flex items-center gap-2">
            매칭 실패 <Badge variant="destructive">취소</Badge>
          </span>
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ Badge }} />
      </Collapsible>
    </ComponentDoc>
  );
}
