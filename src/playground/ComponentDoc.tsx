import * as React from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { themes } from 'prism-react-renderer';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ---------- Root ---------- */

interface ComponentDocProps {
  id: string;
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
}

export function ComponentDoc({ id, title, description, children }: ComponentDocProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-8 border-b border-border pb-24">
      <header className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
      </header>
      {children}
    </section>
  );
}

/* ---------- Demo Block (always visible) ---------- */

export function Demo({
  children,
  className,
  caption,
}: {
  children: React.ReactNode;
  className?: string;
  caption?: string;
}) {
  return (
    <div className="space-y-3">
      {caption ? (
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {caption}
        </p>
      ) : null}
      <div
        className={cn(
          'rounded-lg border border-border bg-card p-10',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

/* ---------- Collapsible (uses native <details> for SSR / no JS friendliness) ---------- */

export function Collapsible({
  title,
  children,
  defaultOpen = false,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="group overflow-hidden rounded-lg border border-border bg-card"
    >
      <summary className="flex cursor-pointer list-none select-none items-center gap-2 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/50 [&::-webkit-details-marker]:hidden">
        <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
        {title}
      </summary>
      <div className="border-t border-border bg-background">{children}</div>
    </details>
  );
}

/* ---------- Props Table (sat inside Collapsible) ---------- */

export type PropRow = {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
};

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-muted/40">
          <tr className="border-b border-border">
            <th className="px-5 py-3 font-medium text-muted-foreground">Name</th>
            <th className="px-5 py-3 font-medium text-muted-foreground">Type</th>
            <th className="px-5 py-3 font-medium text-muted-foreground">Default</th>
            <th className="px-5 py-3 font-medium text-muted-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.name}
              className={cn(i !== rows.length - 1 && 'border-b border-border')}
            >
              <td className="px-5 py-3 align-top font-mono text-xs">
                {row.name}
                {row.required ? <span className="ml-1 text-destructive">*</span> : null}
              </td>
              <td className="px-5 py-3 align-top font-mono text-xs text-muted-foreground">
                {row.type}
              </td>
              <td className="px-5 py-3 align-top font-mono text-xs text-muted-foreground">
                {row.default ?? '—'}
              </td>
              <td className="px-5 py-3 align-top text-xs text-muted-foreground">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Live Example: editor (left) + preview (right) ---------- */

export interface LiveExampleProps {
  code: string;
  /** Components/hooks made available inside the editor */
  scope: Record<string, unknown>;
  /** noInline: editor must call render(...). Default: false (single JSX expression) */
  noInline?: boolean;
  /** Preview height — useful for overlays so trigger doesn't get cut */
  previewClassName?: string;
}

export function LiveExample({
  code,
  scope,
  noInline = false,
  previewClassName,
}: LiveExampleProps) {
  return (
    <div className="bg-background">
      <LiveProvider code={code.trim()} scope={scope} noInline={noInline} theme={themes.vsDark}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Editor (left) */}
          <div className="relative border-b border-border lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-border bg-zinc-900 px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
              <span>Editor</span>
              <span className="text-zinc-500">수정 가능</span>
            </div>
            <div className="bg-zinc-900 [&_textarea]:!outline-none [&_pre]:!bg-zinc-900 [&_textarea]:!bg-zinc-900">
              <LiveEditor className="!font-mono !text-[13px] !leading-relaxed [&_pre]:!p-4 [&_textarea]:!p-4" />
            </div>
          </div>

          {/* Preview (right) */}
          <div className="relative">
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              <span>Preview</span>
              <span className="text-muted-foreground/70">실시간 반영</span>
            </div>
            <div
              className={cn(
                'flex min-h-[160px] items-center justify-center bg-background p-8',
                previewClassName,
              )}
            >
              <LivePreview />
            </div>
          </div>
        </div>
        <LiveError className="border-t border-destructive/40 bg-destructive/10 p-3 font-mono text-xs text-destructive" />
      </LiveProvider>
    </div>
  );
}
