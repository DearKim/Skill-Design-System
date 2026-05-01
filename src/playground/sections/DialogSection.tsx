import { Button } from '@/components/Button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/Dialog';
import {
  ComponentDoc,
  Demo,
  Collapsible,
  PropsTable,
  LiveExample,
  type PropRow,
} from '../ComponentDoc';

const PARTS: PropRow[] = [
  { name: 'Dialog', type: 'Radix Root', description: 'open/onOpenChange controlled 상태.' },
  { name: 'DialogTrigger', type: 'button', description: '다이얼로그를 여는 트리거.' },
  { name: 'DialogContent', type: 'div', description: 'modal 컨텐츠 (Overlay 포함, X 버튼 포함).' },
  { name: 'DialogHeader / Footer', type: 'div', description: '레이아웃 헬퍼.' },
  { name: 'DialogTitle / Description', type: 'h2 / p', description: 'aria-labelledby / aria-describedby 자동.' },
  { name: 'DialogClose', type: 'button', description: '내부에서 닫기 (asChild 가능).' },
];

const EXAMPLE = `<Dialog>
  <DialogTrigger asChild>
    <Button>다이얼로그 열기</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>매칭을 취소하시겠어요?</DialogTitle>
      <DialogDescription>
        취소 후에는 같은 일자리에 다시 지원해야 합니다.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">아니요</Button>
      </DialogClose>
      <DialogClose asChild>
        <Button variant="destructive">취소하기</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

export function DialogSection() {
  return (
    <ComponentDoc
      id="dialog"
      title="Dialog (Modal)"
      description="모달 다이얼로그. Radix Dialog — 포커스 트랩, Esc 닫기, 스크롤 잠금 자동."
    >
      <Demo caption="기본 사용">
        <Dialog>
          <DialogTrigger asChild>
            <Button>다이얼로그 열기</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>매칭을 취소하시겠어요?</DialogTitle>
              <DialogDescription>
                취소 후에는 같은 일자리에 다시 지원해야 합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">아니요</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="destructive">취소하기</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Demo>

      <Collapsible title="Parts">
        <PropsTable rows={PARTS} />
      </Collapsible>

      <Collapsible title="예시 코드 / 예시 출력">
        <LiveExample
          code={EXAMPLE}
          scope={{
            Button,
            Dialog,
            DialogTrigger,
            DialogContent,
            DialogHeader,
            DialogTitle,
            DialogDescription,
            DialogFooter,
            DialogClose,
          }}
        />
      </Collapsible>
    </ComponentDoc>
  );
}
