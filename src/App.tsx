export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <header className="max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight">
          Skill Design System
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          이 페이지는 디자인 시스템 컴포넌트의 플레이그라운드입니다. 컴포넌트가
          <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-xs">
            src/components/
          </code>
          에 추가되면 여기서 import 해 시각적으로 확인할 수 있습니다.
        </p>
      </header>

      <section className="mt-8 grid gap-3 max-w-3xl">
        <div className="rounded-lg border border-border bg-card p-4 text-card-foreground">
          <p className="text-sm font-medium">시맨틱 토큰 작동 확인</p>
          <p className="mt-1 text-sm text-muted-foreground">
            이 카드가 보이면 Tailwind + shadcn 토큰이 정상적으로 적용된 것입니다.
          </p>
        </div>
      </section>
    </div>
  );
}
