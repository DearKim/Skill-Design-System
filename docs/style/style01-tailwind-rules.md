# TailwindCSS 사용 규칙

1. **Tailwind 우선** — 가능한 모든 스타일은 Tailwind 유틸리티로 작성합니다.
2. **임의 값 최소화** — `bg-[#3B82F6]` 같은 arbitrary value 는 디자인 토큰으로 표현 불가능할 때만 사용합니다.
3. **shadcn 시맨틱 토큰 우선** — `bg-primary`, `text-foreground`, `border-border` 사용. 직접 색상값 지양.
4. **`cn()` 필수** — className 병합은 shadcn `lib/utils` 의 `cn()` 사용.
5. **`cva()` 필수** — variant/size 조합은 `class-variance-authority` 로 처리.
6. **시스템 공유 토큰 재정의 금지** — `--destructive`, `--warning`, `--success`, `--info`, `--radius`, `--font-sans` 는 시스템 globals.css 한 곳에서만 정의. 테마는 자기 슬롯(`--primary` 외)만 채웁니다 ([`../architecture/architecture06-tokens-policy.md`](../architecture/architecture06-tokens-policy.md)).

## 표준 구현 패턴

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
        inverse: 'bg-primary-foreground text-primary hover:bg-primary-foreground/90',
        warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
        success: 'bg-success text-success-foreground hover:bg-success/90',
        info: 'bg-info text-info-foreground hover:bg-info/90',
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

variant 별 색 매핑의 단독 표는 [style02-variants.md](./style02-variants.md), size 토큰 표는 [style03-sizes.md](./style03-sizes.md), state 정의는 [style04-states.md](./style04-states.md) 참고.
