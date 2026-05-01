# Badge PRD

## 1. 컴포넌트 개요

- **이름**: `Badge`
- **목적**: 라벨 / 태그 / 짧은 상태 표시. 카운트, Beta, "지원 완료" 등.
- **유사/관련 컴포넌트**: `Button` (시각은 비슷하지만 인터랙션 아님). shadcn `badge` 베이스.
- **shadcn 베이스 여부**: 예 — 알림 4 토큰 variant 추가.

## 2. 유저스토리

- **US-1**: As a 정보 소비자, I want 카드/메뉴 옆에 카테고리·상태가 작은 시각 단위로 보이길 원한다, so that 한눈에 분류된다.
- **US-2**: As a Beta/공지 작성자, I want 동일 뱃지로 일관된 톤(warning)을 쓰고 싶다, so that 모든 페이지에서 같은 의미가 같은 색으로 보인다.

## 3. Props

| Name | Type | Required | Default | Description | 출처 |
|------|------|----------|---------|-------------|------|
| variant | `'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'warning' \| 'success' \| 'info'` | No | `'default'` | 시각적 변형 | US-1, US-2 |
| className | `string` | No | - | 외부 확장 | (공통) |
| ...HTMLSpan | native | - | - | onClick 등 | (공통) |

## 4. Variants

7종. 사용 가이드:
- `default` — 일반 카운트/태그
- `secondary` — 약한 강조
- `destructive` — 실패·위험·취소
- `outline` — 배경 없이
- `warning` — Beta, 면책 — US-2
- `success` — 완료, 성공
- `info` — 정보 안내

## 5. Sizes

단일 크기 (`text-xs` + `px-2 py-0.5`). 인터랙션 컴포넌트가 아니라 `sm/md/lg` 미적용.

## 6. States

- `default` / `hover` / `focus`(focus-visible 대신 focus — span 이라 비-인터랙션 기본)
- `disabled` / `loading` 등은 사용 안 함

## 7. 접근성

- 시맨틱이 필요한 경우 부모에서 `aria-label` 부여 (예: 알림 카운트 → "5 unread").
- 색만으로 의미를 구분하지 않도록 텍스트 라벨 동반 (예: "Beta", "완료").

## 8. 사용 예시

```tsx
<Badge>New</Badge>
<Badge variant="warning">Beta</Badge>
<Badge variant="success">완료</Badge>
<Badge variant="destructive">취소</Badge>

// 컨텍스트와 함께
<span>AI 상담 <Badge variant="warning">Beta</Badge></span>

// 카운트
<button>
  알림 <Badge>5</Badge>
</button>
```

## 9. Anti-patterns

- ❌ Badge 안에 인터랙션(`onClick` + 클릭 표시) — 클릭이 필요하면 `Button size="sm"` 사용.
- ❌ raw 색상으로 임의 톤 만들기 — variant 사용.
- ❌ 색만으로 의미 전달 ("초록 = 완료") — 텍스트 라벨 동반 (a11y).
