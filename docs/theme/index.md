# Theme — 인덱스

본 디자인 시스템을 소비하는 **프로젝트 단위 테마(Theme)** 정의를 모아둔 폴더입니다.
하나의 테마는 시스템이 노출한 시맨틱 토큰 슬롯(`--primary`, `--background`, ...)을 자기 브랜드 색·이미지로 채우고, 그 위에서 어떤 컴포넌트를 어떻게 쓸지를 명시합니다.

## 폴더 위상

| 폴더 | 다루는 단위 | 추적 방식 |
|------|-------------|-----------|
| [`../prd/`](../prd/) | **컴포넌트 단위** PRD (Button, Input, ...) | 코드 폴더(`src/components/<Name>/`)와 1:1 |
| **`./` (현재)** | **프로젝트 테마 단위** PRD | 글로벌 토큰·인벤토리, 코드 폴더와 짝이 없음 |

> Theme PRD 와 컴포넌트 PRD 는 추적 단위가 다르므로 서로 다른 폴더에서 별도 번호 시퀀스로 관리합니다.

## 파일 네이밍

폴더 컨벤션(`[폴더이름][NN]-[설명].md`, [`../index.md`](../index.md))에 맞춰 `themeNN-[프로젝트].md` 로 저장합니다.

- `theme01-template.md` — 테마 작성 템플릿(시스템 문서)
- `themeNN-[프로젝트].md` — 작성된 테마 PRD (`02` 부터 누적)

## 시스템 문서

| 수정하고 싶은 내용 | 어떤 파일을 보면 되는가 |
|---------------------|-------------------------|
| 테마 PRD 의 9 섹션 + §10 인벤토리 구조 | [theme01-template.md](./theme01-template.md) |
| 테마가 채워야 하는 토큰 슬롯의 시스템 정의 | [`../style/style02-variants.md`](../style/style02-variants.md) |
| 테마간 공유 정책 (다크/폰트/radius) | [`../architecture/architecture06-tokens-policy.md`](../architecture/architecture06-tokens-policy.md) |

## 작성된 Theme PRD 카탈로그

| 테마 | PRD 파일 | 작성일 | 비고 |
|------|----------|--------|------|
| BLAH 회사 홈 (Echo Wave teal) | [theme02-blah.md](./theme02-blah.md) | 2026-05-01 | 모션 컴포넌트 인벤토리 다수 |
| A.PAGO 의료 AI 정보 (A.PAGO Blue) | [theme03-apago.md](./theme03-apago.md) | 2026-05-01 | `LegalNotice` + `consent-pending` 도메인 게이트 |
| TEUM 긱워크 매칭 (Lime green) | [theme04-teum.md](./theme04-teum.md) | 2026-05-01 | 모바일 우선 셸 + `selected`/`beta` 다용 |

## 새 테마 추가 절차

1. [`theme01-template.md`](./theme01-template.md) 를 복사해 `themeNN-[프로젝트].md` 로 저장 (`NN`은 다음 번호).
2. 위 카탈로그 표에 한 줄 추가.
3. 테마가 시스템 표준에 없는 토큰/variant/state 를 요구하면 [`../skill/skill02-llm-rules.md`](../skill/skill02-llm-rules.md) 의 "새 규칙 추가 절차" 를 따른 뒤 시스템 문서를 갱신합니다 (테마가 시스템에 임의 추가 금지).
