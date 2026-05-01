# Link PRD

## 1. 컴포넌트 개요

- **이름**: `Link`
- **목적**: 텍스트 링크. 본문/네비/외부 링크에서 같은 인터페이스로 사용.
- **유사/관련 컴포넌트**: `Button.variant="link"` (액션 의미일 때).
- **shadcn 베이스 여부**: 변형 — shadcn 은 link 를 button 의 variant 로만 두지만, 본 시스템은 별도 컴포넌트로 분리해 `external`/`asChild` 를 지원.

## 2. 유저스토리

- **US-1**: As a 본문 작성자, I want 본문에 묻히는 톤(`muted`)과 강조 톤(`default`)을 골라 쓰고 싶다, so that 페이지 흐름에 맞게 강도 조절이 가능하다.
- **US-2**: As a 외부 링크 클릭자, I want 외부 사이트로 이동할 때 새 탭과 보안 rel 이 자동으로 걸리길 원한다, so that 안전·예측 가능하다.
- **US-3**: As a 라우터 사용자, I want `asChild` 로 React Router `<Link>` 등에 props 를 위임하고 싶다, so that SPA 네비게이션이 깨지지 않는다.

## 3. Props

| Name | Type | Required | Default | Description | 출처 |
|------|------|----------|---------|-------------|------|
| variant | `'default' \| 'muted' \| 'underline'` | No | `'default'` | 시각적 변형 | US-1 |
| external | `boolean` | No | `false` | true → `target="_blank"` + `rel="noopener noreferrer"` 자동 | US-2 |
| asChild | `boolean` | No | `false` | Slot — 라우터 라이브러리에 위임 | US-3 |
| className | `string` | No | - | 외부 확장 | (공통) |
| ...HTMLAnchor | native | - | - | href, onClick, target, rel | (공통) |

## 4. Variants

| Variant | 시각 | 용도 |
|---------|------|------|
| `default` | `text-primary hover:underline` | 인라인 링크 (기본) |
| `muted` | `text-muted-foreground hover:text-foreground` | 푸터 / 사이드 / 부차 링크 |
| `underline` | `text-foreground underline` | 항상 underline (본문 인라인) |

## 5. Sizes

해당 없음 — 인라인이라 폰트 크기는 부모에서 상속.

## 6. States

- `default` / `hover` / `focus-visible`
- `disabled` / `loading` 등 사용 안 함 (네비게이션이라 의미 없음)

## 7. 접근성

- **포커스**: 시스템 기본 `--ring`. — (공통)
- **외부 링크**: `external` 시 `rel="noopener noreferrer"` 자동. 추가 보안 필요 시 (예: 외부 뉴스) 사용처에서 `nofollow` 추가. — US-2
- **시각적 외부 표시**: 아이콘(`ExternalLink`)을 children 으로 함께 노출 권장 (시각 단서). — US-2
- **목적 명시**: `aria-label` 또는 본문이 링크 목적을 분명히 (예: "더 보기" 단독 사용 금지).

## 8. 사용 예시

```tsx
// 기본
<Link href="/products">제품 보기</Link>

// muted (푸터)
<Link href="/privacy" variant="muted">개인정보 처리방침</Link>

// 외부 + 아이콘
<Link href="https://anthropic.com" external>
  Anthropic <ExternalLink className="h-3.5 w-3.5" />
</Link>

// React Router 와 합성
<Link asChild>
  <RouterLink to="/dashboard">대시보드</RouterLink>
</Link>
```

## 9. Anti-patterns

- ❌ 외부 링크에 `external` 안 쓰고 수동으로 `target="_blank"` — 보안 rel 누락 위험.
- ❌ `Link` 를 액션(폼 submit 등)으로 — `Button` 사용.
- ❌ "더 보기" / "여기 클릭" 단독 — 링크 목적이 무엇인지 텍스트로 명시.
- ❌ raw `<a>` 직접 작성 — 시스템 토큰 미적용.
