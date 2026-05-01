import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const spinnerVariants = cva(
  'inline-block animate-spin rounded-full border-current border-r-transparent',
  {
    variants: {
      size: {
        sm: 'h-3 w-3 border-2',
        md: 'h-4 w-4 border-2',
        lg: 'h-6 w-6 border-[3px]',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  /** 시각만 있을 때 사용; 인터랙션 옆에서 쓰면 부모가 aria-busy 처리. */
  label?: string;
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, label, ...props }, ref) => (
    <span
      ref={ref}
      role={label ? 'status' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  ),
);
Spinner.displayName = 'Spinner';

export { spinnerVariants };
