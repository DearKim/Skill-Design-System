# Tooltip PRD

## 1. 컴포넌트 개요

- **이름**: `Tooltip` (compound: Provider / Trigger / Content)
- **목적**: 호버 / 포커스 시 노출되는 짧은 보조 설명 (1줄 정도).
- **유사/관련 컴포넌트**: `Popover`(클릭 토글, 미구현), `Dialog`(상세 정보).
- **shadcn 베이스 여부**: 예 — Radix Tooltip.

## 2. 유저스토리

- **US-1**: As a 데스크톱 사용자, I want 아이콘 버튼에 호버하면 의미가 짧게 뜨길 원한다.
- **US-2**: As a 키보드 사용자, I want Tab 포커스 시에도 툴팁이 뜨길 원한다, so that 마우스 없이도 의미가 노출된다.
- **US-3**: As a 모바일 사용자, I want 툴팁에 의존하지 않고도 의미가 분명하길 원한다 (모바일은 hover 가 없음).

## 3. Props

### `TooltipProvider` (App 루트)
| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| delayDuration | `number` | `700ms` | 호버 후 표시까지 지연 | (공통) |
| skipDelayDuration | `number` | `300ms` | 그룹 내 빠른 이동 시 즉시 표시 | (공통) |

### `Tooltip` (root)
| Name | Type | Default | Description |
|------|------|---------|-------------|
| open / onOpenChange | `boolean` / `(o) => void` | - | controlled |
| delayDuration | `number` | (Provider 상속) | 개별 지연 |

### `TooltipContent`
| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| side | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | 노출 방향 | US-1 |
| sideOffset | `number` | `4` | 트리거와 간격 | (공통) |
| align | `'start' \| 'center' \| 'end'` | `'center'` | 정렬 | (공통) |

## 4. Variants

variant 없음 — 단일 시각 (`bg-foreground text-background`).

## 5. Sizes

단일 (`text-xs px-3 py-1.5`). 1줄 분량.

## 6. States

- 열기/닫기 애니메이션 (`data-[state=open]:animate-in` 등).

## 7. 접근성

- **키보드**: 트리거 포커스 시 자동 노출 (Radix). — US-2
- **ARIA**: `role="tooltip"` + 트리거에 `aria-describedby` 자동 연결.
- **모바일**: 툴팁은 호버 의존 — 핵심 정보를 툴팁에만 두지 말 것. — US-3

## 8. 사용 예시

```tsx
// App 루트 (한 번만)
<TooltipProvider delayDuration={200}>
  <App />
</TooltipProvider>

// 사용
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="sm">
      <InfoIcon className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent side="top">이 항목에 대한 설명</TooltipContent>
</Tooltip>
```

## 9. Anti-patterns

- ❌ 핵심 정보(가격, 의무 사항)를 툴팁에만 노출 — 모바일에서 안 보임.
- ❌ 1문장 이상의 긴 본문 — Popover/Dialog 사용.
- ❌ TooltipProvider 누락 — 동작 안 함.
- ❌ 트리거가 disabled `<button>` — 브라우저가 hover/focus 이벤트를 막아 툴팁 안 뜸. `aria-disabled` 사용 또는 wrapper 변경.
