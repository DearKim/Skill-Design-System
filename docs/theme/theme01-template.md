# Theme PRD Template

각 프로젝트 테마는 `themeNN-[프로젝트].md` 로 다음 구조를 따릅니다.
컴포넌트 PRD ([`../prd/prd01-template.md`](../prd/prd01-template.md)) 와 같은 9 섹션 골격을 사용하되, "컴포넌트" 자리에 **프로젝트 토큰·variant 사용 정책·컴포넌트 인벤토리**를 채웁니다.

> **작성 원칙**
> - 테마는 **시스템이 노출한 토큰 슬롯을 채우는 것**입니다. 시스템에 없는 토큰/variant/state 가 필요해지면 [`../skill/skill02-llm-rules.md`](../skill/skill02-llm-rules.md) 의 "새 규칙 추가 절차" 를 따라 시스템 문서를 먼저 갱신합니다.
> - 모든 props/variants/접근성 요구는 **유저스토리에서 도출** 됩니다.
> - 시스템 표준과 동일한 정책은 다시 쓰지 않고 참조 링크만 둡니다 ([`../style/`](../style/), [`../architecture/`](../architecture/)).

---

# [Project] Theme PRD

## 1. 개요

- **이름**: `theme-[project]`
- **목적**: [한 줄 요약 — 프로젝트 정체성 + 시스템 적용 방식]
- **유사/관련 테마**: [있다면 명시]

## 2. 유저스토리

`As a [역할], I want [기능], so that [목적]` 형식. 이후 모든 결정의 근거.

- **US-1**: ...
- **US-2**: ...

## 3. 토큰 매핑 (시스템 슬롯 채우기)

| Token | Value (HSL) | 출처 | 비고 |
|-------|-------------|------|------|
| `--primary` | `[H S% L%]` | US-? | 프로젝트 메인 컬러 |
| `--primary-foreground` | `[H S% L%]` | US-? | |
| ... | | | |

> **시스템 공유 토큰** (테마가 직접 정의하지 않음): `--destructive`, `--warning`, `--success`, `--info`, `--radius`, `--font-sans`. 시스템 표준 단일 정의를 그대로 사용합니다 — 자세한 이유는 [`../architecture/architecture06-tokens-policy.md`](../architecture/architecture06-tokens-policy.md).

## 4. Variants 사용 정책

시스템 표준 variant ([`../style/style02-variants.md`](../style/style02-variants.md)) 중 본 테마에서 어떤 variant 를 어떤 컨텍스트에 쓰는지.

| Variant | 본 테마에서의 용도 |
|---------|---------------------|
| `default` | [...] |
| `secondary` | [...] |
| `inverse` | [brand 풀블리드 배경 위 CTA — 사용처가 없으면 생략] |
| ... | |

## 5. Sizes 사용 정책

`sm/md/lg` 의미는 [`../style/style03-sizes.md`](../style/style03-sizes.md) 와 동일. 본 테마에서 어떤 사이즈를 1차 인터랙션 기본으로 쓰는지.

| Size | 본 테마에서의 용도 |
|------|---------------------|
| `sm` | [...] |
| `md` | [...] |
| `lg` | [모바일 우선 컨텍스트의 1차 CTA 등] |

## 6. States 사용 정책

[`../style/style04-states.md`](../style/style04-states.md) 표준에서 본 테마가 사용하는 상태.

| State | 사용처 | 출처 |
|-------|--------|------|
| `selected` | [필터 칩, 활성 nav 등] | US-? |
| `motion-reduced` | [모션 컴포넌트] | US-? |
| `consent-pending` | [도메인 동의 게이트] | US-? |
| `beta` | [Beta 라벨 컴포넌트] | US-? |

## 7. 접근성

- **키보드**: [...]
- **ARIA**: [...]
- **포커스**: 시스템 기본(`--ring` = `--primary`) 그대로.
- **모션**: `prefers-reduced-motion` 가드 (시스템 정책, [`../style/style04-states.md`](../style/style04-states.md)).

## 8. 사용 예시

```css
/* globals.css — [Project] 토큰 (시스템 공유 토큰은 시스템 globals.css 에서 import) */
:root {
  --primary: ...;
  --primary-foreground: ...;
  /* ... 테마 고유 슬롯만 */
}
```

```tsx
<Button>주요 CTA</Button>
<LegalNotice tone="warning">...</LegalNotice>  {/* 시스템 컴포넌트 */}
```

## 9. Anti-patterns

본 테마 컨텍스트에서의 금지 사용. 시스템 일반 anti-pattern 은 [`../style/style01-tailwind-rules.md`](../style/style01-tailwind-rules.md) 참고.

- ❌ [도메인 특수 금지 항목 — 예: 의료법 카피, 모바일 터치 타깃 미달]
- ❌ 시스템 공유 토큰(`--destructive` 등)을 테마에서 재정의 — 시스템 표준을 갱신해야 함.
- ❌ 다크모드 `.dark` 블록 추가 — 시스템 정책상 라이트 단일 ([`../architecture/architecture06-tokens-policy.md`](../architecture/architecture06-tokens-policy.md)).

## 10. 컴포넌트 인벤토리

본 테마가 사용하는 컴포넌트. 각 항목은 `prdNN-[component].md` 로 점진 등록.

| 컴포넌트 | 우선순위 | shadcn 베이스 | 비고 |
|----------|----------|---------------|------|
| `Button` | P0 | 예 | |
| ... | | | |
