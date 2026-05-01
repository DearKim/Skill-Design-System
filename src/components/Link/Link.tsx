import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const linkVariants = cva(
  'inline-flex items-center gap-1 rounded-sm underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'text-primary hover:underline',
        muted: 'text-muted-foreground hover:text-foreground hover:underline',
        underline: 'text-foreground underline hover:text-primary',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  /** target="_blank" 자동 + rel="noopener noreferrer" 부여 */
  external?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, asChild, external, target, rel, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';
    const finalTarget = external ? '_blank' : target;
    const finalRel = external ? `noopener noreferrer ${rel ?? ''}`.trim() : rel;
    return (
      <Comp
        ref={ref}
        className={cn(linkVariants({ variant }), className)}
        target={finalTarget}
        rel={finalRel}
        {...props}
      />
    );
  },
);
Link.displayName = 'Link';

export { linkVariants };
