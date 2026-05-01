# Dialog (Modal) PRD

## 1. 컴포넌트 개요

- **이름**: `Dialog` (compound: Trigger / Portal / Overlay / Content / Header / Title / Description / Footer / Close)
- **목적**: 모달 다이얼로그 — 확인/취소, 폼 입력, 확장된 정보 표시.
- **유사/관련 컴포넌트**: `Sheet`(슬라이드 인 대안), `Tooltip`(짧은 호버 안내).
- **shadcn 베이스 여부**: 예 — Radix Dialog.

## 2. 유저스토리

- **US-1**: As a 사용자, I want 모달이 열릴 때 배경이 어두워지고 포커스가 안에 갇히길 원한다, so that 의식이 모달에 집중된다.
- **US-2**: As a 키보드 사용자, I want Esc 로 닫기·Tab 으로 포커스 순환·열기 전 위치로 복귀하길 원한다, so that 흐름이 끊기지 않는다.
- **US-3**: As a 디자이너, I want 다이얼로그가 화면 중앙에 나타나며 작은 화면에서도 안전하게 들어가길 원한다.

## 3. Props

### `Dialog` (root)
| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| open / onOpenChange | `boolean` / `(o) => void` | - | controlled | (공통) |
| defaultOpen | `boolean` | `false` | uncontrolled | (공통) |
| modal | `boolean` | `true` | 모달 모드 (배경 클릭 차단) | US-1 |

### `DialogContent`
| Name | Type | Description | 출처 |
|------|------|-------------|------|
| onEscapeKeyDown | `(e) => void` | Esc 가로채기 | US-2 |
| onPointerDownOutside | `(e) => void` | 외부 클릭 가로채기 | (공통) |

각 part 는 native HTML attributes 도 받음.

## 4. Variants

variant 없음 — Content 에 `className` 으로 폭/위치 조정.

## 5. Sizes

기본 `max-w-lg`. 큰 모달은 `<DialogContent className="max-w-2xl">` 등.

## 6. States

- 열기/닫기 애니메이션: `data-[state=open]:animate-in` / `data-[state=closed]:animate-out` (`tailwindcss-animate`).
- 포커스: 첫 포커스 가능 요소 → 닫기 시 트리거로 복귀 (Radix native).

## 7. 접근성

- **키보드**: Esc 닫기, Tab 순환 (Radix native). — US-2
- **ARIA**: `role="dialog" aria-modal="true"`, `aria-labelledby` (Title), `aria-describedby` (Description) 자동.
- **포커스 트랩**: Radix 가 자동 처리. — US-1
- **스크롤 잠금**: 모달 열림 시 body 스크롤 잠금 (Radix). — US-1
- **닫기 버튼**: `DialogContent` 가 내부 X 버튼을 기본 포함 (`aria-label="닫기"`).

## 8. 사용 예시

```tsx
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

// controlled
const [open, setOpen] = useState(false);
<Dialog open={open} onOpenChange={setOpen}>...</Dialog>
```

## 9. Anti-patterns

- ❌ Dialog 안에 또 다른 Dialog 깊이 중첩 — 포커스/스크롤 잠금 충돌. 한 다이얼로그 닫고 다음을 띄우는 시퀀스로.
- ❌ 모달인데 외부 클릭으로 중요한 작업이 취소되도록 — `onPointerDownOutside={(e) => e.preventDefault()}` 로 차단 가능.
- ❌ DialogTitle 누락 — `aria-labelledby` 깨짐.
- ❌ 단순 알림 1줄에 Dialog 사용 — `Toast` 가 맞음.
