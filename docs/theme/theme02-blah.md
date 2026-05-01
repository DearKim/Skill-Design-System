# BLAH Homepage Theme PRD

> [`theme01-template.md`](./theme01-template.md) 의 9 섹션 + §10 인벤토리 구조를 따릅니다.
> BLAH 회사 홈페이지(blah.co.kr)가 본 디자인 시스템을 어떻게 소비할지 정의합니다.

---

## 1. 개요

- **이름**: `theme-blah`
- **목적**: 두 형제 제품(A.PAGO, TEUM)을 소개·연결하는 정적 마케팅 사이트의 Echo Wave 브랜드 토큰을 시스템 슬롯에 채우고, 모션 중심 컴포넌트 인벤토리를 등록한다.
- **유사/관련 테마**: [`theme03-apago`](./theme03-apago.md), [`theme04-teum`](./theme04-teum.md) — 셋이 동일 시스템 슬롯을 채우는 형제 테마.

## 2. 유저스토리

- **US-1**: As a 잠재 고객(파트너 / 미디어 / 채용 지원자), I want 회사 홈에서 두 제품의 정체성을 한 번에 식별하고 싶다, so that A.PAGO·TEUM 으로 자연스럽게 진입할 수 있다.
- **US-2**: As a 사이트 방문자, I want 스크롤 진입 시 부드러운 페이드/스태거 모션을 보고 싶다, so that 회사가 정보를 다루는 톤을 신뢰할 수 있다.
- **US-3**: As a 모바일 방문자, I want 한 손으로도 모든 제품 카드/Hero/CTA 가 읽히길 원한다, so that 메시지 위계가 무너지지 않는다.
- **US-4**: As a `prefers-reduced-motion` 사용자, I want 모든 진입 애니메이션이 자동 비활성화되길 원한다, so that 어지럼증 없이 콘텐츠를 읽을 수 있다.
- **US-5**: As a 디자인 시스템 운영자, I want 회사 홈의 brand teal 이 두 제품 accent 색과 충돌하지 않게 격리되길 원한다, so that 테마 간 교차 오염이 일어나지 않는다.
- **US-6**: As a Hero CTA 디자이너, I want brand 풀블리드(`bg-primary`) 위에 흰 배경 CTA 를 일관된 variant 로 쓰고 싶다, so that 브랜드 영역 위 가독성이 보장된다.

## 3. 토큰 매핑

본 테마가 직접 정의하는 슬롯만 명시. 시스템 공유 토큰(`--destructive`, `--warning`, `--success`, `--info`, `--radius`, `--font-sans`)은 [`../architecture/architecture06-tokens-policy.md`](../architecture/architecture06-tokens-policy.md) 를 그대로 사용.

| Token | Value (HSL) | 출처 | 원 색상 |
|-------|-------------|------|---------|
| `--background` | `0 0% 100%` | US-1 | white |
| `--foreground` | `168 79% 11%` | US-1 | brand-charcoal `#04342c` |
| `--primary` | `163 69% 37%` | US-1 | Echo Wave teal `#1d9e75` |
| `--primary-foreground` | `0 0% 100%` | US-1 | white |
| `--secondary` | `154 53% 92%` | US-1 | brand-mist `#e1f5ee` |
| `--secondary-foreground` | `166 76% 25%` | US-1 | brand-deep `#0f6e56` |
| `--accent` | `166 76% 25%` | US-2 | brand-deep |
| `--accent-foreground` | `0 0% 100%` | US-2 | white |
| `--muted` | `210 40% 98%` | US-1 | slate-50 |
| `--muted-foreground` | `215 16% 47%` | US-1 | slate-500 |
| `--border` | `214 32% 91%` | (공통) | shadcn 기본 |
| `--input` | `214 32% 91%` | (공통) | shadcn 기본 |
| `--ring` | `163 69% 37%` (= `--primary`) | (공통) | focus ring |

> A.PAGO blue(`#1878CE`)·TEUM green(`#82C926`)은 본 테마에서 토큰화하지 않는다 — `src/content/products.ts` 의 콘텐츠 데이터로만 보유하고 두 제품 카드 안에서만 적용한다 (US-5).

## 4. Variants 사용 정책

시스템 표준 variant 는 [`../style/style02-variants.md`](../style/style02-variants.md). 본 테마에서 사용하는 컨텍스트:

| Variant | 본 테마에서의 용도 |
|---------|---------------------|
| `default` | Hero CTA, "제품 보기" |
| `secondary` | About 섹션 보조 배지 |
| `outline` | "회사 소개" 같은 약한 강조 |
| `ghost` | 헤더 네비 링크 |
| `link` | 인라인 링크 |
| `inverse` | Hero `bg-primary` 풀블리드 위 CTA (US-6) |
| `destructive` / `warning` / `success` / `info` | 본 테마 사용처 없음. 시스템 차원에는 존재 — 미사용 자체가 문제는 아님. |

## 5. Sizes 사용 정책

| Size | 본 테마에서의 용도 |
|------|---------------------|
| `sm` | Footer 네비, 보조 링크 |
| `md` | 헤더 네비, 본문 내 CTA (기본) |
| `lg` | Hero / Section CTA |

## 6. States 사용 정책

| State | 사용처 | 출처 |
|-------|--------|------|
| `default` / `hover` / `focus-visible` | 모든 인터랙션 요소 | (공통) |
| `active` | 버튼/링크 (선택) | - |
| `motion-reduced` | `FadeUp` / `Stagger` / `EchoWaveBars` / `ScrollProgress` | US-4 |
| `disabled` / `loading` / `error` / `selected` / `consent-pending` / `beta` | 미사용 — 폼·비동기 인터랙션 없음 | - |

## 7. 접근성

- **키보드**: 헤더/푸터 네비, 모든 LinkButton, ProductCard 가 Tab 으로 접근. — US-3
- **ARIA**: `EchoWaveBars` SVG 는 데코레이션이면 `aria-hidden="true"`, 의미론적이면 `role="img" aria-label="..."`. — US-2
- **포커스**: 시스템 기본 brand teal ring. brand 풀블리드 영역에서 ring offset 자동 흰색.
- **모션**: `motion-reduced` state 정책에 따라 진입 애니메이션 비활성. — US-4

## 8. 사용 예시

```css
/* globals.css — 테마 고유 슬롯만. 공유 토큰은 시스템 globals.css 에서 정의됨 */
:root {
  --background: 0 0% 100%;
  --foreground: 168 79% 11%;
  --primary: 163 69% 37%;
  --primary-foreground: 0 0% 100%;
  --secondary: 154 53% 92%;
  --secondary-foreground: 166 76% 25%;
  --accent: 166 76% 25%;
  --accent-foreground: 0 0% 100%;
  --muted: 210 40% 98%;
  --muted-foreground: 215 16% 47%;
  --border: 214 32% 91%;
  --input: 214 32% 91%;
  --ring: 163 69% 37%;
}
```

```tsx
<Button size="lg">제품 보기</Button>
<Button variant="outline" size="lg">회사 소개</Button>

// brand 풀블리드 Hero 위 CTA
<section className="bg-primary text-primary-foreground">
  <Button variant="inverse" size="lg">제품 보기</Button>
</section>

<FadeUp>
  <h1>흩어진 데이터에서, 한 줄의 사실을</h1>
</FadeUp>
```

## 9. Anti-patterns

- ❌ A.PAGO blue / TEUM green 을 본 테마의 `--primary` 로 매핑 — 콘텐츠 데이터로만 노출 (US-5).
- ❌ raw hex 직타: `<Button className="bg-[#1d9e75]">` — `bg-primary` 사용.
- ❌ 시스템 공유 토큰(`--destructive`, `--warning`, `--font-sans`, `--radius`)을 테마에서 재정의 — 시스템 갱신 절차로.
- ❌ 모션을 `useReducedMotion` 가드 없이 framer-motion 으로 직접 작성 — 시스템 모션 유틸 경유 (US-4).
- ❌ 다크모드 `.dark` 블록 추가 — 시스템 정책상 라이트 단일 ([`../architecture/architecture06-tokens-policy.md`](../architecture/architecture06-tokens-policy.md)).

## 10. 컴포넌트 인벤토리

| 컴포넌트 | 우선순위 | shadcn 베이스 | 비고 |
|----------|----------|---------------|------|
| `Button` | P0 | 예 | `inverse` variant 사용 |
| `Container` | P0 | 자체 | 페이지 가로 정렬 |
| `Section` | P0 | 자체 | `muted` 옵션 |
| `Header` | P0 | 자체 | sticky + backdrop-blur |
| `Footer` | P0 | 자체 | 3열 → 1열 반응형 |
| `LinkButton` | P0 | Button asChild | 내부/외부 링크 자동 분기 |
| `FadeUp` | P1 | 자체(framer-motion) | `motion-reduced` 가드 내장 |
| `Stagger` / `StaggerItem` | P1 | 자체 | — |
| `EchoWaveBars` | P2 | 자체 | brand 시그니처 SVG |
| `ScrollProgress` | P2 | 자체 | 상단 진행도 바 |
| `Hero` | P1 | 자체 | 풀블리드 + 패럴랙스 |
| `ProductSection` | P1 | 자체 | alternate 옵션 |
| `ProductCard` | P1 | 자체 | compact 변종 |
| `FeatureList` | P2 | 자체 | accent 스트라이프 |
| `SectionHeader` | P1 | 자체 | eyebrow + title + description |
