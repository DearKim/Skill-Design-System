import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* ---------- Display ---------- */
export const Display = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'h1';
  return (
    <Comp
      ref={ref}
      className={cn(
        'text-5xl font-bold leading-none tracking-tight md:text-6xl',
        className,
      )}
      {...props}
    />
  );
});
Display.displayName = 'Display';

/* ---------- Heading ---------- */
const headingVariants = cva('text-foreground', {
  variants: {
    level: {
      1: 'text-4xl font-bold tracking-tight leading-[1.1]',
      2: 'text-3xl font-semibold tracking-tight leading-[1.2]',
      3: 'text-2xl font-semibold leading-[1.3]',
      4: 'text-xl font-semibold leading-[1.4]',
      5: 'text-lg font-medium leading-[1.5]',
      6: 'text-base font-medium leading-[1.5]',
    },
  },
  defaultVariants: { level: 2 },
});

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
  /** 시각 위계와 별도로 렌더할 태그를 강제 (a11y heading 순서 조정용) */
  as?: HeadingLevel;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, as, asChild, ...props }, ref) => {
    const Tag = (`h${as ?? level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');
    const Comp = asChild ? Slot : Tag;
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ level }), className)}
        {...props}
      />
    );
  },
);
Heading.displayName = 'Heading';

/* ---------- Text (body) ---------- */
const textVariants = cva('text-foreground', {
  variants: {
    size: {
      sm: 'text-sm leading-6',
      md: 'text-base leading-7',
      lg: 'text-lg leading-7',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
  },
  defaultVariants: { size: 'md', weight: 'normal' },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ size, weight }), className)}
        {...props}
      />
    );
  },
);
Text.displayName = 'Text';

/* ---------- Lead ---------- */
export const Lead = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-xl leading-relaxed text-muted-foreground', className)}
    {...props}
  />
));
Lead.displayName = 'Lead';

/* ---------- Muted ---------- */
export const Muted = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
Muted.displayName = 'Muted';

/* ---------- InlineCode ---------- */
export const InlineCode = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(
      'rounded bg-muted px-1.5 py-0.5 font-mono text-[0.875em] text-foreground',
      className,
    )}
    {...props}
  />
));
InlineCode.displayName = 'InlineCode';

/* ---------- List ---------- */
export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  ordered?: boolean;
}

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, ordered, ...props }, ref) => {
    const Comp = ordered ? 'ol' : 'ul';
    return (
      <Comp
        ref={ref as React.Ref<HTMLOListElement & HTMLUListElement>}
        className={cn(
          'my-2 ml-6 [&>li]:mt-1',
          ordered ? 'list-decimal' : 'list-disc',
          className,
        )}
        {...props}
      />
    );
  },
);
List.displayName = 'List';

/* ---------- Blockquote ---------- */
export const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(
      'mt-4 border-l-2 border-border pl-4 italic text-muted-foreground',
      className,
    )}
    {...props}
  />
));
Blockquote.displayName = 'Blockquote';
