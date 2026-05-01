# Catalog & Playground — 6단계: 카탈로그 등록

[`skill01-workflow.md`](./skill01-workflow.md) 의 5단계(구현 → 업로드) 다음에 **6단계: 카탈로그 등록** 을 추가합니다.
시스템에 들어온 컴포넌트는 [`/src/playground/`](../../src/playground/) 의 카탈로그 페이지에 노출되어 다른 팀원·LLM 이 바로 시각·인터랙션·코드를 확인할 수 있어야 합니다.

## 카탈로그 페이지의 구조

[`/src/App.tsx`](../../src/App.tsx) → [`/src/playground/PlaygroundLayout.tsx`](../../src/playground/PlaygroundLayout.tsx) → 그룹 별 [`/src/playground/sections/<Name>Section.tsx`](../../src/playground/sections/) 로 구성됩니다.

레이아웃:
- 상단 sticky 헤더 (제목 + 버전)
- 좌측 sticky 카테고리 nav — IntersectionObserver 기반 active 표시
- 우측 메인 — 섹션이 `space-y-24` 로 구분, `border-b` 로 끊김

## 섹션 구조 (모든 컴포넌트가 따름)

[`/src/playground/ComponentDoc.tsx`](../../src/playground/ComponentDoc.tsx) 가 제공하는 4개 빌딩 블록을 조합:

```tsx
<ComponentDoc id="button" title="Button" description="...">
  <Demo caption="Variants">
    {/* 항상 노출되는 기본 미리보기 */}
  </Demo>

  <Collapsible title="Props">
    <PropsTable rows={...} />
  </Collapsible>

  <Collapsible title="예시 코드 / 예시 출력">
    <LiveExample code={EXAMPLE} scope={{ Button }} />
  </Collapsible>
</ComponentDoc>
```

### 빌딩 블록

| 컴포넌트 | 역할 | 비고 |
|----------|------|------|
| `ComponentDoc` | 섹션 루트 (id, title, description) | scroll-mt + border-b 자동 |
| `Demo` | 항상 보이는 미리보기 박스 (`p-10`) | `caption` 으로 label |
| `Collapsible` | 네이티브 `<details>` 기반 접기 | chevron 90° 회전 |
| `PropsTable` | Props 표 (Name / Type / Default / Description) | `required` 시 `*` 표시 |
| `LiveExample` | 좌: 코드 에디터 / 우: 라이브 미리보기 | react-live + prism-react-renderer |

## LiveExample — 라이브 코드 에디터

좌측에서 코드를 수정하면 우측 미리보기가 실시간으로 갱신됩니다.

### 단순 JSX 표현식 (기본)

```tsx
<LiveExample
  code={`<Button variant="destructive">Delete</Button>`}
  scope={{ Button }}
/>
```

### 상태가 필요한 경우 — `noInline`

`useState` / `useEffect` 가 필요한 데모는 `noInline={true}` 로 두고 코드 마지막에 `render(...)` 를 호출합니다.

```tsx
<LiveExample
  noInline
  code={`function Demo() {
  const [v, setV] = React.useState(false);
  return <Switch checked={v} onCheckedChange={setV} />;
}
render(<Demo />);`}
  scope={{ React, Switch }}
/>
```

### scope — 에디터 안에서 사용 가능한 식별자

코드 안에서 사용하는 모든 컴포넌트·훅·아이콘을 `scope` 객체에 포함시켜야 합니다.

| 패턴 | scope 예시 |
|------|-----------|
| 단일 컴포넌트 | `{ Button }` |
| compound 컴포넌트 | `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }` |
| 아이콘 | `{ ExternalLink, AlertTriangle, ... }` (lucide-react) |
| 상태 hook | `{ React, ... }` (`React.useState` 로 접근) |

### 오버레이 컴포넌트 (Dialog / Sheet / Tooltip)

트리거가 preview 안에 있어도 콘텐츠는 body 로 portal 됩니다 — 추가 설정 불필요.
preview 영역이 작아 보일 수 있으니 `previewClassName="min-h-[200px] items-start"` 로 트리거 위치 조정.

## 6단계 — 카탈로그 등록 절차

새 컴포넌트가 5단계(업로드)까지 끝나면:

1. **섹션 파일 생성**: `/src/playground/sections/<Name>Section.tsx` — 위 패턴을 그대로 따름.
2. **App 에 추가**: [`/src/App.tsx`](../../src/App.tsx) 의 import 와 JSX 양쪽에 새 섹션을 추가. 그룹 순서를 따름.
3. **nav 등록**: [`/src/playground/PlaygroundLayout.tsx`](../../src/playground/PlaygroundLayout.tsx) 의 `NAV_ITEMS` 에 한 줄 추가 — `{ id, label, group }`.
4. **그룹 분류**: 다음 표 참고. 새 그룹이 필요하면 [`skill02-llm-rules.md`](./skill02-llm-rules.md) 의 "새 규칙 추가 절차" 따라 합의 후 추가.

### 카테고리 그룹

| 그룹 | 포함 컴포넌트 |
|------|--------------|
| **Foundation** | Tokens, Typography |
| **Action** | Button, Badge, Link |
| **Form** | Input, Select, Checkbox, Switch, Label |
| **Layout** | Card, Separator |
| **Navigation** | Tabs |
| **Data Display** | Avatar, Kbd |
| **Overlay** | Dialog, Sheet, Tooltip |
| **Feedback** | Alert, Toast, Progress, Spinner, Skeleton |

## Provider 가 필요한 컴포넌트

App 루트에서 한 번만 wrap — 카탈로그도 동일:

```tsx
<TooltipProvider delayDuration={200}>
  <ToastProvider swipeDirection="right" duration={4500}>
    <PlaygroundLayout>
      ...sections...
    </PlaygroundLayout>
    <ToastViewport />
  </ToastProvider>
</TooltipProvider>
```

본 시스템에서 Provider 가 필요한 컴포넌트:
- `TooltipProvider` — Tooltip 사용 페이지 어디든
- `ToastProvider + ToastViewport` — Toast 사용 시

## Anti-patterns

- ❌ Demo 가 너무 좁아 시각이 막힘 — `Demo` 는 `p-10` 기본. 추가 패딩이 필요하면 children 안에서.
- ❌ LiveExample 의 scope 누락 — `ReferenceError: Button is not defined` 발생.
- ❌ `noInline` 인데 `render(...)` 호출 누락 — 미리보기 빈 영역.
- ❌ `noInline=false` 인데 `function Demo() {...}` — JSX 표현식이 아니므로 컴파일 오류.
- ❌ Section 안에서 `useState`/`useEffect` 만 사용하고 `noInline=false` — 정적 JSX 만 가능.
- ❌ nav 등록 누락 — 좌측 사이드바에 표시 안 됨, IntersectionObserver active 추적도 안 됨.

## 새 빌딩 블록 추가

`Demo`/`Collapsible`/`PropsTable`/`LiveExample` 외에 새 빌딩 블록(예: `Comparison`, `Variant Matrix`)이 필요해질 때:

1. [`skill02-llm-rules.md`](./skill02-llm-rules.md) 의 "새 규칙 추가 절차" 따라 사용자와 합의.
2. [`/src/playground/ComponentDoc.tsx`](../../src/playground/ComponentDoc.tsx) 에 export 추가.
3. 본 문서의 "빌딩 블록" 표에 행 추가.
