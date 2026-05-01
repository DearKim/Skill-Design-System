# Typography — 타입 스케일

본 디자인 시스템의 타이포그래피 토큰입니다. 폰트 패밀리는 시스템 공유 단일 정의(`--font-sans` = Pretendard Variable + 한국어 폴백, [`../architecture/architecture06-tokens-policy.md`](../architecture/architecture06-tokens-policy.md))이며, 본 문서는 **크기·굵기·자간** 의 위계만 정합니다.

## 스케일

| 스타일 | Tailwind | font-size / line-height | font-weight | letter-spacing | 용도 |
|--------|----------|--------------------------|-------------|----------------|------|
| `display` | `text-5xl md:text-6xl` | 48px / 1 | `font-bold` (700) | `tracking-tight` | Hero / Landing 최상단 |
| `h1` | `text-4xl` | 36px / 1.1 | `font-bold` (700) | `tracking-tight` | 페이지 타이틀 |
| `h2` | `text-3xl` | 30px / 1.2 | `font-semibold` (600) | `tracking-tight` | 섹션 헤더 |
| `h3` | `text-2xl` | 24px / 1.3 | `font-semibold` (600) | - | 서브섹션 |
| `h4` | `text-xl` | 20px / 1.4 | `font-semibold` (600) | - | 카드 타이틀 |
| `h5` | `text-lg` | 18px / 1.5 | `font-medium` (500) | - | 그룹 라벨 |
| `h6` | `text-base` | 16px / 1.5 | `font-medium` (500) | - | 미세 라벨 |
| `lead` | `text-xl` | 20px / 1.6 | `font-normal` (400) | - | 페이지 인트로 (`text-muted-foreground` 권장) |
| `body` (기본) | `text-base` | 16px / 1.6 | `font-normal` | - | 본문 |
| `body-sm` | `text-sm` | 14px / 1.5 | `font-normal` | - | 카드 본문, 표 |
| `caption` | `text-xs` | 12px / 1.4 | `font-normal` | - | 보조 라벨, 면책 |
| `muted` | `text-sm text-muted-foreground` | 14px | `font-normal` | - | 부차 정보 |
| `code` | `text-sm font-mono` | 14px | - | - | 인라인 코드 (`bg-muted px-1.5 py-0.5 rounded`) |

> 기본 본문 크기는 `text-base`(16px) — Tailwind 기본을 따른다. 모바일 우선 컨텍스트에서도 본문은 14px 미만으로 내리지 않는다 (가독성).

## 컴포넌트 매핑

[`/src/components/Typography/`](../../src/components/Typography/) 가 위 스케일을 노출합니다.

| 컴포넌트 | 렌더 태그 | 위 스케일 |
|----------|-----------|-----------|
| `<Display>` | `h1` | display |
| `<Heading level={1..6}>` | `h1`~`h6` | h1~h6 |
| `<Text>` | `p` | body / body-sm (size prop) |
| `<Lead>` | `p` | lead |
| `<Muted>` | `p` | muted |
| `<InlineCode>` | `code` | code |
| `<List>` (ordered/unordered) | `ol`/`ul` | body |
| `<Blockquote>` | `blockquote` | body + 좌측 stripe |

## 한국어 본문 처리

- 한국어와 영문이 섞일 때 `font-feature-settings: 'rlig' 1, 'calt' 1` ([`/src/styles/globals.css`](../../src/styles/globals.css)) 가 자동 적용 — 합자 처리.
- 줄바꿈은 CSS `word-break: keep-all` 권장(필요 시 컴포넌트가 자체 적용).
- `letter-spacing` 은 한국어에서 0 또는 음수가 자연스러움. `tracking-tight` 는 `-0.025em` 으로 한글에서도 무난.

## 새 스케일 추가

새 스타일이 필요하면 위 표에 행 추가 + Typography 컴포넌트에 export 추가. 새 카테고리(예: marketing-display 시리즈)가 필요하면 [`./style06-...md`](.) 처럼 별도 파일로 분리.
