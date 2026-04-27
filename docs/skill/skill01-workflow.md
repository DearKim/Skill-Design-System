# Workflow — 자연어에서 디자인 시스템 업로드까지 5단계

이 디자인 시스템에서 새 컴포넌트는 항상 다음 5단계를 거칩니다.
LLM은 이 순서를 임의로 건너뛰지 않습니다.

## 1. 자연어 입력

사용자가 만들고 싶은 컴포넌트를 자유롭게 설명합니다.

> 예: "버튼이 필요해. 폼 제출이나 모달 액션에 쓸 거야."

## 2. LLM 문답으로 구체화

LLM은 PRD 작성에 필요한 정보를 사용자에게 묻습니다. 다음 규칙을 따릅니다.

- **임의 해석 금지** — `architecture/`, `style/` 등에 명시되지 않은 결정을 LLM이 단독으로 내리지 않습니다.
- **추천 답안 필수** — 모든 질문에는 추천안과 그 근거를 함께 제시합니다.
- **묶어서 질문** — 여러 질문을 한 번에 정리해서 묻고, 단계마다 한 개씩 묻지 않습니다.

자세한 규칙은 [skill02-llm-rules.md](./skill02-llm-rules.md) 참고.

질문 형식 예시:

```
Q. 사이즈는 몇 가지가 필요하신가요?
- 추천: sm/md/lg 3종 (대부분 케이스 커버, style/ 의 기본 사이즈 토큰과 일치)
- 다른 옵션:
  · md/lg 2종 (더 단순)
  · sm/md/lg/xl 4종 (대형 CTA 별도 처리 시)
```

## 3. PRD 작성

문답 결과를 [`prd/prd01-template.md`](../prd/prd01-template.md) 구조에 따라 정리합니다.

산출물 위치: `docs/prd/prdNN-[ComponentName].md` 로 다음 번호를 부여해 새 파일을 만듭니다.
(컴포넌트 폴더 내부에도 사본을 두는 정책은 [`architecture/architecture02-folder-structure.md`](../architecture/architecture02-folder-structure.md) 참고.)

PRD의 모든 props/variants/접근성 요구사항은 **유저스토리에서 도출**되어야 합니다.
유저스토리에 근거가 없는 prop은 추가하지 않습니다 (필요하면 유저스토리를 먼저 추가).

## 4. shadcn/ui 구현

PRD를 기반으로 shadcn 패턴으로 구현합니다.

- `cn()` 유틸로 className 병합
- `cva()`로 variant 처리
- TailwindCSS 우선, custom CSS는 마지막 수단
- shadcn에 동일/유사 컴포넌트가 있으면 그 코드를 베이스로 시작

자세한 코드 규약은 [`style/style01-tailwind-rules.md`](../style/style01-tailwind-rules.md) 참고.

## 5. 디자인 시스템 업로드

완성된 컴포넌트 폴더(구현 + PRD + 스토리)를 디자인 시스템 저장소에 커밋합니다.

## 사용 시 LLM에게 줄 지시 예시

```
docs/index.md 와 docs/skill/, docs/architecture/, docs/style/ 의 index를 먼저 읽고
워크플로우 2단계(문답)부터 시작해줘. 만들 컴포넌트는 [ComponentName].
```
