# Typography PRD

## 1. 컴포넌트 개요

- **이름**: `Typography` (단일 모듈에서 다중 export)
- **목적**: 시스템 타입 스케일을 컴포넌트 인터페이스로 노출 — 카피 작성 시 raw 클래스(`text-2xl font-semibold`) 대신 의미 단위(`<Heading level={2}>`)로 사용하게 한다.
- **유사/관련 컴포넌트**: 없음 (foundational)
- **shadcn 베이스 여부**: 아니오 — 자체. 스케일은 [`../style/style05-typography.md`](../style/style05-typography.md) 참고.

## 2. 유저스토리

- **US-1**: As a 카피 작성자, I want `<Heading level={2}>` 같은 의미 단위로 위계를 표현하고 싶다, so that 시스템 토큰이 흔들리지 않는다.
- **US-2**: As a 한국어 본문 사용자, I want 영문/한글 혼용에서 합자가 자연스럽길 원한다, so that 가독성이 유지된다.
- **US-3**: As a 접근성 검수자, I want 시각 위계와 시맨틱 태그가 분리될 수 있길 원한다 (`level=3`인데 `as=2`로 렌더), so that 페이지 heading 순서를 깨지 않는다.
- **US-4**: As a 라우팅 합성자, I want `asChild` 로 Link/NavLink 에 위임할 수 있길 원한다, so that Heading 자체가 클릭 가능해진다.

## 3. Props

### `Heading`

| Name | Type | Required | Default | Description | 출처 |
|------|------|----------|---------|-------------|------|
| level | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | No | `2` | 시각 위계 + 렌더 태그 | US-1 |
| as | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | No | (= level) | 시각은 그대로, 렌더 태그만 강제 | US-3 |
| asChild | `boolean` | No | `false` | Slot 위임 | US-4 |
| className | `string` | No | - | 외부 확장 | (공통) |

### `Text`

| Name | Type | Required | Default | Description | 출처 |
|------|------|----------|---------|-------------|------|
| size | `'sm' \| 'md' \| 'lg'` | No | `'md'` | body 크기 | US-1 |
| weight | `'normal' \| 'medium' \| 'semibold'` | No | `'normal'` | 굵기 | US-1 |
| asChild | `boolean` | No | `false` | Slot | US-4 |

### `List`

| Name | Type | Required | Default | Description | 출처 |
|------|------|----------|---------|-------------|------|
| ordered | `boolean` | No | `false` | true → ol, false → ul | US-1 |

### 추가 export

`Display`, `Lead`, `Muted`, `InlineCode`, `Blockquote` — props 없음, 클래스만 적용.

## 4. Variants

variant prop 없음. `Heading.level` / `Text.size` 가 형태 결정.

## 5. Sizes

- `Heading`: 1~6 (계층) — [`style05-typography.md`](../style/style05-typography.md)
- `Text`: `sm/md/lg` (시스템 표준)
- 그 외: 단일 크기

## 6. States

해당 없음 — 인터랙션 컴포넌트가 아님.

## 7. 접근성

- **시맨틱 태그**: `Heading` 은 `level` 에 따라 `h1`~`h6` 자동. — US-3
- **시각 vs 시맨틱 분리**: `as` prop 으로 heading 순서를 깨지 않으면서 시각만 조정 가능. — US-3
- **한국어 본문**: `font-feature-settings: 'rlig' 1, 'calt' 1` (시스템 globals.css) 자동 적용. — US-2
- **줄바꿈**: 한국어 가독성을 위해 사용처에서 `word-break: keep-all` 권장 (컴포넌트 자체엔 미부여 — 영문 코드 블록과 충돌).

## 8. 사용 예시

```tsx
<Display>흩어진 데이터에서, 한 줄의 사실을</Display>
<Heading level={1}>페이지 타이틀</Heading>
<Heading level={3} as={2}>시각은 H3 수준, 시맨틱은 h2</Heading>

<Lead>인트로용 큰 본문 — text-xl + muted-foreground</Lead>
<Text>본문은 <InlineCode>useReducedMotion</InlineCode> 같은 인라인 코드와 함께 흐른다.</Text>
<Muted>부차 정보는 muted 톤으로.</Muted>

<List>
  <li>비순서 항목</li>
  <li>가나다라마바사</li>
</List>
<List ordered>
  <li>순서 항목</li>
</List>

<Blockquote>인용 / 면책 — 좌측 stripe + italic.</Blockquote>
```

## 9. Anti-patterns

- ❌ `<h2 className="text-3xl font-semibold">` 직접 작성 — 스케일이 흩어짐. `<Heading level={2}>` 사용.
- ❌ `Heading.level` 을 시각용으로만 쓰고 시맨틱이 깨짐 — `as` prop 으로 시맨틱 분리.
- ❌ `<p className="text-sm text-muted-foreground">` 자주 반복 — `<Muted>` 사용.
- ❌ raw 폰트 패밀리 지정 — `--font-sans` 사용 (시스템 토큰 정책 [`../architecture/architecture06-tokens-policy.md`](../architecture/architecture06-tokens-policy.md)).
