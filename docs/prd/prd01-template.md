# PRD Template

각 컴포넌트는 `prdNN-[ComponentName].md` (또는 코드 동거 사본 `[ComponentName].prd.md`) 파일로 다음 구조를 따릅니다.
LLM 은 사용자와의 문답이 끝난 후 이 템플릿을 채워 넣습니다.

> **작성 원칙**
> - 모든 props/variants/접근성 요구는 **유저스토리에서 도출**되어야 합니다 ([`../user-story/user-story01-writing-guide.md`](../user-story/user-story01-writing-guide.md)).
> - 네이밍과 구조는 [`../architecture/architecture03-naming.md`](../architecture/architecture03-naming.md) 를 따릅니다.
> - 시각 토큰은 [`../style/`](../style/) 의 규칙을 따릅니다.
> - `[]` 로 표시된 부분은 작성 시 채워 넣는 placeholder 입니다.

---

# [ComponentName] PRD

## 1. 컴포넌트 개요

- **이름**: [ComponentName]
- **목적**: [한 줄 요약]
- **유사/관련 컴포넌트**: [있다면 명시. shadcn 에 베이스가 있으면 그것도 명시]
- **shadcn 베이스 여부**: [예 / 아니오 / 변형]

## 2. 유저스토리

`As a [역할], I want [기능], so that [목적]` 형식으로 작성합니다.
**이 섹션이 이후 모든 결정의 근거**가 됩니다.

- **US-1**: As a [역할], I want [기능], so that [목적].
- **US-2**: As a [역할], I want [기능], so that [목적].
- **US-3**: ...

## 3. Props

유저스토리에서 도출한 props. `architecture/architecture03-naming.md` 의 네이밍 규칙을 따릅니다.

| Name | Type | Required | Default | Description | 출처 |
|------|------|----------|---------|-------------|------|
| variant | `'default' \| 'secondary' \| ...` | No | `'default'` | 시각적 변형 | US-1 |
| size | `'sm' \| 'md' \| 'lg'` | No | `'md'` | 크기 | US-2 |
| disabled | `boolean` | No | `false` | 비활성화 | US-3 |
| className | `string` | No | - | 외부 스타일 확장 | (공통) |
| ... | | | | | |

> 모든 prop 은 **출처 칼럼에 유저스토리 번호**가 명시되어야 합니다.
> 출처가 없으면 prop 을 빼거나, 유저스토리를 추가합니다.

## 4. Variants

각 variant 의 시각적 정의. 색상 매핑은 [`../style/style02-variants.md`](../style/style02-variants.md) 참고.

| Variant | Background | Text | Border | Hover | 비고 |
|---------|-----------|------|--------|-------|------|
| default | `bg-primary` | `text-primary-foreground` | - | `hover:bg-primary/90` | 기본 |
| secondary | `bg-secondary` | `text-secondary-foreground` | - | `hover:bg-secondary/80` | |
| destructive | `bg-destructive` | `text-destructive-foreground` | - | `hover:bg-destructive/90` | 삭제 등 위험 액션 |
| ... | | | | | |

## 5. Sizes

표준 토큰은 [`../style/style03-sizes.md`](../style/style03-sizes.md). 컴포넌트별로 다를 경우만 여기 명시합니다.

| Size | 높이 | 가로 padding | font-size | 비고 |
|------|------|---------------|-----------|------|
| sm | `h-8` | `px-3` | `text-sm` | |
| md | `h-10` | `px-4` | `text-sm` | 기본 |
| lg | `h-12` | `px-6` | `text-base` | |

## 6. States

이 컴포넌트에 적용되는 상태만 정의합니다. 표준 상태 정의는 [`../style/style04-states.md`](../style/style04-states.md).

| State | Trigger | 시각 표현 | 행동 |
|-------|---------|-----------|------|
| default | 평상시 | 기본 스타일 | - |
| hover | 마우스 오버 | `hover:bg-primary/90` | - |
| focus-visible | 키보드 포커스 | `focus-visible:ring-2 focus-visible:ring-ring` | - |
| active | 눌리는 중 | `active:scale-[0.98]` (선택) | - |
| disabled | `disabled` prop | `opacity-50`, `pointer-events-none` | 클릭 무시, `aria-disabled` |
| loading | `loading` prop | 스피너 + disabled 외관 | 클릭 무시, `aria-busy` |

## 7. 접근성

유저스토리에서 도출되는 접근성 요구사항. 출처 US 번호를 명시합니다.

- **키보드**: [Tab으로 포커스, Enter/Space로 활성화 등] — 출처: [US-?]
- **ARIA**: [`aria-disabled`, `aria-busy`, `aria-pressed` 등] — 출처: [US-?]
- **포커스 표시**: [키보드 포커스 시 명확한 ring]
- **스크린리더**: [필요 시 `aria-label`, `sr-only` 텍스트 등]

> 공통 접근성 기본 요구(키보드 접근, focus-visible ring)는 자동 적용되므로 다시 쓰지 않습니다.
> 컴포넌트 특유의 ARIA 요구만 여기에.

## 8. 사용 예시

실제 코드 스니펫.

```tsx
// 기본
<Button>Click me</Button>

// variant + size
<Button variant="destructive" size="sm">Delete</Button>

// loading 상태
<Button loading>Saving...</Button>

// 아이콘과 함께
<Button>
  <PlusIcon className="mr-2 h-4 w-4" />
  Add item
</Button>

// asChild 로 링크처럼
<Button asChild>
  <a href="/dashboard">Go to dashboard</a>
</Button>
```

## 9. Anti-patterns

해서는 안 되는 사용. 임의 해석 가능 지점을 막습니다.

- ❌ `<Button className="bg-red-500">` — variant 로 해결합니다 (`destructive` 사용).
- ❌ `<Button size="small">` — `'sm'` 을 사용합니다 (`architecture/architecture03-naming.md`).
- ❌ 링크 용도로 그냥 `<Button onClick={() => navigate(...)}>` — `asChild` + `<a>` 사용.
- ❌ 임의 hex 색상 직접 지정 — 디자인 토큰(`bg-primary` 등) 사용.
- ❌ `<Button disabled loading>` 같이 의미 중복 — `loading` 이 자동으로 비활성 처리.

---

작성 후 [prd02-checklist.md](./prd02-checklist.md) 의 검증 체크리스트를 통과해야 합니다.
