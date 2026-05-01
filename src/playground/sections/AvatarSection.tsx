import { Avatar, AvatarImage, AvatarFallback } from '@/components/Avatar';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const PROPS: PropRow[] = [
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: `'md'`, description: '32 / 40 / 48px.' },
];

const EXAMPLE = `<div className="flex items-center gap-3">
  <Avatar size="sm">
    <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="user" />
    <AvatarFallback>SH</AvatarFallback>
  </Avatar>
  <Avatar size="md">
    <AvatarFallback className="bg-primary text-primary-foreground">A.P</AvatarFallback>
  </Avatar>
  <Avatar size="lg">
    <AvatarFallback className="bg-success text-success-foreground">T</AvatarFallback>
  </Avatar>
</div>`;

export function AvatarSection() {
  return (
    <ComponentDoc
      id="avatar"
      title="Avatar"
      description="사용자 프로필 이미지 + fallback. 이미지 로딩 실패 시 자동으로 fallback 으로 전환."
    >
      <Demo caption="Sizes">
        <div className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="user" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="https://i.pravatar.cc/40?img=2" alt="user" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://i.pravatar.cc/40?img=3" alt="user" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
        </div>
      </Demo>

      <Demo caption="Fallback (이미지 없음 / 실패)">
        <div className="flex items-center gap-3">
          <Avatar size="md">
            <AvatarImage src="" alt="empty" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarFallback className="bg-primary text-primary-foreground">A.P</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarFallback className="bg-success text-success-foreground">T</AvatarFallback>
          </Avatar>
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ Avatar, AvatarImage, AvatarFallback }} />
      </Collapsible>
    </ComponentDoc>
  );
}
