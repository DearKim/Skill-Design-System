# Button PRD

## 1. 컴포넌트 개요

- **이름**: `Button`
- **목적**: 시스템 전반의 인터랙션 1차 표현. 폼 제출, 다이얼로그 액션, 카드 CTA 등.
- **유사/관련 컴포넌트**: `Badge`(시각만 비슷), `Link`(텍스트 액션). shadcn `button` 베이스.
- **shadcn 베이스 여부**: 예 — 본 시스템 컨벤션(`sm/md/lg`, 알림 4 토큰 variant)으로 확장.

## 2. 유저스토리

- **US-1**: As a 사용자, I want 가장 강조되는 액션과 보조 액션을 구분해서 보고 싶다, so that 주된 의도를 빠르게 잡는다.
- **US-2**: As a 비동기 폼 사용자, I want 제출 중에는 더블 클릭이 막히고 진행 표시가 보이길 원한다, so that 중복 전송이 발생하지 않는다.
- **US-3**: As a 모바일 사용자, I want 1차 CTA 가 충분한 터치 영역을 갖길 원한다, so that 잘못 누르지 않는다.
- **US-4**: As a 라우터 사용자, I want `asChild` 로 `<a href>` 또는 `<Link>` 에 props 를 위임하고 싶다, so that 시각은 버튼인데 의미는 링크가 된다.
- **US-5**: As a brand 풀블리드 페이지 디자이너, I want `bg-primary` 영역 위에 흰 배경 CTA 를 일관된 variant 로 쓰고 싶다, so that 가독성이 보장된다.

## 3. Props

| Name | Type | Required | Default | Description | 출처 |
|------|------|----------|---------|-------------|------|
| variant | `'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link' \| 'inverse' \| 'warning' \| 'success' \| 'info'` | No | `'default'` | 시각적 변형 | US-1, US-5 |
| size | `'sm' \| 'md' \| 'lg'` | No | `'md'` | 크기 토큰 | US-3 |
| asChild | `boolean` | No | `false` | Radix Slot 으로 자식에 위임 | US-4 |
| loading | `boolean` | No | `false` | 비동기 진행 — 자동 disabled + aria-busy + 스피너 | US-2 |
| disabled | `boolean` | No | `false` | 비활성 | (공통) |
| className | `string` | No | - | 외부 확장 | (공통) |
| ...HTMLButton | native | - | - | onClick, type 등 | (공통) |

## 4. Variants

[`../style/style02-variants.md`](../style/style02-variants.md) 의 11종을 모두 사용. `inverse` 는 `bg-primary` 풀블리드 컨텍스트로 한정.

## 5. Sizes

[`../style/style03-sizes.md`](../style/style03-sizes.md) `sm/md/lg` 표준. 모바일 1차 CTA 는 `lg` 강제 (US-3, "터치 우선" 정책).

## 6. States

| State | Trigger | 시각 / 행동 |
|-------|---------|-------------|
| default | 평상시 | 기본 |
| hover | 마우스 오버 | variant 별 hover 표 |
| focus-visible | 키보드 포커스 | `ring-2 ring-ring ring-offset-2` |
| active | 눌리는 중 | (선택) `active:scale-[0.98]` |
| disabled | `disabled` prop | `opacity-50` + `pointer-events-none` |
| loading | `loading` prop | 스피너 + disabled 외관 + `aria-busy` |

`error` / `selected` / 도메인 특수 상태는 사용 안 함.

## 7. 접근성

- **키보드**: Tab 으로 포커스, Enter/Space 로 활성화 (HTML button native). — US-1
- **포커스 표시**: 시스템 기본 `--ring`. — (공통)
- **ARIA**: `loading` 시 자동 `aria-busy="true"`. `disabled` HTML 속성은 그대로 사용. — US-2
- **터치 타깃**: `lg` 사용 시 48px (44px 권장 충족). — US-3

## 8. 사용 예시

```tsx
<Button>Click me</Button>
<Button variant="destructive" size="sm">Delete</Button>
<Button loading>Saving...</Button>

// brand 풀블리드 위
<section className="bg-primary text-primary-foreground">
  <Button variant="inverse" size="lg">제품 보기</Button>
</section>

// asChild — 라우터 링크에 위임
<Button asChild>
  <a href="/dashboard">Go to dashboard</a>
</Button>

// 아이콘 + 텍스트
<Button>
  <PlusIcon className="h-4 w-4" />
  Add item
</Button>
```

## 9. Anti-patterns

- ❌ `<Button className="bg-red-500">` — `variant="destructive"` 사용.
- ❌ `<Button size="small">` — `'sm'` 사용 ([`../architecture/architecture03-naming.md`](../architecture/architecture03-naming.md)).
- ❌ 링크 용도로 `<Button onClick={() => navigate(...)}>` — `asChild` + `<a>` (브라우저 기본 ⌘+클릭 새 탭 보장).
- ❌ `<Button disabled loading>` 같이 의미 중복 — `loading` 이 자동 비활성.
- ❌ 모바일 1차 CTA 를 `size="md"`(40px) — 터치 타깃 미달, `lg` 강제.
- ❌ raw hex 색상 — variant 또는 토큰 사용.
