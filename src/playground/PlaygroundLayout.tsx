import * as React from 'react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { id: 'tokens', label: 'Tokens', group: 'Foundation' },
  { id: 'typography', label: 'Typography', group: 'Foundation' },
  { id: 'button', label: 'Button', group: 'Action' },
  { id: 'badge', label: 'Badge', group: 'Action' },
  { id: 'link', label: 'Link', group: 'Action' },
  { id: 'input', label: 'Input', group: 'Form' },
  { id: 'select', label: 'Select', group: 'Form' },
  { id: 'checkbox', label: 'Checkbox', group: 'Form' },
  { id: 'switch', label: 'Switch', group: 'Form' },
  { id: 'card', label: 'Card', group: 'Layout' },
  { id: 'separator', label: 'Separator', group: 'Layout' },
  { id: 'tabs', label: 'Tabs', group: 'Navigation' },
  { id: 'avatar', label: 'Avatar', group: 'Data Display' },
  { id: 'kbd', label: 'Kbd', group: 'Data Display' },
  { id: 'dialog', label: 'Dialog (Modal)', group: 'Overlay' },
  { id: 'sheet', label: 'Sheet (Drawer)', group: 'Overlay' },
  { id: 'tooltip', label: 'Tooltip', group: 'Overlay' },
  { id: 'alert', label: 'Alert', group: 'Feedback' },
  { id: 'toast', label: 'Toast', group: 'Feedback' },
  { id: 'progress', label: 'Progress', group: 'Feedback' },
  { id: 'spinner', label: 'Spinner', group: 'Feedback' },
  { id: 'skeleton', label: 'Skeleton', group: 'Feedback' },
] as const;

export function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = React.useState<string>('tokens');

  React.useEffect(() => {
    const observers = NAV_ITEMS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const ob = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-30% 0px -60% 0px' },
      );
      ob.observe(el);
      return ob;
    });
    return () => {
      observers.forEach((ob) => ob?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-3">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-primary" aria-hidden />
            <div className="leading-tight">
              <p className="text-sm font-semibold">Skill Design System</p>
              <p className="text-xs text-muted-foreground">Playground · v0.0.1</p>
            </div>
          </div>
          <a
            className="text-xs text-muted-foreground hover:text-foreground"
            href="#tokens"
          >
            docs/ →
          </a>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] gap-12 px-8 py-12">
        <aside className="sticky top-[64px] hidden h-[calc(100vh-80px)] w-52 shrink-0 overflow-y-auto pb-8 md:block">
          <nav className="flex flex-col gap-0.5">
            {NAV_ITEMS.map(({ id, label, group }, i) => {
              const prevGroup = i > 0 ? NAV_ITEMS[i - 1].group : null;
              const showGroup = group !== prevGroup;
              return (
                <React.Fragment key={id}>
                  {showGroup ? (
                    <div className="mt-4 px-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground first:mt-0">
                      {group}
                    </div>
                  ) : null}
                  <a
                    href={`#${id}`}
                    className={cn(
                      'rounded-md px-3 py-1.5 text-sm transition-colors',
                      active === id
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                    )}
                  >
                    {label}
                  </a>
                </React.Fragment>
              );
            })}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 space-y-24">{children}</main>
      </div>
    </div>
  );
}
