import { Button } from '@/components/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/Card';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const PARTS: PropRow[] = [
  { name: 'Card', type: 'div', description: '루트 컨테이너 — border + shadow-sm + rounded-lg.' },
  { name: 'CardHeader', type: 'div', description: '제목 영역 (p-6, gap-1.5).' },
  { name: 'CardTitle', type: 'h3', description: '제목 (font-semibold, leading-none).' },
  { name: 'CardDescription', type: 'p', description: '부제 (text-sm, muted-foreground).' },
  { name: 'CardContent', type: 'div', description: '본문 영역 (p-6 pt-0).' },
  { name: 'CardFooter', type: 'div', description: '하단 액션 영역 (p-6 pt-0, flex).' },
];

const EXAMPLE = `<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>10분 알바</CardTitle>
    <CardDescription>출퇴근 틈새 시간을 즉시 활용하세요.</CardDescription>
  </CardHeader>
  <CardContent className="text-sm text-muted-foreground">
    지역·시간대·임금 필터로 빠르게 좁혀 보세요.
  </CardContent>
  <CardFooter>
    <Button size="lg" className="w-full">지원하기</Button>
  </CardFooter>
</Card>`;

export function CardSection() {
  return (
    <ComponentDoc
      id="card"
      title="Card"
      description="조합형 카드 — Header / Title / Description / Content / Footer 의 part 들을 합성해 사용."
    >
      <Demo caption="기본 합성">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>AI 솔루션 정보</CardTitle>
              <CardDescription>
                식약처 허가 의료 AI 제품을 분야별로 비교해보세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              본 검색 결과는 허가된 의료기기에 대한 카테고리 기반 안내이며, 개별 제품 추천이나
              진단을 대신하지 않습니다.
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">살펴보기</Button>
              <Button size="sm" variant="ghost">
                자세히
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10분 알바</CardTitle>
              <CardDescription>출퇴근 틈새 시간을 즉시 활용하세요.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              지역·시간대·임금 필터로 빠르게 좁혀 보세요.
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full">
                지원하기
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Demo>

      <Collapsible title="Parts">
        <PropsTable rows={PARTS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample
          code={EXAMPLE}
          scope={{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button }}
        />
      </Collapsible>
    </ComponentDoc>
  );
}
