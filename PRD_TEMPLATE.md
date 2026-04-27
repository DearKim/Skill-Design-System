# PRD Template

각 컴포넌트는 `[ComponentName].prd.md` 파일로 다음 구조를 따릅니다.
LLM은 사용자와의 문답이 끝난 후 이 템플릿을 채워 넣습니다.

> **작성 원칙**
> - 모든 props/variants/접근성 요구는 **유저스토리에서 도출**되어야 합니다.
> - 네이밍과 구조는 `CONVENTIONS.md`를 따릅니다.
> - `[]`로 표시된 부분은 작성 시 채워 넣는 placeholder입니다.

---

# [ComponentName] PRD

## 1. 컴포넌트 개요

- **이름**: [ComponentName]
- **목적**: [한 줄 요약]
- **유사/관련 컴포넌트**: [있다면 명시. shadcn에 베이스가 있으면 그것도 명시]
- **shadcn 베이스 여부**: [예 / 아니오 / 변형]

## 2. 유저스토리

`As a [역할], I want [기능], so that [목적]` 형식으로 작성합니다.
**이 섹션이 이후 모든 결정의 근거**가 됩니다.

- **US-1**: As a [역할], I want [기능], so that [목적].
- **US-2**: As a [역할], I want [기능], so that [목적].
- **US-3**: ...

## 3. Props

유저스토리에서 도출한 props. `CONVENTIONS.md`의 네이밍 규칙을 따릅니다.

| Name | Type | Required | Default | Description | 출처 |
|------|------|----------|---------|-------------|------|
| variant | `'default' \| 'secondary' \| ...` | No | `'default'` | 시각적 변형 | US-1 |
| size | `'sm' \| 'md' \| 'lg'` | No | `'md'` | 크기 | US-2 |
| disabled | `boolean` | No | `false` | 비활성화 | US-3 |
| className | `string` | No | - | 외부 스타일 확장 | (공통) |
| ... | | | | | |

> 모든 prop은 **출처 칼럼에 유저스토리 번호**가 명시되어야 합니다.
> 출처가 없으면 prop을 빼거나, 유저스토리를 추가합니다.

## 4. Variants

각 variant의 시각적 정의 (TailwindCSS 클래스 기준).

| Variant | Background | Text | Border | Hover | 비고 |
|---------|-----------|------|--------|-------|------|
| default | `bg-primary` | `text-primary-foreground` | - | `hover:bg-primary/90` | 기본 |
| secondary | `bg-secondary` | `text-secondary-foreground` | - | `hover:bg-secondary/80` | |
| destructive | `bg-destructive` | `text-destructive-foreground` | - | `hover:bg-destructive/90` | 삭제 등 위험 액션 |
| ... | | | | | |

## 5. Sizes

| Size | 높이 | 가로 padding | font-size | 비고 |
|------|------|---------------|-----------|------|
| sm | `h-8` | `px-3` | `text-sm` | |
| md | `h-10` | `px-4` | `text-sm` | 기본 |
| lg | `h-12` | `px-6` | `text-base` | |

## 6. States

이 컴포넌트에 적용되는 상태만 정의합니다 (CONVENTIONS 2번 표 참고).

| State | Trigger | 시각 표현 | 행동 |
|-------|---------|-----------|------|
| default | 평상시 | 기본 스타일 | - |
| hover | 마우스 오버 | `hover:bg-primary/90` | - |
| focus-visible | 키보드 포커스 | `focus-visible:ring-2 focus-visible:ring-ring` | - |
| active | 눌리는 중 | `active:scale-[0.98]` (선택) | - |
| disabled | `disabled` prop | `opacity-50`, `pointer-events-none` | 클릭 무시, `aria-disabled` |
| loading | `loading` prop | 스피너 + disabled 외관 | 클릭 무시, `aria-busy` |

## 7. 접근성

유저스토리에서 도출되는 접근성 요구사항.

- **키보드**: [Tab으로 포커스, Enter/Space로 활성화 등]
- **ARIA**: [`aria-disabled`, `aria-busy`, `aria-pressed` 등 해당하는 것]
- **포커스 표시**: [키보드 포커스 시 명확한 ring]
- **스크린리더**: [필요 시 `aria-label`, `sr-only` 텍스트 등]
- **출처**: [관련 US 번호]

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

// asChild로 링크처럼
<Button asChild>
  <a href="/dashboard">Go to dashboard</a>
</Button>
```

## 9. Anti-patterns

해서는 안 되는 사용. 임의 해석 가능 지점을 막습니다.

- ❌ `<Button className="bg-red-500">` — variant로 해결합니다 (`destructive` 사용).
- ❌ `<Button size="small">` — `'sm'`을 사용합니다 (CONVENTIONS).
- ❌ 링크 용도로 그냥 `<Button onClick={() => navigate(...)}>` — `asChild` + `<a>` 사용.
- ❌ 임의 hex 색상 직접 지정 — 디자인 토큰(`bg-primary` 등) 사용.
- ❌ `<Button disabled loading>` 같이 의미 중복 — `loading`이 자동으로 비활성 처리.

---

## PRD 작성 체크리스트

작성 후 다음을 확인합니다.

- [ ] 1번 개요는 한 줄로 요약 가능한가
- [ ] 2번 유저스토리가 모든 props/variants/states/접근성의 근거가 되는가
- [ ] 3번 Props가 CONVENTIONS 네이밍을 따르는가 (size: sm/md/lg, variant 등)
- [ ] 3번 Props 표의 모든 행에 출처 US 번호가 있는가
- [ ] 4번 Variants가 Tailwind/shadcn 시맨틱 토큰으로 명시되었는가
- [ ] 5번 Sizes가 CONVENTIONS 기본 토큰과 일치하는가
- [ ] 6번 States가 컴포넌트 특성에 맞게 정의되었는가 (불필요한 state 없는가)
- [ ] 7번 접근성이 유저스토리에서 도출 가능한가
- [ ] 8번 사용 예시가 실제 동작 가능한가
- [ ] 9번 anti-pattern이 임의 해석 가능 지점을 막는가
