# Label PRD

## 1. 컴포넌트 개요

- **이름**: `Label`
- **목적**: 폼 컨트롤(Input / Checkbox / Switch / Select)의 라벨링. `htmlFor` 로 연결.
- **유사/관련 컴포넌트**: 없음 (foundational form).
- **shadcn 베이스 여부**: 예 — Radix Label.

## 2. 유저스토리

- **US-1**: As a 폼 작성자, I want 라벨 클릭으로 입력 필드에 포커스되거나 토글되길 원한다, so that 클릭 영역이 넓다.
- **US-2**: As a 스크린리더 사용자, I want 입력의 의미를 라벨로 들을 수 있길 원한다, so that 폼이 자기 설명적이다.

## 3. Props

| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| htmlFor | `string` | - | 연결할 input id | US-1, US-2 |
| className | `string` | - | 외부 확장 | (공통) |
| ...HTMLLabel | native | - | children 등 | (공통) |

## 4. Variants

없음.

## 5. Sizes

단일 (`text-sm font-medium`). 컨트롤과 같은 라인 높이.

## 6. States

- `default`
- `peer-disabled:cursor-not-allowed` + `peer-disabled:opacity-50` — 연결된 input 이 disabled 면 라벨도 흐려짐 (Tailwind peer 셀렉터)

## 7. 접근성

- **연결**: `htmlFor` ↔ input `id` 1:1. — US-1
- **포커스**: 라벨 자체엔 포커스 없음. 클릭하면 input 으로 포커스 이동 (HTML native).
- **간접 라벨링**: input 을 Label 로 감싸도 동작 (`htmlFor` 생략 가능) — 다만 명시적 `htmlFor` 가 더 안전.

## 8. 사용 예시

```tsx
<div className="space-y-1.5">
  <Label htmlFor="email">이메일</Label>
  <Input id="email" type="email" />
</div>

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">약관에 동의</Label>
</div>
```

## 9. Anti-patterns

- ❌ Label 없이 placeholder 만 — 포커스 후 사라지면 컨텍스트 손실.
- ❌ `htmlFor` 누락 — 클릭 영역 좁아지고 스크린리더 연결 끊김.
- ❌ Label 안에 인터랙티브 요소(button 등) 추가 — 클릭 모델 모호.
