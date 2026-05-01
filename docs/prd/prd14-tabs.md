# Tabs PRD

## 1. 컴포넌트 개요

- **이름**: `Tabs` (compound: List / Trigger / Content)
- **목적**: 같은 위치에 다른 컨텐츠를 보여주는 네비게이션 — 시간대 카테고리, 제품 카테고리 등.
- **유사/관련 컴포넌트**: `Select`(드롭다운 형태로 같은 의미), `Sheet`(전체 화면 분할).
- **shadcn 베이스 여부**: 예 — Radix Tabs.

## 2. 유저스토리

- **US-1**: As a 사용자, I want 좌우 화살표 / Tab 으로 빠르게 카테고리를 전환하고 싶다, so that 키보드 흐름이 끊기지 않는다.
- **US-2**: As a 디자이너, I want 활성 탭이 시스템 `selected` state 토큰을 따르길 원한다, so that 다른 활성 표시(필터 칩, nav)와 일관된다.
- **US-3**: As a SEO 작성자, I want 비활성 탭의 콘텐츠가 mount 되지 않길 원한다 (기본), so that 초기 페이지 무게가 가볍다.

## 3. Props

### `Tabs` (root)
| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| value / onValueChange | `string` / `(v) => void` | - | controlled | (공통) |
| defaultValue | `string` | - | uncontrolled | (공통) |
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | 방향 | (공통) |

### `TabsTrigger` / `TabsContent`
| Name | Type | Required | Description | 출처 |
|------|------|----------|-------------|------|
| value | `string` | Yes | Trigger ↔ Content 매칭 키 | (공통) |
| disabled | `boolean` (Trigger) | - | 트리거 비활성 | (공통) |
| forceMount | `boolean` (Content) | - | 비활성 panel 도 DOM 유지 (스크롤 위치 보존 등) | US-3 (예외) |

## 4. Variants

variant 없음.

## 5. Sizes

`TabsList` 가 `h-10`(`md` 토큰)으로 고정. 차후 `sm/lg` 가 필요하면 시스템 사이즈 정책 따름.

## 6. States

- Trigger: `default` / `hover` / `focus-visible` / `disabled` / `selected` (= `data-[state=active]`)
- Content: 비활성은 unmount (기본) 또는 `hidden` (forceMount)

## 7. 접근성

- **키보드**: ←/→ 이동, Home/End 처음/끝 (Radix native). — US-1
- **ARIA**: `role="tablist"`, 트리거 `role="tab" aria-selected`, 패널 `role="tabpanel"` 자동.
- **활성 탭 표시**: `data-[state=active]:bg-background data-[state=active]:shadow-sm` — 시각만으로 의존하지 말고 텍스트도 분명히. — US-2

## 8. 사용 예시

```tsx
<Tabs defaultValue="10min">
  <TabsList>
    <TabsTrigger value="10min">10분</TabsTrigger>
    <TabsTrigger value="30min">30분</TabsTrigger>
    <TabsTrigger value="4h">4시간</TabsTrigger>
  </TabsList>
  <TabsContent value="10min">10분 안에 끝나는 일들…</TabsContent>
  <TabsContent value="30min">30분 단위 단기 알바…</TabsContent>
  <TabsContent value="4h">반나절 일감…</TabsContent>
</Tabs>

// controlled
const [tab, setTab] = useState('10min');
<Tabs value={tab} onValueChange={setTab}>...</Tabs>
```

## 9. Anti-patterns

- ❌ Tabs 안에 페이지 라우팅 의존 (URL 변경) — 별도 라우팅 패턴 사용. Tabs 는 같은 페이지 내 분할.
- ❌ 탭 라벨이 너무 길어 줄 바꿈 — 짧게 줄이거나 Sheet/Select 사용.
- ❌ 비활성 panel 의 무거운 컴포넌트(차트 등)에 `forceMount` 무분별 사용 — 초기 로딩 무게 증가.
