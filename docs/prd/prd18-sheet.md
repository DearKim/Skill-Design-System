# Sheet (Drawer) PRD

## 1. 컴포넌트 개요

- **이름**: `Sheet` (compound: Trigger / Content / Header / Title / Description / Footer / Close)
- **목적**: 슬라이드 인 드로어 — 모바일 햄버거 네비, 필터 바텀시트, 사이드 정보 패널.
- **유사/관련 컴포넌트**: `Dialog`(중앙 모달). 시맨틱은 같은 Radix Dialog 위.
- **shadcn 베이스 여부**: 예 — Radix Dialog 재사용.

## 2. 유저스토리

- **US-1**: As a 모바일 사용자, I want 햄버거 → 좌측 드로어로 메뉴가 스르륵 들어오길 원한다, so that 한 손으로도 자연스럽게 조작된다.
- **US-2**: As a 필터 사용자, I want 바텀시트로 필터를 모아 한 번에 적용하고 싶다.
- **US-3**: As a 키보드 사용자, I want Sheet 도 Esc·포커스 트랩이 동작하길 원한다.

## 3. Props

### `Sheet` (root)
Dialog 와 동일 — `open`, `onOpenChange`, `defaultOpen`, `modal`.

### `SheetContent`
| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| side | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | 슬라이드 방향 | US-1, US-2 |
| className | `string` | - | 외부 확장 (폭/높이) | (공통) |

## 4. Variants

`SheetContent.side` 가 사실상 variant 역할 (cva 로 처리).

## 5. Sizes

기본:
- `left/right` → `w-3/4 sm:max-w-sm`
- `top/bottom` → `inset-x-0` (전체 폭)

`className` 으로 조정.

## 6. States

- 열기/닫기 애니메이션: side 별 slide-in/out (`tailwindcss-animate`).
- 포커스 트랩 / Esc — Dialog 와 동일.

## 7. 접근성

- Dialog 와 동일 — `role="dialog" aria-modal`, 포커스 트랩, Esc, 스크롤 잠금. — US-3
- Title / Description 시맨틱 연결.

## 8. 사용 예시

```tsx
// 모바일 좌측 네비
<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="sm">☰</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>메뉴</SheetTitle>
    </SheetHeader>
    <nav>...</nav>
  </SheetContent>
</Sheet>

// 필터 바텀시트
<Sheet>
  <SheetTrigger asChild><Button>필터</Button></SheetTrigger>
  <SheetContent side="bottom" className="h-[80vh]">
    <SheetHeader>
      <SheetTitle>필터</SheetTitle>
      <SheetDescription>지역, 시간대, 임금</SheetDescription>
    </SheetHeader>
    {/* filter form */}
    <SheetFooter>
      <SheetClose asChild>
        <Button className="w-full">적용</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## 9. Anti-patterns

- ❌ 데스크톱에서도 Sheet 만 사용 — 큰 화면에선 사이드바(SidePanel) 가 적절.
- ❌ Sheet 안에 또 Sheet — Dialog 와 마찬가지로 중첩 금지.
- ❌ side="bottom" 에 너무 긴 콘텐츠 — `h-[Xvh]` 로 높이 제한 + 내부 스크롤.
- ❌ 모바일 햄버거를 네이티브 absolute 박스로 직접 — 포커스 트랩/스크롤 잠금 누락.
