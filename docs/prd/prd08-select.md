# Select PRD

## 1. 컴포넌트 개요

- **이름**: `Select` (compound: Trigger / Value / Content / Group / Label / Item / Separator / ScrollUpButton / ScrollDownButton)
- **목적**: 단일 선택 드롭다운. 폼·필터·정렬에 사용.
- **유사/관련 컴포넌트**: `Tabs` (UI 토글), `Combobox` (검색형 — 미구현).
- **shadcn 베이스 여부**: 예 — Radix Select 위에 `sm/md/lg` 사이즈, lucide chevron.

## 2. 유저스토리

- **US-1**: As a 일자리 검색자, I want 지역(서울 25개구) 같이 많은 옵션도 키보드로 빠르게 찾고 싶다, so that 마우스 없이도 조작된다.
- **US-2**: As a 폼 사용자, I want value 가 controlled / uncontrolled 둘 다 지원되길 원한다, so that 외부 상태와 합성이 자유롭다.
- **US-3**: As a 모바일 사용자, I want 트리거 높이가 Input 과 일치하길 원한다, so that 폼이 정렬된다.

## 3. Props

### `Select` (root)
| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| value / onValueChange | `string` / `(v) => void` | - | controlled | US-2 |
| defaultValue | `string` | - | uncontrolled 초기값 | US-2 |
| disabled | `boolean` | `false` | 전체 비활성 | (공통) |
| open / onOpenChange | `boolean` / `(o) => void` | - | controlled open | (공통) |

### `SelectTrigger`
| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Input 동일 토큰 | US-3 |
| className | `string` | - | 확장 | (공통) |

### `SelectItem`
| Name | Type | Required | Description | 출처 |
|------|------|----------|-------------|------|
| value | `string` | Yes | 옵션 값 | US-2 |
| disabled | `boolean` | - | 항목 비활성 | (공통) |

## 4. Variants

variant 없음 — Trigger 형태는 `size` 로만 분기.

## 5. Sizes

`SelectTrigger.size`: 시스템 표준 [`../style/style03-sizes.md`](../style/style03-sizes.md).

## 6. States

- 트리거: `default` / `hover` / `focus-visible` / `disabled`
- Item: `default` / `hover`(focus 와 동일) / `selected` (시스템 표준 [`../style/style04-states.md`](../style/style04-states.md), Radix `data-state=checked`)

## 7. 접근성

- **키보드**: ↑/↓ 이동, 글자 입력 시 자동 검색, Enter/Space 선택, Esc 닫기 (Radix native). — US-1
- **포커스 트랩**: 열릴 때 트리거 → 첫 옵션, 닫힐 때 복원 (Radix). — (공통)
- **라벨 연결**: 외부 `Label` + `aria-labelledby` 사용 권장.

## 8. 사용 예시

```tsx
<Select value={region} onValueChange={setRegion}>
  <SelectTrigger size="md">
    <SelectValue placeholder="지역 선택" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>서울</SelectLabel>
      <SelectItem value="gangnam">강남구</SelectItem>
      <SelectItem value="seocho">서초구</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectItem value="all">서울 전체</SelectItem>
  </SelectContent>
</Select>
```

## 9. Anti-patterns

- ❌ 옵션이 50개 이상인 경우 그대로 사용 — 검색형 Combobox 컴포넌트로 분리 권장.
- ❌ `SelectItem` 안에 인터랙티브 요소(중첩 button 등) — 키보드 모델 깨짐.
- ❌ `placeholder` 만으로 라벨 — 외부 `Label` 필수 (a11y).
- ❌ controlled `value` 와 `defaultValue` 동시 사용 — 하나만.
