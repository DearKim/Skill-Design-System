# Avatar PRD

## 1. 컴포넌트 개요

- **이름**: `Avatar` (compound: Image / Fallback)
- **목적**: 사용자 프로필 / 회사 로고 표시. 이미지 로딩 실패 시 fallback 자동 노출.
- **유사/관련 컴포넌트**: 없음.
- **shadcn 베이스 여부**: 예 — Radix Avatar.

## 2. 유저스토리

- **US-1**: As a 프로필 표시자, I want 이미지가 깨져도 빈 영역 대신 이름 이니셜이 보이길 원한다, so that 레이아웃이 깨지지 않는다.
- **US-2**: As a 모바일 사용자, I want 이미지 크기가 sm/md/lg 로 일관되길 원한다, so that 다른 인터랙션 컴포넌트와 정렬된다.

## 3. Props

### `Avatar` (root)
| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 32 / 40 / 48px | US-2 |
| className | `string` | - | 외부 확장 | (공통) |

### `AvatarImage`
| Name | Type | Required | Description | 출처 |
|------|------|----------|-------------|------|
| src | `string` | Yes | 이미지 URL | US-1 |
| alt | `string` | Yes | 시맨틱 라벨 | (a11y) |

### `AvatarFallback`
| Name | Type | Description | 출처 |
|------|------|-------------|------|
| children | `ReactNode` | 이니셜 또는 아이콘 | US-1 |

## 4. Variants

variant 없음 — fallback 의 색은 사용처에서 `className="bg-primary"` 등으로 지정.

## 5. Sizes

`Avatar.size`: 시스템 표준 `sm/md/lg`.

## 6. States

해당 없음 (정적). 이미지 로딩 단계는 Radix 가 자체 처리 (loading → fallback).

## 7. 접근성

- **alt**: `AvatarImage` 의 `alt` 필수 — 빈 문자열(`""`)이라도 명시 (decorative 의도 표현).
- **fallback**: 텍스트 이니셜이 SR 에 노출. 이미지 alt 와 의미 중복되지 않게 — fallback 은 이미지 없을 때만 노출됨 (Radix).

## 8. 사용 예시

```tsx
// 이미지 + fallback
<Avatar size="md">
  <AvatarImage src="/me.jpg" alt="김성현" />
  <AvatarFallback>SH</AvatarFallback>
</Avatar>

// 컬러 fallback
<Avatar size="lg">
  <AvatarFallback className="bg-primary text-primary-foreground">A.P</AvatarFallback>
</Avatar>

// 깨진 이미지 → fallback 자동 전환
<Avatar size="sm">
  <AvatarImage src="" alt="empty" />
  <AvatarFallback>?</AvatarFallback>
</Avatar>
```

## 9. Anti-patterns

- ❌ `AvatarImage` 만 사용하고 fallback 없음 — 깨질 때 빈 원만 노출.
- ❌ alt 누락 — a11y 위반.
- ❌ Avatar 안에 인터랙티브 요소 — 부모(Button/Link) 가 인터랙션 담당.
- ❌ `size` 외에 임의 `h-* w-*` className 으로 변경 — 시스템 토큰 정책 위반.
