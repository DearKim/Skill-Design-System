import * as React from 'react';
import { Progress } from '@/components/Progress';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const PROPS: PropRow[] = [
  { name: 'value', type: 'number (0-100)', description: '현재 진행률. undefined 면 indeterminate.' },
  { name: 'max', type: 'number', default: '100', description: '최대값.' },
];

const EXAMPLE = `function Demo() {
  const [value, setValue] = React.useState(40);
  React.useEffect(() => {
    const id = setInterval(
      () => setValue((v) => (v >= 100 ? 0 : v + 10)),
      800
    );
    return () => clearInterval(id);
  }, []);
  return (
    <div className="w-full max-w-md space-y-2">
      <Progress value={value} />
      <p className="text-xs text-muted-foreground">{value}%</p>
    </div>
  );
}
render(<Demo />);`;

export function ProgressSection() {
  const [value, setValue] = React.useState(40);

  React.useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 800);
    return () => clearInterval(id);
  }, []);

  return (
    <ComponentDoc
      id="progress"
      title="Progress"
      description="결정형 진행률 바. 업로드 / 온보딩 진행도 표시 등."
    >
      <Demo caption="고정값">
        <div className="w-full max-w-md space-y-4">
          <Progress value={20} />
          <Progress value={50} />
          <Progress value={85} />
        </div>
      </Demo>

      <Demo caption={`Animated · 현재 ${value}%`}>
        <div className="w-full max-w-md">
          <Progress value={value} />
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample code={EXAMPLE} scope={{ React, Progress }} noInline />
      </Collapsible>
    </ComponentDoc>
  );
}
