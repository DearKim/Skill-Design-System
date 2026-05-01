# A.PAGO Theme PRD

> [`theme01-template.md`](./theme01-template.md) 의 9 섹션 + §10 인벤토리 구조를 따릅니다.
> A.PAGO(아파고) 의료 AI 정보 플랫폼이 본 디자인 시스템을 어떻게 소비할지 정의합니다.

---

## 1. 개요

- **이름**: `theme-apago`
- **목적**: 의료 AI 정보 비교 플랫폼이 "광고가 아닌 정보, 추천이 아닌 사실" 톤을 유지하면서, 시스템의 4개 알림 토큰(`destructive/warning/success/info`)과 컴플라이언스 컴포넌트(`LegalNotice`, `ConsentGate`)를 활용하도록 정의한다.
- **유사/관련 테마**: [`theme02-blah`](./theme02-blah.md), [`theme04-teum`](./theme04-teum.md).

## 2. 유저스토리

- **US-1**: As a 의료 정보 탐색자, I want 식약처 허가 의료 AI 제품을 추천이 아닌 카테고리 비교로 살펴보고 싶다, so that 광고에 휘둘리지 않고 객관적 정보를 얻는다.
- **US-2**: As a 환자/보호자, I want 모든 페이지에서 "이 정보는 진단/추천이 아니다" 라는 면책을 일관된 위치/톤으로 보고 싶다, so that 의료법 위반의 오해 없이 정보를 소비할 수 있다.
- **US-3**: As a 위치 기반 검색 사용자, I want 카카오맵 위에서 병의원/동물병원 모드를 토글해 정보를 분리해 보고 싶다, so that 의료법(사람)과 수의사법(동물) 영역이 섞이지 않는다.
- **US-4**: As a 뉴스 소비자, I want 외부 언론 기사를 카드/리스트로 무한스크롤하며, 외부 링크임을 명확히 알고 싶다, so that 저작권/출처 오인 없이 원문에 진입한다.
- **US-5**: As a 관리자, I want 어드민 메뉴(`/settings`)는 `user.role === "admin"` 일 때만 사이드바에 노출되길 원한다, so that 일반 사용자에게 관리 기능이 노출되지 않는다.
- **US-6**: As a AI 상담 진입자, I want 첫 진입 시 1회 민감정보 동의 게이트를 보고 싶다, so that 증상 정보의 처리 방식을 인지한 뒤 사용한다.
- **US-7**: As a 컴플라이언스 검수자, I want UI 어디에도 "추천 / 최고 / 정확 / AI 도입 병의원 / 도입 병원 지도 / 식약처·FDA 인증" 류 표현이 없도록 anti-pattern 차원에서 막히길 원한다, so that 카피 한 줄 실수가 의료법 위반 근거가 되지 않는다.

## 3. 토큰 매핑

| Token | Value (HSL) | 출처 | 원 색상 |
|-------|-------------|------|---------|
| `--background` | `0 0% 100%` | US-1 | white |
| `--foreground` | `222 47% 11%` | US-1 | Ink |
| `--primary` | `208 78% 45%` | US-1 | A.PAGO Blue `#1878CE` |
| `--primary-foreground` | `0 0% 100%` | US-1 | white |
| `--secondary` | `208 73% 95%` | US-1 | apago-blue-light `#e8f2fb` |
| `--secondary-foreground` | `207 78% 39%` | US-1 | apago-blue-hover `#1466b3` |
| `--accent` | `208 73% 95%` (= secondary) | US-1 | hover 통일 |
| `--accent-foreground` | `207 78% 39%` | US-1 | |
| `--muted` | `210 40% 96%` | US-2 | slate-100 (면책 카드 배경) |
| `--muted-foreground` | `215 16% 47%` | US-2 | slate-500 |
| `--border` | `214 32% 91%` | (공통) | |
| `--input` | `214 32% 91%` | (공통) | |
| `--ring` | `208 78% 45%` (= `--primary`) | (공통) | A.PAGO Blue ring |

시스템 공유 토큰(`--destructive`, `--warning`, `--success`, `--info`, `--radius`, `--font-sans`)은 [`../architecture/architecture06-tokens-policy.md`](../architecture/architecture06-tokens-policy.md) 의 시스템 표준 사용. `--warning` 은 본 테마의 `LegalNotice tone="warning"` 핵심 톤.

## 4. Variants 사용 정책

| Variant | 본 테마에서의 용도 |
|---------|---------------------|
| `default` | "AI 솔루션 둘러보기" 등 주요 CTA |
| `secondary` | 카테고리 카드, 보조 CTA |
| `outline` | "AI 상담 시작" 같은 약한 강조 |
| `ghost` | 사이드바 네비 |
| `link` | 인라인 링크, "원문 보기" |
| `destructive` | 어드민 삭제 액션 (US-5) |
| `warning` | `LegalNotice` 면책 배너, `Badge`("정보" 라벨) (US-2, US-7) |
| `info` | 정보 안내 배지 (선택) |
| `success` | 본 테마 사용처 없음 |
| `inverse` | Hero 풀블리드 사용 시 (선택) |

## 5. Sizes 사용 정책

| Size | 본 테마에서의 용도 |
|------|---------------------|
| `sm` | 필터 칩, 검색바 토글, 사이드바 컴팩트 |
| `md` | 카드 내 액션, 폼 인풋 (기본) |
| `lg` | 홈 Hero CTA, 그룹 선택 카드 |

## 6. States 사용 정책

| State | 사용처 | 출처 |
|-------|--------|------|
| `default` / `hover` / `focus-visible` | 모든 인터랙션 | (공통) |
| `disabled` | 어드민 폼 | US-5 |
| `loading` | 뉴스 무한스크롤, 제품 페치 | US-4, US-1 |
| `error` | 페치 실패 / 폼 검증 실패 | US-4 |
| `selected` | 사람/동물 모드 토글, 사이드바 활성 | US-3 |
| `consent-pending` | AI 상담 진입 게이트 | US-6 |
| `motion-reduced` / `beta` | 본 테마 사용처 없음 (시스템 표준에는 존재) | - |

## 7. 접근성

- **키보드**: 카카오맵 마커는 키보드 포커스가 어려우므로 마커 리스트 좌측 패널이 키보드 1차 진입 경로. — US-3
- **ARIA**: `LegalNotice` 는 `role="note"` 또는 `role="alert"`(warning tone). 외부 뉴스 링크에는 `rel="noopener noreferrer nofollow"` + 외부 링크 아이콘. — US-4
- **포커스**: 시스템 기본 A.PAGO Blue ring.
- **스크린리더**: 카카오맵 캔버스는 데코레이션, 결과 리스트가 의미론적 진입점. 뉴스 카드 og:image 는 `alt=""`(decorative). — US-4
- **색대비**: `--warning` (시스템 amber) 위 텍스트(`--warning-foreground`) 는 WCAG AA 4.5:1 충족. 시스템 정의에서 검증됨. — US-2

## 8. 사용 예시

```css
/* globals.css — A.PAGO 테마 고유 슬롯만 */
:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --primary: 208 78% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 208 73% 95%;
  --secondary-foreground: 207 78% 39%;
  --accent: 208 73% 95%;
  --accent-foreground: 207 78% 39%;
  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;
  --border: 214 32% 91%;
  --input: 214 32% 91%;
  --ring: 208 78% 45%;
}
```

```tsx
// 페이지별 LegalNotice 매트릭스 (docs/09-medical-ad-compliance.md §5.1 기준)
<LegalNotice variant="search" tone="warning">
  본 검색 결과는 허가된 의료기기에 대한 카테고리 기반 안내이며,
  개별 제품 추천이나 진단을 대신하지 않습니다.
</LegalNotice>

// AI 상담 진입 시 동의 게이트
const { granted, request } = useSensitiveConsent();
if (!granted) return <ConsentGate onAccept={request} />;

// 모드 토글 — selected state
<Tabs value={mode} onValueChange={setMode}>
  <TabsTrigger value="human" data-state-selected>병의원</TabsTrigger>
  <TabsTrigger value="pet">동물병원</TabsTrigger>
</Tabs>
```

## 9. Anti-patterns

- ❌ raw 카피 사용: "추천 / 최고 / 정확 / AI 도입 병의원 / 도입 병원 지도 / 식약처·FDA 인증". → "비교·살펴보·찾아보·확인하" 동사 중심으로 강제 (US-7). Lint 단계 카피 금칙어 검사 권장.
- ❌ `destructive` variant 를 면책 배너에 사용 — 위험 액션 의미를 침범. `warning` 사용 (US-2).
- ❌ `--warning` 등 시스템 공유 토큰을 테마에서 재정의 — 시스템 갱신 절차.
- ❌ 다크모드 `.dark` 블록 추가 — 시스템 정책 위반.
- ❌ 사이드바에 어드민 메뉴를 항상 노출 — `user.role === "admin"` 게이트 필수 (US-5).
- ❌ AI 상담 진입을 `consent-pending` 게이트 없이 라우팅 — `useSensitiveConsent` 우회 금지 (US-6).
- ❌ 외부 뉴스 본문/이미지 자체 저장 또는 캐싱 — 제목/썸네일/언론사/발행일/원문 링크만 (US-4).
- ❌ 사람·동물병원 모드 토글 없이 단일 검색 결과에 둘을 섞기 — 의료법/수의사법 영역 분리 (US-3).

## 10. 컴포넌트 인벤토리

| 컴포넌트 | 우선순위 | shadcn 베이스 | 비고 |
|----------|----------|---------------|------|
| `Button` | P0 | 예 | |
| `Input` / `Search` | P0 | 예 | TopBar / FloatingSearch 공통 |
| `Card` | P0 | 예 | ProductCard / NewsCard 공통 |
| `Badge` | P0 | 예 | 카테고리/회사/신체부위 |
| `Tabs` | P0 | 예 | 사람/동물 모드, 카드/리스트 뷰 (`selected` state) |
| `Select` | P0 | 예 | 뉴스 필터 |
| `Dialog` / `Sheet` | P0 | 예 | 동의 게이트, 모바일 사이드 패널 |
| `LegalNotice` | P0 | 자체 | `variant: search\|map\|news\|product\|price\|review` × `tone: warning\|muted` |
| `ConsentGate` | P0 | Dialog 변형 | `useSensitiveConsent` 결합 |
| `TopBar` | P0 | 자체 | 병의원 검색 + 모드 토글 |
| `LeftNav` | P0 | 자체 | 어드민 게이트 내장 |
| `MainContent` | P0 | 자체 | 그리드 정렬 |
| `KakaoMap` | P1 | 자체 | bounds debounce + 마커 hook |
| `HospitalMarker` / `InfoWindow` | P1 | 자체 | |
| `FloatingSearch` | P1 | 자체 | 지도 위 검색 오버레이 |
| `NewsCard` / `NewsRow` | P1 | Card 변형 | "검토 필요" 플래그 + 외부 링크 |
| `ProductCard` | P1 | Card 변형 | 로고 + 부위 배지 |
| `ContactFab` | P2 | 자체 | 부동 AI 상담 버튼 |
| `Skeleton` | P0 | 예 | 무한스크롤 로딩 |
