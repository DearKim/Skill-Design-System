# Skill-Design-System Docs Index

이 폴더는 Skill-Design-System 의 룰북을 카테고리별로 분해한 것입니다.
LLM 과 사용자 모두 **수정할 영역만 골라서** 읽고 작업할 수 있도록 설계되었습니다.
본 프로젝트는 [DOCS_CONVENTION.md](../DOCS_CONVENTION.md) 의 **대안 형식 `<폴더><NN>-<주제>.md`** (§2-2)를 사용합니다 — 폴더 단위 식별이 자주 필요한 디자인 시스템 특성상 이 형식이 더 적합합니다.

---

## 폴더 가이드

| 폴더 | 다루는 내용 | 언제 여기로 가는가 |
|------|-------------|----------------------|
| [skill/](./skill/) | LLM 의 워크플로우와 행동 지침 | "어떤 순서로 일할지", "LLM 이 무엇을 묻고 무엇을 묻지 말아야 할지" 를 바꿀 때 |
| [architecture/](./architecture/) | 기술 스택, 폴더/파일/Props 네이밍, TypeScript 규칙, 토큰 분리 정책 | "프로젝트 뼈대" 를 바꿀 때 (스택 추가, 네이밍 컨벤션 변경 등) |
| [style/](./style/) | TailwindCSS 사용 규칙, variants, sizes, states, 색상 토큰 | "보이는 것" 을 바꿀 때 (색·크기·상태·variant 추가) |
| [user-story/](./user-story/) | 유저스토리 작성 가이드와 추적성 규칙 | PRD 2번 섹션 작성 방식이나 US ↔ Props 추적 정책을 바꿀 때 |
| [prd/](./prd/) | **컴포넌트** PRD 템플릿과 체크리스트, 컴포넌트 PRD 카탈로그 | 컴포넌트 PRD 의 구조나 검증 항목을 바꿀 때 |
| [theme/](./theme/) | **프로젝트 테마(Theme)** PRD 템플릿과 카탈로그 | 새 프로젝트가 본 디자인 시스템을 소비하기 시작할 때 |

---

## 어디서부터 읽으면 되나요 — 직군별 진입 경로

직군별 표준 가이드는 [DOCS_CONVENTION.md §6](../DOCS_CONVENTION.md), 아래는 디자인 시스템 특성을 반영한 경로입니다.

### LLM / 새 컴포넌트를 만드는 사람 (이 시스템의 1차 소비자)
1. [skill/skill01-workflow.md](./skill/skill01-workflow.md) — 5단계 워크플로우
2. [skill/skill02-llm-rules.md](./skill/skill02-llm-rules.md) — 행동 원칙
3. [prd/prd01-template.md](./prd/prd01-template.md), [prd/prd02-checklist.md](./prd/prd02-checklist.md) — PRD 작성 양식
4. [architecture/architecture03-naming.md](./architecture/architecture03-naming.md) — 네이밍 규칙

### Frontend (디자인 시스템 소비 프로젝트의 FE)
1. [architecture/architecture01-tech-stack.md](./architecture/architecture01-tech-stack.md)
2. [architecture/architecture02-folder-structure.md](./architecture/architecture02-folder-structure.md), [architecture/architecture05-project-layout.md](./architecture/architecture05-project-layout.md)
3. [architecture/architecture06-tokens-policy.md](./architecture/architecture06-tokens-policy.md) — 토큰 분리 정책
4. [style/](./style/) — Tailwind 사용 규칙
5. [theme/theme02-blah.md](./theme/theme02-blah.md) / [theme/theme03-apago.md](./theme/theme03-apago.md) / [theme/theme04-teum.md](./theme/theme04-teum.md) — 본인 프로젝트 테마

### Designer
1. [theme/theme01-template.md](./theme/theme01-template.md) — 새 프로젝트 테마 작성 양식
2. [style/](./style/) 전체 — variants / sizes / states / typography
3. [architecture/architecture06-tokens-policy.md](./architecture/architecture06-tokens-policy.md) — 토큰 정책
4. [prd/](./prd/) 의 컴포넌트별 PRD — 시각 명세

### PM / PO (디자인 시스템 자체의 진화를 관리)
1. [skill/](./skill/) — 워크플로우와 LLM 행동 원칙
2. [user-story/](./user-story/) — 추적성 규칙
3. [prd/](./prd/) — 컴포넌트 카탈로그 진척도

---

## 사용 흐름

1. **새 컴포넌트를 만들 때** → [skill/skill01-workflow.md](./skill/skill01-workflow.md) 부터 읽고 시작.
2. **규칙을 수정할 때** → 위 표에서 해당 폴더로 이동 → 그 폴더의 `index.md` 가 어떤 파일을 고치라고 알려줌.
3. **새 규칙이 필요한데 어디 있는지 모를 때** → [skill/skill02-llm-rules.md](./skill/skill02-llm-rules.md) 의 "새 규칙 추가 절차" 를 따름.

---

## 작성 규칙

본 프로젝트의 모든 문서는 [DOCS_CONVENTION.md](../DOCS_CONVENTION.md) 를 따릅니다. 본 프로젝트는 §2-2 의 대안 형식을 사용한다는 점만 다릅니다.

- 각 폴더 안의 문서 파일은 **`[폴더이름][NN]-[설명].md`** 형식 (예: `skill01-workflow.md`, `architecture03-naming.md`, `prd02-checklist.md`).
- `NN` 은 두 자리 숫자(`01`, `02`, ...). 폴더 안에서 부여 순서대로. 재사용 금지.
- `[설명]` 은 케밥-케이스 한두 단어로, 파일 내용을 한눈에 식별할 수 있도록.
- `architecture/` 의 의사결정 문서는 **ADR 3절 구조**(Status / Context / Decision / Consequences) 를 권고 ([컨벤션 §3-3](../DOCS_CONVENTION.md)).
- 모든 문서는 **한국어** (외래 고유명사·코드·Props 명 제외).

### 추가 vs. 수정

- **기존 내용 수정** → 해당 번호의 md 파일을 그대로 **편집**. 번호와 파일명은 유지.
- **새로운 내용 추가** → 다음 번호로 **새 md 파일** 을 만들고, 그 폴더의 `index.md` 표에 한 줄 추가.
- 한 파일이 너무 커져 분할이 필요할 때만, 마지막 번호 다음으로 새로 만들고 원래 파일에는 "이 내용은 NN번으로 이동" 표시를 남깁니다.

### 폴더 자체를 새로 만들 때

새 카테고리(예: `testing/`)가 필요해지면:
1. 폴더를 만들고 그 안에 `index.md` 와 `[새폴더]01-[설명].md` 를 생성합니다.
2. 이 최상위 `docs/index.md` 의 "폴더 가이드" 표에 행을 추가합니다.
3. 영향 받는 직군이 있다면 위 "어디서부터 읽으면 되나요" 도 갱신합니다.

---

## 원본 문서

이 docs/ 는 다음 3개 원본을 분해한 결과입니다. 원본은 보존되어 있으며 정합성이 어긋나면 docs/ 를 정답(SSOT)으로 합니다.

- [../README.md](../README.md)
- [../CONVENTIONS.md](../CONVENTIONS.md)
- [../PRD_TEMPLATE.md](../PRD_TEMPLATE.md)
