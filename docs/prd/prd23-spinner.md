# Spinner PRD

## 1. 컴포넌트 개요

- **이름**: `Spinner`
- **목적**: 불확정형 비동기 진행 표시. Button.loading 내부 + 단독 사용.
- **유사/관련 컴포넌트**: `Progress`(결정형), `Skeleton`(자리표시).
- **shadcn 베이스 여부**: 아니오 — 자체 (CSS animate-spin + currentColor).

## 2. 유저스토리

- **US-1**: As a 비동기 동작 사용자, I want 진행 중임을 시각적으로 알고 싶다.
- **US-2**: As a 디자이너, I want 스피너 색이 부모 텍스트 색을 따르길 원한다, so that 모든 컨텍스트에서 자연스럽다.
- **US-3**: As a 스크린리더 사용자, I want 단순 데코레이션과 의미 있는 진행 표시를 구분해서 듣고 싶다.

## 3. Props

| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 12 / 16 / 24px | US-1 |
| label | `string` | - | 있으면 `role="status" aria-label`. 없으면 `aria-hidden="true"` | US-3 |
| className | `string` | - | 색은 currentColor — `text-primary` 등으로 변경 | US-2 |

## 4. Variants

variant 없음 — 색은 `currentColor`. 부모의 `text-*` 클래스에 따라 자동.

## 5. Sizes

`sm/md/lg` 시스템 표준. 큰 컨텍스트(페이지 로딩)는 `lg`, 인라인은 `sm`.

## 6. States

해당 없음 — 항상 회전.

## 7. 접근성

- **단독 사용 (페이지 로딩 등)**: `label="페이지 로딩 중"` 으로 `role="status"` + SR 안내. — US-3
- **데코레이션 (Button.loading 내부)**: `label` 생략 → `aria-hidden="true"` 자동 → 부모(Button) 가 `aria-busy="true"` 담당. — US-3

## 8. 사용 예시

```tsx
// 단독
<Spinner label="페이지 로딩 중" size="lg" className="text-primary" />

// 인라인
<div className="flex items-center gap-2 text-muted-foreground">
  <Spinner size="sm" />
  <span>매칭 중...</span>
</div>

// Button 내부 (자동)
<Button loading>저장</Button>

// 다른 색
<Spinner className="text-destructive" />
```

## 9. Anti-patterns

- ❌ 진행률을 알 수 있는데 Spinner 사용 — `Progress` 가 더 정보적.
- ❌ Spinner 만 있고 컨텍스트 없음 — "무엇이 로딩 중인가" 텍스트 동반.
- ❌ raw 색 (`text-blue-500`) — 시스템 토큰 사용.
- ❌ `label` 인데 `role` 또는 `aria-label` 추가 — 컴포넌트가 자동 처리, 중복 금지.
