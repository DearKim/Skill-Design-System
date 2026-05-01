# TEUM Theme PRD

> [`theme01-template.md`](./theme01-template.md) 의 9 섹션 + §10 인벤토리 구조를 따릅니다.
> TEUM(틈) 초단기 긱워크 매칭 플랫폼이 본 디자인 시스템을 어떻게 소비할지 정의합니다.

---

## 1. 개요

- **이름**: `theme-teum`
- **목적**: 구직자(워커) ↔ 구인자(사장) 양면 시장 모바일 앱이 라임 그린 단일 색채계로 동작하면서, 시스템의 4개 알림 토큰과 모바일 셸 컴포넌트를 활용해 시간대별 매칭·온보딩·필터·AI 상담 UX 를 일관되게 운영한다.
- **유사/관련 테마**: [`theme02-blah`](./theme02-blah.md), [`theme03-apago`](./theme03-apago.md).

## 2. 유저스토리

- **US-1**: As a 구직자(워커), I want 시간대(10분/30분/4시간 미만) 카테고리로 일을 빠르게 좁혀 보고 싶다, so that 짧은 틈새 시간을 즉시 활용할 수 있다.
- **US-2**: As a 구인자(사장), I want 워커와 분리된 가입·로그인 경로를 갖고 싶다, so that 사업자 인증 흐름이 워커 OAuth 와 섞이지 않는다.
- **US-3**: As a 신규 워커, I want AI 면담(5단계)으로 이력 없이도 프로필을 만들 수 있길 원한다, so that 진입 마찰 없이 첫 매칭에 도달한다.
- **US-4**: As a 모바일 사용자, I want 한 손 조작에 맞는 햄버거 → 드로어 네비, 큰 터치 타깃, sticky 검색바를 얻고 싶다, so that 출퇴근 중 한 손으로 일을 찾는다.
- **US-5**: As a 데스크톱 사용자, I want 사이드바가 아이콘(태블릿) → 풀(데스크톱) 로 단계 적응되길 원한다, so that 큰 화면에서도 같은 네비 멘탈 모델을 유지한다.
- **US-6**: As a 일자리 검색자, I want 지역(서울 25개구)·정렬(거리/시간/임금) 필터를 모달로 모아 한 번에 적용하고, 칩으로 활성 필터를 보고 싶다, so that 필터 상태가 가시화된다.
- **US-7**: As a AI 틈새 상담 사용자, I want 일정·위치 기반 채팅 UI 를 Beta 라벨과 함께 보고 싶다, so that 정식 추천이 아니라 보조 정보임을 인지한다.
- **US-8**: As a 검색 사용자, I want Cmd+K 로 어디서든 검색바에 포커스되길 원한다, so that 데스크톱에서 키보드 흐름이 끊기지 않는다.
- **US-9**: As a 양면 시장 운영자, I want 워커 색(라임)과 사장 색(중립 회색)이 가입 카드부터 시각적으로 구분되길 원한다, so that 잘못된 진입을 줄인다.

## 3. 토큰 매핑

| Token | Value (HSL) | 출처 | 원 색상 |
|-------|-------------|------|---------|
| `--background` | `0 0% 98%` | US-1 | teum-gray-50 `#FAFAFA` |
| `--foreground` | `240 6% 10%` | US-1 | teum-gray-900 `#18181B` |
| `--primary` | `81 68% 47%` | US-1, US-9 | teum-green-500 `#82C926` |
| `--primary-foreground` | `0 0% 100%` | US-1 | white |
| `--secondary` | `240 5% 96%` | US-9 | teum-gray-100 (사장/중립) |
| `--secondary-foreground` | `240 6% 10%` | US-9 | |
| `--accent` | `82 73% 39%` | US-1 | teum-green-600 `#6BAA1A` |
| `--accent-foreground` | `0 0% 100%` | US-1 | |
| `--muted` | `240 5% 96%` | US-1 | placeholder 영역 |
| `--muted-foreground` | `240 4% 46%` | US-1 | |
| `--border` | `240 5% 90%` | (공통) | shadcn 기본보다 약간 어둡게 |
| `--input` | `240 5% 90%` | (공통) | |
| `--ring` | `81 68% 47%` (= `--primary`) | US-4 | 라임 ring |

시스템 공유 토큰(`--destructive`, `--warning`, `--success`, `--info`, `--radius`, `--font-sans`)은 [`../architecture/architecture06-tokens-policy.md`](../architecture/architecture06-tokens-policy.md) 의 시스템 표준 사용. 본 테마는 4개 알림 토큰을 모두 활용한다.

## 4. Variants 사용 정책

| Variant | 본 테마에서의 용도 |
|---------|---------------------|
| `default` | 워커 측 CTA — "일자리 보기", "지원하기" |
| `secondary` | 사장 측 CTA, 중립 보조 (US-9) |
| `outline` | 필터 칩(비활성), 카테고리 선택 |
| `ghost` | 아이콘 버튼, 사이드바 항목 |
| `link` | 인라인 링크 |
| `destructive` | 매칭 취소 |
| `success` | "지원 완료", "매칭 성사" 알림 |
| `info` | AI 상담/온보딩 진행 안내 |
| `warning` | 사업자 인증 준비 중, Beta 라벨 (US-2, US-7) |
| `inverse` | 본 테마 사용처 없음 |

## 5. Sizes 사용 정책

| Size | 본 테마에서의 용도 |
|------|---------------------|
| `sm` | 필터 칩, 검색바 내부 토글 |
| `md` | 카드 내 액션, 폼 인풋 (시스템 기본) |
| `lg` | 모바일 1차 CTA — 가입/로그인/지원 ([`../style/style03-sizes.md`](../style/style03-sizes.md) "터치 우선" 절 적용) |

## 6. States 사용 정책

| State | 사용처 | 출처 |
|-------|--------|------|
| `default` / `hover` / `focus-visible` / `active` | 모든 인터랙션 (active 는 터치 피드백 강화) | US-4 |
| `disabled` | 사업자 인증 준비 중 버튼 | US-2 |
| `loading` | TanStack Query 페치 중 | US-1 |
| `error` | 폼 검증 실패 (`zod` + `react-hook-form`) | US-3 |
| `selected` | 필터 칩, 시간대 카테고리 카드, 사이드바 활성 | US-6 |
| `beta` | AI 상담, 사업자 로그인 | US-7, US-2 |
| `motion-reduced` / `consent-pending` | 본 테마 사용처 없음 (시스템 표준에는 존재) | - |

## 7. 접근성

- **키보드**: 모바일 우선이지만 데스크톱 1급 — Cmd+K 검색 포커스, Esc 드로어 닫기, Tab 사이드바 탐색. — US-8, US-5
- **터치 타깃**: 모바일 1차 CTA 는 `lg`(`h-12`=48px) 강제 — `md`(40px)는 WCAG 44px 미달 (US-4). 시스템 [`../style/style03-sizes.md`](../style/style03-sizes.md) "터치 우선" 정책에 부합.
- **ARIA**: 필터 칩은 `aria-pressed`(시스템 `selected` state 정책). 시간대 카드는 `role="radio"` + `aria-checked`. 드로어는 `role="dialog" aria-modal="true"` + 포커스 트랩. — US-6
- **포커스**: 시스템 기본 라임 ring.
- **스크린리더**: AI 채팅(`OnboardingChat`, `AiConsultChat`) 메시지는 `aria-live="polite"`. — US-3, US-7

## 8. 사용 예시

```css
/* globals.css — TEUM 테마 고유 슬롯만 */
:root {
  --background: 0 0% 98%;
  --foreground: 240 6% 10%;
  --primary: 81 68% 47%;
  --primary-foreground: 0 0% 100%;
  --secondary: 240 5% 96%;
  --secondary-foreground: 240 6% 10%;
  --accent: 82 73% 39%;
  --accent-foreground: 0 0% 100%;
  --muted: 240 5% 96%;
  --muted-foreground: 240 4% 46%;
  --border: 240 5% 90%;
  --input: 240 5% 90%;
  --ring: 81 68% 47%;
}
```

```tsx
// 모바일 1차 CTA
<Button size="lg" className="w-full">지원하기</Button>

// 필터 칩 — selected state
<FilterChip selected aria-pressed="true">강남구</FilterChip>

// AI 상담 진입 — beta state
<Link href="/ai-consult">
  AI 상담 <Badge variant="warning">Beta</Badge>
</Link>

// 양면 시장 가입 카드 색 분리 (US-9)
<RoleCard role="worker"   variant="default">    {/* 라임 강조 */}
<RoleCard role="business" variant="secondary">  {/* 회색 중립 */}

// 알림 4종
<Button variant="success">지원 완료</Button>
<Button variant="info">AI 상담 시작</Button>
<Button variant="warning">사업자 인증 준비 중</Button>
<Button variant="destructive">매칭 취소</Button>

// 글로벌 단축키 (RootShell 내부)
useHotkey("cmd+k", () => searchInputRef.current?.focus());
```

## 9. Anti-patterns

- ❌ 워커/사장 카드 색을 동일 톤으로 — 잘못된 진입 유발 (US-9).
- ❌ 모바일 1차 CTA 를 `size="md"`(40px)로 — 터치 타깃 44px 미달. `size="lg"` 강제 (US-4).
- ❌ `success`/`warning`/`info`/`destructive` 의미를 raw 색(`bg-green-500` 등)으로 우회 — 시스템 토큰 사용.
- ❌ 사업자 로그인 흐름을 워커 OAuth 와 같은 컴포넌트로 통합 — 분리 필수 (US-2).
- ❌ 필터 칩 활성 상태를 `bg-primary` 풀톤으로 — 가독성 저하. `selected` state 표준(`bg-primary/10 border-primary text-primary`) 사용 (US-6).
- ❌ 드로어를 `<dialog>` 시맨틱 없이 absolute 박스로 — 포커스 트랩/Esc/스크롤 잠금 누락 (US-4).
- ❌ AI 상담/사업자 로그인을 `beta` 라벨 없이 출시 — 정식 기능 오인 (US-2, US-7).
- ❌ Cmd+K 단축키를 모달 안에서 가로채기 — 글로벌 단축키 (US-8).

## 10. 컴포넌트 인벤토리

| 컴포넌트 | 우선순위 | shadcn 베이스 | 비고 |
|----------|----------|---------------|------|
| `Button` | P0 | 예 | 4개 알림 variant 다용 |
| `Input` / `Textarea` | P0 | 예 | react-hook-form + zod |
| `Card` | P0 | 예 | 카테고리/일자리/컨셉 카드 |
| `Badge` | P0 | 예 | Beta, 4대보험, 거리, 임금 |
| `Tabs` | P0 | 예 | 시간대 카테고리, `selected` state |
| `Select` | P0 | 예 | 정렬/지역/직군 |
| `Dialog` | P0 | 예 | 필터 모달, 알럿 |
| `Sheet` (Drawer) | P0 | 예 | 모바일 햄버거 드로어, 필터 바텀시트 |
| `Skeleton` | P0 | 예 | 일자리 목록 로딩 |
| `RootShell` | P0 | 자체 | 모바일 → 태블릿 → 데스크톱 단계 적응 |
| `TopPanel` | P0 | 자체 | 로고 + 검색바 + Cmd+K |
| `SidePanel` | P0 | 자체 | 활성 좌측 바 + nav-items |
| `FilterBar` / `FilterModal` / `FilterChips` / `FilterSection` | P0 | 자체 | Zustand `useFilters` |
| `RoleCard` | P0 | Card 변형 | 워커(default) / 사장(secondary) |
| `WorkerOAuth` | P0 | 자체 | 카카오/네이버/구글 |
| `BusinessLogin` | P1 | 자체 | `beta` + `disabled` |
| `OnboardingSteps` / `OnboardingChat` | P1 | 자체 | 5단계 + aria-live |
| `ResumeStep` / `ProfileReview` | P1 | 자체 | |
| `AiConsultChat` | P1 | 자체 | `beta` + aria-live |
| `JobsCategoryView` | P1 | 자체 | 시간대별 헤더 + 필터바 + 리스트 |
| `HeroSection` / `TimeCategories` / `ConceptSection` | P2 | 자체 | 홈 전용 |
| `MapView` | P2 | 자체(미정) | 거리순 정렬 도입 시 — 라이브러리 안건 별도 |
