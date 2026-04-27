# Conventions

LLM은 컴포넌트 작업 전 **반드시** 이 문서를 읽고 따릅니다.
여기서 벗어난 결정이 필요하면 임의로 진행하지 말고 사용자에게 추천안과 함께 질문합니다.

---

## 1. Props 네이밍

### Size

- **허용 값**: `'sm' | 'md' | 'lg'`
- 필요 시 `'xl'` 추가 가능, 단 사용자 확인 필수
- **금지**: `small`, `medium`, `large`, `s`, `m`, `l`
- **기본값**: `'md'`
- **prop 이름**: `size`

> 참고: shadcn 기본은 `default | sm | lg | icon`이지만, 본 디자인 시스템은 일관성을 위해 `sm/md/lg`로 통일합니다. shadcn 코드 가져올 때 변환 필요.

### Variant

- **기본 허용 값**: `'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'`
- shadcn 표준을 따름. 새 variant 추가 시 단일 소문자 단어로.
- **prop 이름**: `variant`
- **기본값**: `'default'`

### Boolean props

HTML 속성과 일치하는 경우 prefix 없이:

- `disabled`, `required`, `readOnly`, `loading`, `checked`, `open`

`is~`/`has~` prefix는 의미가 명확해야 할 때만:

- 허용 예: `isOpen`(controlled), `hasError`(상태 명시 필요 시)
- 단, **같은 컴포넌트 안에서 일관성**이 더 중요. `disabled`/`isLoading` 섞지 말 것.

### Event handlers

- React 관례: `onClick`, `onChange`, `onSubmit`
- 상태 변경 콜백: `onValueChange`, `onOpenChange` (Radix/shadcn 패턴)
- camelCase + `on` prefix

### className

- 모든 컴포넌트는 `className?: string`을 받습니다.
- 외부에서 Tailwind 확장이 가능해야 합니다.
- 내부 className과는 `cn()` 유틸로 병합.

### children, asChild

- composition: `children: React.ReactNode`
- shadcn 패턴의 `asChild?: boolean` 지원 (Radix Slot 활용)

---

## 2. States

다음 이름으로 통일합니다.

| State | 의미 | Tailwind prefix |
|-------|------|-----------------|
| `default` | 평상시 | (없음) |
| `hover` | 마우스 오버 | `hover:` |
| `focus-visible` | 키보드 포커스 | `focus-visible:` |
| `active` | 눌리는 중 | `active:` |
| `disabled` | 비활성 | `disabled:` |
| `loading` | 비동기 진행 중 | (직접 처리) |
| `error` | 입력 오류 | `aria-invalid:` 또는 직접 처리 |

각 컴포넌트가 **모든 상태를 가질 필요는 없습니다**. PRD 5번 섹션에 해당 컴포넌트의 상태만 정의합니다.

---

## 3. TailwindCSS 사용 규칙

1. **Tailwind 우선** — 가능한 모든 스타일은 Tailwind 유틸리티로 작성합니다.
2. **임의 값 최소화** — `bg-[#3B82F6]` 같은 arbitrary value는 디자인 토큰으로 표현 불가능할 때만.
3. **shadcn 시맨틱 토큰 우선** — `bg-primary`, `text-foreground`, `border-border` 사용. 직접 색상값 지양.
4. **`cn()` 필수** — className 병합은 shadcn `lib/utils`의 `cn()` 사용.
5. **`cva()` 필수** — variant/size 조합은 `class-variance-authority`로 처리.

### 표준 구현 패턴

```tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // base classes
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}
```

---

## 4. TypeScript 규칙

1. Props 타입은 `interface ComponentNameProps`로 export.
2. variant/size prop은 `VariantProps<typeof xxxVariants>` 활용.
3. HTML 요소를 확장하면 적절한 attributes 인터페이스 ext:
   - 버튼: `React.ButtonHTMLAttributes<HTMLButtonElement>`
   - 입력: `React.InputHTMLAttributes<HTMLInputElement>`
   - div 기반: `React.HTMLAttributes<HTMLDivElement>`
4. `forwardRef` 사용 (DOM ref 노출 필요 시).

---

## 5. 파일 / 폴더 네이밍

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 폴더 | PascalCase | `Button/` |
| 컴포넌트 파일 | PascalCase.tsx | `Button.tsx` |
| PRD 파일 | `[ComponentName].prd.md` | `Button.prd.md` |
| 스토리 | `[ComponentName].stories.tsx` | `Button.stories.tsx` |
| 유틸/훅 | camelCase | `useToggle.ts`, `cn.ts` |
| index | `index.ts` (re-export 용도) | `index.ts` |

---

## 6. 접근성 기본 요구사항

- 클릭/조작 가능한 모든 요소는 키보드로 접근 가능해야 함
- 폼 컨트롤은 label 연결 필수 (`htmlFor` / `aria-labelledby`)
- 인터랙션 요소에는 적절한 ARIA role/state
- `focus-visible` 스타일 명시적 정의 (`focus-visible:ring-2 focus-visible:ring-ring`)
- `disabled` 시 `aria-disabled` 처리 (HTML disabled로 안 되는 경우)
- `loading` 시 `aria-busy="true"`

각 컴포넌트의 구체적 접근성 요구는 PRD 6번 섹션에 유저스토리 기반으로 정의합니다.

---

## 7. 새 규칙 추가 절차

이 문서에 없는 패턴이 필요할 때:

1. LLM은 임의로 결정하지 않습니다.
2. 사용자에게 추천안 + 다른 옵션 + 근거를 제시하고 묻습니다.
3. 결정된 사항을 이 문서의 해당 섹션에 추가합니다.
4. 추가 후 다른 컴포넌트의 일관성 영향이 있는지 확인합니다.
