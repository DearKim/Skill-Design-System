# Naming — Props / 파일 / 폴더

LLM은 컴포넌트 작업 전 **반드시** 이 문서를 읽고 따릅니다.
여기서 벗어난 결정이 필요하면 임의로 진행하지 말고 사용자에게 추천안과 함께 질문합니다 (`skill/skill02-llm-rules.md`).

## 1. Props 네이밍

### Size

- **허용 값**: `'sm' | 'md' | 'lg'`
- 필요 시 `'xl'` 추가 가능, 단 사용자 확인 필수
- **금지**: `small`, `medium`, `large`, `s`, `m`, `l`
- **기본값**: `'md'`
- **prop 이름**: `size`

> 참고: shadcn 기본은 `default | sm | lg | icon` 이지만, 본 디자인 시스템은 일관성을 위해 `sm/md/lg` 로 통일합니다. shadcn 코드 가져올 때 변환 필요.

### Variant

- **기본 허용 값**: `'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'`
- shadcn 표준을 따름. 새 variant 추가 시 단일 소문자 단어로.
- **prop 이름**: `variant`
- **기본값**: `'default'`

### Boolean props

HTML 속성과 일치하는 경우 prefix 없이:

- `disabled`, `required`, `readOnly`, `loading`, `checked`, `open`

`is~` / `has~` prefix는 의미가 명확해야 할 때만:

- 허용 예: `isOpen` (controlled), `hasError` (상태 명시 필요 시)
- 단, **같은 컴포넌트 안에서 일관성**이 더 중요. `disabled` / `isLoading` 섞지 말 것.

### Event handlers

- React 관례: `onClick`, `onChange`, `onSubmit`
- 상태 변경 콜백: `onValueChange`, `onOpenChange` (Radix/shadcn 패턴)
- camelCase + `on` prefix

### className

- 모든 컴포넌트는 `className?: string` 을 받습니다.
- 외부에서 Tailwind 확장이 가능해야 합니다.
- 내부 className 과는 `cn()` 유틸로 병합.

### children, asChild

- composition: `children: React.ReactNode`
- shadcn 패턴의 `asChild?: boolean` 지원 (Radix Slot 활용)

## 2. 파일 / 폴더 네이밍

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 폴더 | PascalCase | `Button/` |
| 컴포넌트 파일 | PascalCase.tsx | `Button.tsx` |
| PRD 파일 (코드 동거 사본) | `[ComponentName].prd.md` | `Button.prd.md` |
| PRD 파일 (docs 카탈로그) | `prdNN-[component].md` | `prd03-button.md` |
| 스토리 | `[ComponentName].stories.tsx` | `Button.stories.tsx` |
| 유틸/훅 | camelCase | `useToggle.ts`, `cn.ts` |
| index | `index.ts` (re-export 용도) | `index.ts` |
| docs 룰북 | `[폴더이름]NN-[설명].md` | `architecture03-naming.md` |
