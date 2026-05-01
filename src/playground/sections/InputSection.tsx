import { Input } from '@/components/Input';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const PROPS: PropRow[] = [
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: `'md'`, description: 'h-8 / h-10 / h-12.' },
  { name: 'hasError', type: 'boolean', default: 'false', description: 'aria-invalid="true" + destructive ring.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성.' },
  {
    name: 'type',
    type: 'React.HTMLInputTypeAttribute',
    default: `'text'`,
    description: 'HTML input type.',
  },
  {
    name: '...InputHTMLAttributes',
    type: 'native',
    description: 'placeholder, value, onChange 등 native 속성.',
  },
];

const EXAMPLE = `<div className="space-y-3 w-full max-w-sm">
  <Input placeholder="이메일" type="email" />
  <Input placeholder="비밀번호" type="password" size="lg" />
  <Input placeholder="에러 상태" hasError defaultValue="invalid@" />
</div>`;

export function InputSection() {
  return (
    <ComponentDoc
      id="input"
      title="Input"
      description="기본 텍스트 입력. focus-visible ring · disabled · error(aria-invalid) 상태 지원."
    >
      <Demo caption="Sizes">
        <div className="grid w-full max-w-md gap-3">
          <Input size="sm" placeholder="sm — h-8" />
          <Input size="md" placeholder="md — h-10 (기본)" />
          <Input size="lg" placeholder="lg — h-12 (모바일 1차)" />
        </div>
      </Demo>

      <Demo caption="States">
        <div className="grid w-full max-w-md gap-3">
          <Input placeholder="default — Tab 으로 포커스" />
          <Input placeholder="disabled" disabled />
          <div className="space-y-1.5">
            <Input placeholder="hasError" hasError defaultValue="invalid@" />
            <p className="text-xs text-destructive">올바른 이메일 형식이 아닙니다.</p>
          </div>
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ Input }} />
      </Collapsible>
    </ComponentDoc>
  );
}
