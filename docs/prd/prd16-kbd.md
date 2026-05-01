# Kbd PRD

## 1. 컴포넌트 개요

- **이름**: `Kbd`
- **목적**: 키보드 단축키 시각 표시 (⌘K, ⏎, Esc 등). 검색바 placeholder, 메뉴 우측, 도움말.
- **유사/관련 컴포넌트**: `Badge`(시각 비슷하지만 의미 다름).
- **shadcn 베이스 여부**: 아니오 — 자체.

## 2. 유저스토리

- **US-1**: As a 데스크톱 사용자, I want 단축키가 시각적 키처럼 보이길 원한다, so that 외워두기 쉽다.
- **US-2**: As a TEUM 사용자, I want 검색바에 ⌘K 안내가 일관된 톤으로 보이길 원한다.

## 3. Props

| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| children | `ReactNode` | - | 키 라벨 | US-1 |
| className | `string` | - | 외부 확장 | (공통) |
| ...HTMLAttributes | native | - | (공통) | (공통) |

## 4. Variants

없음.

## 5. Sizes

단일 (`h-5 min-w-5 text-[10px]`). `kbd` 시맨틱 태그.

## 6. States

해당 없음.

## 7. 접근성

- 시맨틱 `<kbd>` 태그 사용 — 스크린리더가 "keyboard input" 로 읽음.
- 단축키만 단독 노출하지 말고, 함께 어떤 동작인지 텍스트 동반 권장 ("검색 ⌘K").

## 8. 사용 예시

```tsx
<span className="flex items-center gap-1">
  검색 <Kbd>⌘</Kbd> <Kbd>K</Kbd>
</span>

// 검색바 안
<div className="flex h-10 items-center gap-2 rounded-md border px-3">
  <span className="flex-1">틈새 검색하기</span>
  <Kbd>⌘</Kbd> <Kbd>K</Kbd>
</div>

// 단축키 안내
<div>저장: <Kbd>⌘</Kbd><Kbd>S</Kbd></div>
```

## 9. Anti-patterns

- ❌ 키 자체에 클릭 핸들러 — 단축키는 시각 표현이지 버튼이 아님.
- ❌ 단축키만 단독 노출 — 어떤 동작인지 함께 명시.
- ❌ 단축키가 OS 별로 다른데 한 가지만 노출 (예: Mac 만 ⌘) — `navigator.platform` 검사 후 ⌘ vs Ctrl 분기.
