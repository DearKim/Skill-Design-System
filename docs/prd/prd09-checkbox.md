# Checkbox PRD

## 1. 컴포넌트 개요

- **이름**: `Checkbox`
- **목적**: 다중 선택 / 약관 동의 / 폼 옵션 토글.
- **유사/관련 컴포넌트**: `Switch`(즉시 반영 토글), `Radio`(미구현, 단일 선택).
- **shadcn 베이스 여부**: 예 — Radix Checkbox + lucide Check.

## 2. 유저스토리

- **US-1**: As a 폼 사용자, I want 약관 동의를 키보드만으로도 토글하고 싶다, so that 마우스 없이도 진행된다.
- **US-2**: As a 부분 선택 UI 작성자, I want indeterminate 상태도 표현하고 싶다, so that "일부 선택됨" 을 시각화한다.
- **US-3**: As a 라벨 클릭 사용자, I want 라벨을 눌러도 체크가 토글되길 원한다, so that 클릭 영역이 넓다.

## 3. Props

| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| checked | `boolean \| 'indeterminate'` | - | controlled 상태 | US-2 |
| onCheckedChange | `(checked) => void` | - | 변경 콜백 | US-2 |
| defaultChecked | `boolean` | `false` | uncontrolled 초기값 | (공통) |
| disabled | `boolean` | `false` | 비활성 | (공통) |
| required | `boolean` | `false` | form 검증 | (공통) |
| id | `string` | - | Label `htmlFor` 연결 | US-3 |

## 4. Variants

variant 없음.

## 5. Sizes

단일 크기 (`h-4 w-4`). 차후 `sm/md/lg` 가 필요해지면 시스템 사이즈 정책 따름.

## 6. States

- `default` / `hover`(미세) / `focus-visible` / `disabled`
- `selected` (= `data-[state=checked]` — 시스템 표준 [`../style/style04-states.md`](../style/style04-states.md))
- indeterminate: Radix `data-[state=indeterminate]` (현재 시각 표현은 checked 와 동일 — 필요 시 별도 스타일 추가)

## 7. 접근성

- **키보드**: Space 로 토글 (Radix native). — US-1
- **포커스**: 시스템 ring. — (공통)
- **ARIA**: Radix 가 `role="checkbox"` + `aria-checked` 자동 부여.
- **라벨 연결**: `<Label htmlFor={id}>` 필수 — 클릭 영역 확장 + 스크린리더 라벨링. — US-3

## 8. 사용 예시

```tsx
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">약관에 동의합니다</Label>
</div>

// controlled
const [agree, setAgree] = useState(false);
<Checkbox checked={agree} onCheckedChange={(v) => setAgree(v === true)} />

// indeterminate
<Checkbox checked="indeterminate" />
```

## 9. Anti-patterns

- ❌ Label 없이 단독 — 클릭 영역 좁음 + a11y 라벨 부재.
- ❌ `onCheckedChange` 콜백에서 `v === true` 검사 누락 — `'indeterminate'` 도 truthy 라 `Boolean(v)` 가 의도와 다름.
- ❌ Switch 의 의미 자리에 Checkbox 사용 (즉시 반영 설정) — `Switch` 사용.
