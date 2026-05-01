# Separator PRD

## 1. 컴포넌트 개요

- **이름**: `Separator`
- **목적**: 가로 / 세로 구분선. 메뉴, 카드 부분, 인라인 텍스트 사이.
- **유사/관련 컴포넌트**: 없음.
- **shadcn 베이스 여부**: 예 — Radix Separator.

## 2. 유저스토리

- **US-1**: As a 메뉴 디자이너, I want 그룹 사이를 시각적으로 가르고 싶다, so that 정보 묶음이 분명하다.
- **US-2**: As a 스크린리더 사용자, I want 의미 없는 데코 라인은 SR 에서 무시되길 원한다, so that 노이즈가 없다.

## 3. Props

| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | 방향 | US-1 |
| decorative | `boolean` | `true` | true 면 `role="none"` (a11y 무시) | US-2 |
| className | `string` | - | 외부 확장 | (공통) |

## 4. Variants

없음.

## 5. Sizes

해당 없음 — 길이는 부모 컨테이너 폭/높이.

## 6. States

해당 없음 (정적).

## 7. 접근성

- **decorative=true (기본)**: `role="none"` — SR 무시. 시각 데코로 충분할 때.
- **decorative=false**: `role="separator"` — 의미 있는 그룹 구분일 때.

## 8. 사용 예시

```tsx
// horizontal
<div>
  <p>제목</p>
  <Separator className="my-3" />
  <p>본문</p>
</div>

// vertical (인라인)
<div className="flex h-5 items-center gap-3 text-sm">
  <span>홈</span>
  <Separator orientation="vertical" />
  <span>제품</span>
</div>

// 의미 있는 분리
<Separator decorative={false} aria-label="필터 그룹 구분" />
```

## 9. Anti-patterns

- ❌ `<hr>` 직접 사용 — 시스템 토큰(`bg-border`) 미적용.
- ❌ vertical 인데 부모에 높이 없음 — 보이지 않음. 부모 `flex` 안에서 `h-5` 등 높이 보장.
- ❌ 큰 시각 강조에 사용 — Card / Section 으로 분리.
