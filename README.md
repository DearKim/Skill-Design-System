# Design System Docs

자연어 입력 → LLM 문답 → PRD → shadcn 구현 → 디자인 시스템 업로드의 5단계 워크플로우 가이드입니다.

## 기술 스택

- React
- TypeScript
- TailwindCSS
- shadcn/ui (헤드리스 + 스타일 베이스)

## 폴더 구조

각 컴포넌트는 단일 폴더로 관리합니다.

```
src/components/Button/
├── Button.tsx              # 구현
├── Button.prd.md           # PRD (이 워크플로우의 산출물)
├── index.ts                # export
└── Button.stories.tsx      # (선택) Storybook
```

## 워크플로우 5단계

### 1. 자연어 입력

사용자가 만들고 싶은 컴포넌트를 자유롭게 설명합니다.

> 예: "버튼이 필요해. 폼 제출이나 모달 액션에 쓸 거야."

### 2. LLM 문답으로 구체화

LLM은 PRD 작성에 필요한 정보를 사용자에게 묻습니다. 다음 규칙을 따릅니다.

- **임의 해석 금지** — `CONVENTIONS.md`에 명시되지 않은 결정을 LLM이 단독으로 내리지 않습니다.
- **추천 답안 필수** — 모든 질문에는 추천안과 그 근거를 함께 제시합니다.
- **묶어서 질문** — 여러 질문을 한 번에 정리해서 묻고, 단계마다 한 개씩 묻지 않습니다.

질문 형식 예시:

```
Q. 사이즈는 몇 가지가 필요하신가요?
- 추천: sm/md/lg 3종 (대부분 케이스 커버, CONVENTIONS의 기본 사이즈 토큰과 일치)
- 다른 옵션:
  · md/lg 2종 (더 단순)
  · sm/md/lg/xl 4종 (대형 CTA 별도 처리 시)
```

### 3. PRD 작성

문답 결과를 `PRD_TEMPLATE.md` 구조에 따라 정리하고, 컴포넌트 폴더에 `[ComponentName].prd.md`로 저장합니다.

PRD의 모든 props/variants/접근성 요구사항은 **유저스토리에서 도출**되어야 합니다. 유저스토리에 근거가 없는 prop은 추가하지 않습니다 (필요하면 유저스토리를 먼저 추가).

### 4. shadcn/ui 구현

PRD를 기반으로 shadcn 패턴으로 구현합니다.

- `cn()` 유틸로 className 병합
- `cva()`로 variant 처리
- TailwindCSS 우선, custom CSS는 마지막 수단
- shadcn에 동일/유사 컴포넌트가 있으면 그 코드를 베이스로 시작

### 5. 디자인 시스템 업로드

완성된 컴포넌트 폴더(구현 + PRD + 스토리)를 디자인 시스템 저장소에 커밋합니다.

## 참조 문서

- **CONVENTIONS.md** — 컴포넌트 간 일관성 규칙. LLM은 매 작업마다 이 문서를 **먼저** 읽습니다.
- **PRD_TEMPLATE.md** — PRD 작성 템플릿.

## 핵심 원칙

1. **임의 해석 금지** — 정보가 부족하면 추측하지 말고 묻습니다.
2. **TailwindCSS 우선** — custom CSS는 Tailwind로 표현 불가능할 때만 사용합니다.
3. **추천 답안 필수** — 모든 질문은 추천안과 근거를 동반합니다.
4. **CONVENTIONS 우선** — 네이밍/구조는 CONVENTIONS.md를 따르며, 새 패턴이 필요하면 사용자 확인 후 문서에 추가합니다.

## 사용 시 LLM에게 줄 지시 예시

```
이 폴더의 README.md, CONVENTIONS.md, PRD_TEMPLATE.md를 먼저 읽고
워크플로우 2단계(문답)부터 시작해줘. 만들 컴포넌트는 [ComponentName].
```
