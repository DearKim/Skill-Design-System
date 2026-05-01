# Switch PRD

## 1. 컴포넌트 개요

- **이름**: `Switch`
- **목적**: ON / OFF 즉시 반영 토글. 알림 켜기, 다크모드(미사용) 등.
- **유사/관련 컴포넌트**: `Checkbox`(폼 제출 시 반영). 의미 차이는 [§9](#9-anti-patterns) 참고.
- **shadcn 베이스 여부**: 예 — Radix Switch.

## 2. 유저스토리

- **US-1**: As a 설정 사용자, I want 토글이 즉시 반영되는 동작을 시각적으로도 인지하고 싶다, so that "저장하기" 없이도 안심한다.
- **US-2**: As a 폼 사용자, I want 라벨을 눌러도 토글되길 원한다, so that 클릭 영역이 넓다.

## 3. Props

| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| checked | `boolean` | - | controlled | US-1 |
| onCheckedChange | `(checked) => void` | - | 변경 콜백 | US-1 |
| defaultChecked | `boolean` | `false` | uncontrolled 초기값 | (공통) |
| disabled | `boolean` | `false` | 비활성 | (공통) |
| id | `string` | - | Label 연결 | US-2 |

## 4. Variants

variant 없음.

## 5. Sizes

단일 크기 (`h-6 w-11`).

## 6. States

- `default` / `hover` / `focus-visible` / `disabled`
- `selected` = `data-[state=checked]` (`bg-primary` 트랙 + thumb translate)

## 7. 접근성

- **키보드**: Space 로 토글 (Radix native). — US-1
- **ARIA**: `role="switch"` + `aria-checked` 자동.
- **라벨**: `Label htmlFor` 필수. — US-2

## 8. 사용 예시

```tsx
<div className="flex items-center gap-3">
  <Switch id="notif" />
  <Label htmlFor="notif">알림 받기</Label>
</div>

// controlled
const [enabled, setEnabled] = useState(true);
<Switch checked={enabled} onCheckedChange={setEnabled} />
```

## 9. Anti-patterns

- ❌ "저장하기" 버튼이 있는 폼에서 Switch 사용 — Checkbox 가 맞음. Switch 는 즉시 반영.
- ❌ 라벨 없이 사용 — 무엇이 켜지는지 불명확.
- ❌ Switch 안에 텍스트 (커스텀) — Radix 패턴 깨짐. 라벨로 분리.
