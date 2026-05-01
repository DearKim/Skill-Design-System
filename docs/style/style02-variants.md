# Variants — 색상 매핑 (Color Chips)

각 variant 의 시각적 정의입니다. 모든 색은 shadcn 시맨틱 토큰을 사용합니다.
raw hex 색상은 이 디자인 시스템에서 **금지**입니다 (arbitrary value 최소화 원칙).

## variant 매핑 표

| Variant | Background | Text | Border | Hover | 용도 |
|---------|-----------|------|--------|-------|------|
| `default` | `bg-primary` | `text-primary-foreground` | - | `hover:bg-primary/90` | 기본 액션 (가장 강조) |
| `secondary` | `bg-secondary` | `text-secondary-foreground` | - | `hover:bg-secondary/80` | 보조 액션 |
| `destructive` | `bg-destructive` | `text-destructive-foreground` | - | `hover:bg-destructive/90` | 위험 / 삭제 / "danger" 의미 |
| `outline` | `bg-background` | (상속) | `border-input` | `hover:bg-accent hover:text-accent-foreground` | 약한 강조, 폼 옆 액션 |
| `ghost` | (없음) | (상속) | - | `hover:bg-accent hover:text-accent-foreground` | 매우 약한 강조, 툴바 |
| `link` | (없음) | `text-primary` | - | `hover:underline` | 텍스트 링크 |
| `inverse` | `bg-primary-foreground` | `text-primary` | - | `hover:bg-primary-foreground/90` | brand 풀블리드(`bg-primary`) 위 CTA — 사용처 한정 |
| `warning` | `bg-warning` | `text-warning-foreground` | (선택) `border-warning/40` | (배너에 hover 없음 권장) | 주의·면책·Beta 안내 |
| `success` | `bg-success` | `text-success-foreground` | - | `hover:bg-success/90` | 긍정 알림 / 완료 |
| `info` | `bg-info` | `text-info-foreground` | - | `hover:bg-info/90` | 정보 안내 / 진행 중 |

> 알림 4종(`destructive` = "danger" / `warning` / `success` / `info`)은 의미 분리를 위해 모두 별도 토큰 + variant 로 정의합니다. shadcn 호환을 위해 위험·삭제 토큰의 이름은 `destructive` 를 유지하되 의미 분류는 "danger" 로 문서화합니다.

## 시맨틱 토큰 빠른 참조

| 토큰 | 의미 | 시스템 공유 / 테마별 |
|------|------|-----------------------|
| `primary` / `primary-foreground` | 주요 액션 색 / 그 위 텍스트 | **테마별** (각 프로젝트 메인 컬러) |
| `secondary` / `secondary-foreground` | 보조 액션 색 / 그 위 텍스트 | 테마별 |
| `accent` / `accent-foreground` | 강조 영역 (hover bg 등) | 테마별 |
| `muted` / `muted-foreground` | 흐린 영역 / 흐린 텍스트 | 테마별 |
| `background` / `foreground` | 페이지 배경 / 본문 텍스트 | 테마별 |
| `border`, `input` | 테두리, 입력 필드 테두리 | 테마별 (대개 시스템 기본 사용) |
| `ring` | 포커스 ring 색 | 테마별 (관례상 `= primary`) |
| `destructive` / `destructive-foreground` | 위험·삭제 ("danger") 색 / 그 위 텍스트 | **시스템 공유** |
| `warning` / `warning-foreground` | 주의·안내 색 | **시스템 공유** |
| `success` / `success-foreground` | 긍정 알림 색 | **시스템 공유** |
| `info` / `info-foreground` | 정보 안내 색 | **시스템 공유** |

토큰의 실제 색상값은 시스템 [`../../tailwind.config.js`](../../tailwind.config.js) / [`../../src/styles/globals.css`](../../src/styles/globals.css) 와 각 테마의 `:root` 블록(테마별 토큰만)에서 정의됩니다. 분리 정책은 [`../architecture/architecture06-tokens-policy.md`](../architecture/architecture06-tokens-policy.md) 참고.

## 새 variant 추가

1. 사용자에게 추천안과 함께 묻습니다 ([`../skill/skill02-llm-rules.md`](../skill/skill02-llm-rules.md)).
2. 결정되면 위 표에 행 추가 + [`./style01-tailwind-rules.md`](./style01-tailwind-rules.md) 의 cva 블록에도 반영.
3. 토큰이 새로 필요하면 [`./style02-variants.md`](./style02-variants.md) 의 시맨틱 토큰 표 + `tailwind.config.js` colors + 시스템 `globals.css` `:root` 블록 동시 갱신.
4. 이미 만들어진 컴포넌트들에 영향이 있는지 확인 (각 컴포넌트가 모든 variant 를 가질 필요는 없음).
