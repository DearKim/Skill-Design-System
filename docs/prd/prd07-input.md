# Input PRD

## 1. 컴포넌트 개요

- **이름**: `Input`
- **목적**: 단일 줄 텍스트 입력. email/password/search 등 native type 지원.
- **유사/관련 컴포넌트**: `Select`(트리거 높이 동일 토큰), `Textarea`(미구현).
- **shadcn 베이스 여부**: 예 — `sm/md/lg` 사이즈 + `hasError` 추가.

## 2. 유저스토리

- **US-1**: As a 폼 사용자, I want Tab 으로 이동·Enter 로 제출이 자연스럽게 되길 원한다, so that 키보드 흐름이 끊기지 않는다.
- **US-2**: As a 검증 실패 사용자, I want 어느 필드가 잘못됐는지 색·메시지로 즉시 알고 싶다, so that 수정할 곳을 빠르게 찾는다.
- **US-3**: As a 모바일 입력자, I want 1차 입력은 큰 터치 영역을 갖길 원한다, so that 잘못 탭하지 않는다.

## 3. Props

| Name | Type | Required | Default | Description | 출처 |
|------|------|----------|---------|-------------|------|
| size | `'sm' \| 'md' \| 'lg'` | No | `'md'` | 높이 토큰 | US-3 |
| hasError | `boolean` | No | `false` | `aria-invalid="true"` + destructive ring | US-2 |
| disabled | `boolean` | No | `false` | 비활성 | (공통) |
| type | `React.HTMLInputTypeAttribute` | No | `'text'` | HTML input type | (공통) |
| className | `string` | No | - | 외부 확장 | (공통) |
| ...HTMLInput | native | - | - | placeholder, value, onChange, name, required 등 | (공통) |

> `size` 는 native HTML attribute 이름과 충돌하므로 `Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>` 로 처리.

## 4. Variants

variant prop 없음 — `hasError` 가 사실상 유일한 시각 분기.

## 5. Sizes

[`../style/style03-sizes.md`](../style/style03-sizes.md) `sm/md/lg`.

## 6. States

- `default` / `hover`(미세) / `focus-visible` / `active`(없음) / `disabled` / `error`(`hasError`)
- `loading` / `selected` 등 사용 안 함

## 7. 접근성

- **키보드**: native input. — US-1
- **포커스**: 시스템 ring. — (공통)
- **ARIA**: `hasError` → `aria-invalid="true"`. 에러 메시지가 있다면 사용처에서 `aria-describedby` 로 연결. — US-2
- **라벨**: 별도 `Label` 컴포넌트와 `htmlFor`+`id` 로 연결 필수.

## 8. 사용 예시

```tsx
<Input placeholder="이메일" type="email" />
<Input size="lg" placeholder="비밀번호" type="password" />

// 에러
<div className="space-y-1.5">
  <Input placeholder="이메일" hasError aria-describedby="email-error" />
  <p id="email-error" className="text-xs text-destructive">올바른 이메일 형식이 아닙니다.</p>
</div>

// 라벨 연결
<Label htmlFor="username">사용자명</Label>
<Input id="username" name="username" />
```

## 9. Anti-patterns

- ❌ Label 없이 placeholder 만으로 안내 — 포커스 후 사라지면 컨텍스트 손실.
- ❌ 에러 시 색만 변경 — `hasError` 로 `aria-invalid` 까지 부여해야 스크린리더에 전달.
- ❌ `size="medium"` 같은 잘못된 토큰 — `'sm'/'md'/'lg'` 만.
- ❌ disabled 인 input 에 사용자 안내 부재 — placeholder 또는 helper 로 비활성 사유 명시.
