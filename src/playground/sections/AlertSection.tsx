import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/Alert';
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
    name: 'variant',
    type: `'default' | 'destructive' | 'warning' | 'success' | 'info'`,
    default: `'default'`,
    description: '알림 4종 토큰 + 기본 톤.',
  },
];

const EXAMPLE = `<Alert variant="warning">
  <AlertTriangle />
  <AlertTitle>의료광고법 안내</AlertTitle>
  <AlertDescription>
    본 검색 결과는 허가된 의료기기에 대한 카테고리 기반 안내이며,
    개별 제품 추천이나 진단을 대신하지 않습니다.
  </AlertDescription>
</Alert>`;

export function AlertSection() {
  return (
    <ComponentDoc
      id="alert"
      title="Alert"
      description="페이지 내부 인라인 안내·면책 배너. 의료법 LegalNotice 등 도메인 컴포넌트의 베이스."
    >
      <Demo caption="Variants">
        <div className="space-y-3">
          <Alert>
            <Info />
            <AlertTitle>기본 안내</AlertTitle>
            <AlertDescription>variant 미지정 시 기본 톤. 일반 정보 제공.</AlertDescription>
          </Alert>
          <Alert variant="info">
            <Info />
            <AlertTitle>정보</AlertTitle>
            <AlertDescription>이 검색 결과는 식약처 공시 정보 기반입니다.</AlertDescription>
          </Alert>
          <Alert variant="success">
            <CheckCircle2 />
            <AlertTitle>지원 완료</AlertTitle>
            <AlertDescription>담당자 검토 후 매칭 결과를 알려드립니다.</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTriangle />
            <AlertTitle>의료광고법 안내</AlertTitle>
            <AlertDescription>
              본 검색 결과는 허가된 의료기기에 대한 카테고리 기반 안내이며, 개별 제품 추천이나
              진단을 대신하지 않습니다.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>매칭이 취소되었습니다</AlertTitle>
            <AlertDescription>
              담당자 사정으로 취소되었습니다. 다른 일자리를 찾아보세요.
            </AlertDescription>
          </Alert>
        </div>
      </Demo>

      <Collapsible title="Props">
        <PropsTable rows={PROPS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample
          code={EXAMPLE}
          scope={{ Alert, AlertTitle, AlertDescription, AlertCircle, AlertTriangle, CheckCircle2, Info }}
        />
      </Collapsible>
    </ComponentDoc>
  );
}
