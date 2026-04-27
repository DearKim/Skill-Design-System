# TypeScript 규칙

## 기본 규칙

1. Props 타입은 `interface ComponentNameProps` 로 export.
2. variant/size prop 은 `VariantProps<typeof xxxVariants>` 활용.
3. HTML 요소를 확장하면 적절한 attributes 인터페이스를 ext:
   - 버튼: `React.ButtonHTMLAttributes<HTMLButtonElement>`
   - 입력: `React.InputHTMLAttributes<HTMLInputElement>`
   - div 기반: `React.HTMLAttributes<HTMLDivElement>`
4. `forwardRef` 사용 (DOM ref 노출 필요 시).

## 표준 패턴

```tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(/* ... */);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}
```

variant 클래스 매핑은 [`../style/style02-variants.md`](../style/style02-variants.md), size 매핑은 [`../style/style03-sizes.md`](../style/style03-sizes.md) 참고.
