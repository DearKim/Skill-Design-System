import * as React from 'react';
import { Checkbox } from '@/components/Checkbox';
import { Label } from '@/components/Label';
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
    name: 'checked / onCheckedChange',
    type: `boolean | 'indeterminate' / (checked) => void`,
    description: 'controlled 상태. indeterminate 표현 가능.',
  },
  { name: 'defaultChecked', type: 'boolean', default: 'false', description: 'uncontrolled 초기값.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성.' },
  { name: 'required', type: 'boolean', default: 'false', description: 'form 검증.' },
];

const EXAMPLE = `function Demo() {
  const [agree, setAgree] = React.useState(false);
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms"
        checked={agree}
        onCheckedChange={(v) => setAgree(v === true)} />
      <Label htmlFor="terms">약관에 동의합니다</Label>
    </div>
  );
}
render(<Demo />);`;

export function CheckboxSection() {
  const [checked, setChecked] = React.useState(true);

  return (
    <ComponentDoc
      id="checkbox"
      title="Checkbox"
      description="다중 선택 체크박스. Label 컴포넌트와 함께 써 클릭 영역을 확장."
    >
      <Demo caption="States">
        <div className="grid gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="cb-1" defaultChecked={false} />
            <Label htmlFor="cb-1">unchecked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cb-2" checked={checked} onCheckedChange={(v) => setChecked(v === true)} />
            <Label htmlFor="cb-2">controlled (현재: {String(checked)})</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cb-3" disabled />
            <Label htmlFor="cb-3">disabled</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cb-4" disabled defaultChecked />
            <Label htmlFor="cb-4">disabled + checked</Label>
          </div>
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ React, Checkbox, Label }} noInline />
      </Collapsible>
    </ComponentDoc>
  );
}
