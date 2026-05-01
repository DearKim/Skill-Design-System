import * as React from 'react';
import { Button } from '@/components/Button';
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  type ToastProps,
} from '@/components/Toast';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

type ToastEntry = {
  id: number;
  variant: ToastProps['variant'];
  title: string;
  description?: string;
  action?: string;
};

const VARIANT_DEMOS: Array<Pick<ToastEntry, 'variant' | 'title' | 'description' | 'action'>> = [
  { variant: 'default', title: '저장되었습니다', description: '변경사항이 적용되었습니다.' },
  { variant: 'success', title: '지원 완료', description: '담당자 검토 후 연락드립니다.' },
  { variant: 'info', title: 'AI 상담 시작', description: '약 30초 정도 걸려요.' },
  { variant: 'warning', title: '사업자 인증 준비 중', description: '곧 오픈됩니다.', action: '알림' },
  { variant: 'destructive', title: '매칭이 취소되었습니다', description: '다른 일자리를 찾아보세요.' },
];

const PROPS: PropRow[] = [
  {
    name: 'variant',
    type: `'default' | 'destructive' | 'success' | 'warning' | 'info'`,
    default: `'default'`,
    description: '시각적 변형. 알림 4종 토큰을 따른다.',
  },
  {
    name: 'duration',
    type: 'number',
    default: 'inherits Provider',
    description: '자동 닫힘 ms.',
  },
  {
    name: 'open / onOpenChange',
    type: 'boolean / (open) => void',
    description: 'controlled 상태.',
  },
];

const EXAMPLE = `function Demo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>토스트 띄우기</Button>
      <Toast open={open} onOpenChange={setOpen} variant="success">
        <div className="grid gap-1">
          <ToastTitle>지원 완료</ToastTitle>
          <ToastDescription>담당자 검토 후 연락드립니다.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
    </div>
  );
}
render(<Demo />);`;

export function ToastSection() {
  const [toasts, setToasts] = React.useState<ToastEntry[]>([]);

  const push = (entry: Omit<ToastEntry, 'id'>) =>
    setToasts((prev) => [...prev, { ...entry, id: Date.now() + Math.random() }]);

  return (
    <ComponentDoc
      id="toast"
      title="Toast"
      description="비동기 알림. App 루트에 ToastProvider + ToastViewport 가 설치되어 있어야 합니다."
    >
      <Demo caption="Variants — 클릭해서 우측 하단 알림 확인">
        <div className="flex flex-wrap gap-2">
          {VARIANT_DEMOS.map((demo) => (
            <Button
              key={demo.variant}
              variant={
                demo.variant === 'default'
                  ? 'outline'
                  : (demo.variant as Exclude<ToastProps['variant'], null>)
              }
              size="sm"
              onClick={() => push(demo)}
            >
              {demo.variant ?? 'default'}
            </Button>
          ))}
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample
          code={EXAMPLE}
          scope={{ React, Button, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction }}
          noInline
        />
      </Collapsible>

      {toasts.map((t) => (
        <Toast
          key={t.id}
          variant={t.variant}
          onOpenChange={(open) => {
            if (!open) setToasts((prev) => prev.filter((p) => p.id !== t.id));
          }}
        >
          <div className="grid gap-1">
            <ToastTitle>{t.title}</ToastTitle>
            {t.description ? <ToastDescription>{t.description}</ToastDescription> : null}
          </div>
          {t.action ? <ToastAction altText={t.action}>{t.action}</ToastAction> : null}
          <ToastClose />
        </Toast>
      ))}
    </ComponentDoc>
  );
}
