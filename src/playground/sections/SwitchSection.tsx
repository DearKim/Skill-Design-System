import * as React from 'react';
import { Switch } from '@/components/Switch';
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
    type: 'boolean / (checked) => void',
    description: 'controlled 상태.',
  },
  { name: 'defaultChecked', type: 'boolean', default: 'false', description: 'uncontrolled 초기값.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성.' },
];

const EXAMPLE = `function Demo() {
  const [enabled, setEnabled] = React.useState(true);
  return (
    <div className="flex items-center gap-3">
      <Switch id="notif" checked={enabled} onCheckedChange={setEnabled} />
      <Label htmlFor="notif">알림 받기 ({String(enabled)})</Label>
    </div>
  );
}
render(<Demo />);`;

export function SwitchSection() {
  const [enabled, setEnabled] = React.useState(true);

  return (
    <ComponentDoc
      id="switch"
      title="Switch"
      description="ON / OFF 토글. Checkbox 와 의미는 비슷하지만, 즉시 반영되는 설정에 사용."
    >
      <Demo caption="States">
        <div className="grid gap-3">
          <div className="flex items-center gap-3">
            <Switch id="sw-1" defaultChecked={false} />
            <Label htmlFor="sw-1">unchecked</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="sw-2" checked={enabled} onCheckedChange={setEnabled} />
            <Label htmlFor="sw-2">controlled (현재: {String(enabled)})</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="sw-3" disabled />
            <Label htmlFor="sw-3">disabled</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="sw-4" disabled defaultChecked />
            <Label htmlFor="sw-4">disabled + checked</Label>
          </div>
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ React, Switch, Label }} noInline />
      </Collapsible>
    </ComponentDoc>
  );
}
