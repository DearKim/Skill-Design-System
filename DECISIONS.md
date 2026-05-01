# Resolved Decisions — Theme PRD 채택 결과

[`docs/theme/theme02-blah.md`](docs/theme/theme02-blah.md) / [`theme03-apago.md`](docs/theme/theme03-apago.md) / [`theme04-teum.md`](docs/theme/theme04-teum.md) 채택을 위해 답변받은 13개 결정과 그 적용 결과를 기록합니다.

답변 일자: 2026-05-01

## 결과 요약

| Q | 결정 | 적용 |
|---|------|------|
| Q1 | `--warning` 시스템 공유 단일 정의 | [globals.css](src/styles/globals.css), [tailwind.config.js](tailwind.config.js), [style02-variants.md](docs/style/style02-variants.md), [architecture06-tokens-policy.md](docs/architecture/architecture06-tokens-policy.md) |
| Q2 | `success / warning / danger / info` 4종을 모든 프로젝트에 — `danger` 의미는 shadcn 호환을 위해 **토큰 이름 `--destructive` 유지**, 의미 분류만 "danger" 로 문서화 | 동상 + 4개 알림 토큰 정의 |
| Q3 | Button 통일성 유지, 예외는 `variant` prop 으로만 — `inverse` variant 추가, 모든 테마가 같은 props 인터페이스 | [style01-tailwind-rules.md](docs/style/style01-tailwind-rules.md) cva 블록, [style02-variants.md](docs/style/style02-variants.md) |
| Q4 | variant 정의 필수, primary 는 프로젝트별 다름, 나머지 통일 | 토큰 분리 정책으로 표현 ([architecture06-tokens-policy.md](docs/architecture/architecture06-tokens-policy.md)) |
| Q5 | `selected` state 표준 추가 | [style04-states.md](docs/style/style04-states.md) |
| Q6 | `motion-reduced` / `consent-pending` / `beta` 모두 시스템 표준에 등재 (도메인 한정 명시) | [style04-states.md](docs/style/style04-states.md) |
| Q7 | 다크모드 계획 없음 — `.dark` 블록 globals.css 에서 제거, `darkMode: ['class']` 자리는 유지 | [globals.css](src/styles/globals.css), [architecture06-tokens-policy.md](docs/architecture/architecture06-tokens-policy.md) |
| Q8 | `--radius` 시스템 단일 값(0.625rem). 테마는 재정의 금지 | [globals.css](src/styles/globals.css), [architecture06-tokens-policy.md](docs/architecture/architecture06-tokens-policy.md) |
| Q9 | 폰트 통일 — Pretendard Variable + 한국어 폴백. 테마는 재정의 금지 | [globals.css](src/styles/globals.css), [tailwind.config.js](tailwind.config.js), [architecture06-tokens-policy.md](docs/architecture/architecture06-tokens-policy.md) |
| Q10 | size props 인터페이스(`sm/md/lg`) 통일, 적용 정책은 테마별 자유. "터치 우선 1차 CTA `lg` 강제" 절 추가 | [style03-sizes.md](docs/style/style03-sizes.md), [architecture06-tokens-policy.md](docs/architecture/architecture06-tokens-policy.md) |
| Q11 | 단일 테마(`:root`) 유지, 카탈로그 미리보기는 차후 별도 PRD | (현 정책 유지, 변경 없음) |
| Q12 | Theme PRD 영구 분류 — 별도 폴더 [`docs/theme/`](docs/theme/) 신설 | [docs/theme/](docs/theme/), [docs/index.md](docs/index.md) 폴더 가이드 |
| Q13 | 컴포넌트 PRD 작성 순서 — `Button → Input → Card → Badge → LegalNotice → Dialog → Sheet` | (다음 작업 시 적용) |

## 자체 보정 사항 (사용자 답변에 명시되지 않아 합리적 가정으로 진행)

1. **Q2 `danger` 표기**: 답변에 "danger" 로 적혀 있었으나 shadcn 호환을 위해 토큰 이름은 `--destructive` 유지. 의미 분류는 [`docs/style/style02-variants.md`](docs/style/style02-variants.md) 와 [`docs/architecture/architecture06-tokens-policy.md`](docs/architecture/architecture06-tokens-policy.md) 에 "위험·삭제 (danger 의미)" 로 표기. 다르게 가시려면 토큰 이름을 `--danger` 로 일괄 변경 가능 — 한 줄 회신으로 되돌릴 수 있음.
2. **Q9 폰트 선택**: "통일" 만 적혀 있어 **Pretendard Variable** 을 시스템 표준으로 채택. 폴백 체인: `"Pretendard Variable", "Pretendard", "Apple SD Gothic Neo", system-ui, sans-serif`. blah 의 SUIT Variable 이나 Geist Sans 가 더 좋다면 [`globals.css`](src/styles/globals.css) 의 `--font-sans` 한 줄만 수정.

## 폴더·파일 구조 변경 요약

**신규**
- [`docs/theme/`](docs/theme/) 폴더 — Theme PRD 영구 분류
  - [`docs/theme/index.md`](docs/theme/index.md)
  - [`docs/theme/theme01-template.md`](docs/theme/theme01-template.md)
  - [`docs/theme/theme02-blah.md`](docs/theme/theme02-blah.md)
  - [`docs/theme/theme03-apago.md`](docs/theme/theme03-apago.md)
  - [`docs/theme/theme04-teum.md`](docs/theme/theme04-teum.md)
- [`docs/architecture/architecture06-tokens-policy.md`](docs/architecture/architecture06-tokens-policy.md) — 시스템 공유 vs 테마별 토큰 분리 정책

**갱신**
- [`docs/index.md`](docs/index.md) — 폴더 가이드 표에 `theme/` 추가
- [`docs/architecture/index.md`](docs/architecture/index.md) — `architecture06` 추가
- [`docs/style/style01-tailwind-rules.md`](docs/style/style01-tailwind-rules.md) — cva 블록에 `inverse / warning / success / info` variant 추가, 토큰 재정의 금지 규칙 추가
- [`docs/style/style02-variants.md`](docs/style/style02-variants.md) — variant 표 7→11종, 시맨틱 토큰 표에 시스템 공유 / 테마별 분리 표시
- [`docs/style/style03-sizes.md`](docs/style/style03-sizes.md) — "터치 우선 컨텍스트 정책" 절 추가
- [`docs/style/style04-states.md`](docs/style/style04-states.md) — `selected / motion-reduced / consent-pending / beta` 4개 상태 추가
- [`docs/prd/index.md`](docs/prd/index.md) — Theme PRD 섹션 제거, 다음 컴포넌트 PRD 번호 `prd03` 으로 재정렬
- [`tailwind.config.js`](tailwind.config.js) — `warning / success / info` colors + `fontFamily.sans` 추가
- [`src/styles/globals.css`](src/styles/globals.css) — 4개 알림 토큰 + `--radius`(0.625rem) + `--font-sans` 추가, `.dark` 블록 제거

**제거**
- ~~`docs/prd/prd03-theme-blah.md`~~ → [`docs/theme/theme02-blah.md`](docs/theme/theme02-blah.md)
- ~~`docs/prd/prd04-theme-apago.md`~~ → [`docs/theme/theme03-apago.md`](docs/theme/theme03-apago.md)
- ~~`docs/prd/prd05-theme-teum.md`~~ → [`docs/theme/theme04-teum.md`](docs/theme/theme04-teum.md)

## 다음 단계 (Q13 결정에 따라)

컴포넌트 PRD 를 다음 순서로 작성:

1. `Button` (시스템 첫 컴포넌트, 11 variant × 3 size 매트릭스 검증)
2. `Input`
3. `Card`
4. `Badge`
5. `LegalNotice` (자체 신규 — 시스템 첫 "shadcn 베이스 아닌" PRD 양식 검증)
6. `Dialog`
7. `Sheet`

이후: 모션 컴포넌트(`FadeUp` 등), 셸 컴포넌트(`RootShell`, `TopBar`, `LeftNav`).
