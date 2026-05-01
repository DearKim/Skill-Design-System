# Card PRD

## 1. 컴포넌트 개요

- **이름**: `Card` (compound: Header / Title / Description / Content / Footer)
- **목적**: 정보 단위 컨테이너 — 제품 카드, 뉴스 카드, 다이얼로그 내부 등.
- **유사/관련 컴포넌트**: `Alert`(인라인 배너), `Dialog`(모달).
- **shadcn 베이스 여부**: 예.

## 2. 유저스토리

- **US-1**: As a 카탈로그 작성자, I want 카드의 제목·부제·본문·액션을 일관된 위치로 배치하고 싶다, so that 모든 카드가 같은 리듬으로 보인다.
- **US-2**: As a 디자이너, I want 카드 부분을 자유롭게 골라 빼거나 추가할 수 있길 원한다, so that 케이스에 맞춘다 (제목만, 액션만 등).

## 3. Props

각 part 는 native `HTMLAttributes<HTMLDivElement>` (또는 `Heading` / `Paragraph`) — 별도 props 없음.

| Part | 렌더 태그 | 역할 |
|------|-----------|------|
| `Card` | `div` | 루트 (border + shadow + rounded-lg) |
| `CardHeader` | `div` | 제목 영역 (`p-6 gap-1.5`) |
| `CardTitle` | `h3` | 제목 (font-semibold) |
| `CardDescription` | `p` | 부제 (text-sm muted) |
| `CardContent` | `div` | 본문 (`p-6 pt-0`) |
| `CardFooter` | `div` | 액션 영역 (`p-6 pt-0 flex`) |

## 4. Variants

variant 없음 — 외부 컨텍스트가 색을 결정. 강조가 필요하면 사용처에서 `className="border-primary"` 등.

## 5. Sizes

해당 없음 — 컨테이너 폭은 부모 그리드/플렉스에서 결정.

## 6. States

- 정적 컴포넌트 — `hover` / `focus-visible` 은 카드를 클릭 가능하게 만들 때 사용처에서 추가 (예: `<Card asChild>` 안 함, 대신 카드 안 Button 이나 Link 가 인터랙션 담당).

## 7. 접근성

- 카드 자체는 시맨틱 단위가 아님 — 의미 있는 그룹이라면 사용처에서 `<article>` 등으로 감싸거나 `Card asChild` 패턴 추가.
- 제목/본문 시맨틱은 `CardTitle`(h3) + `CardDescription`(p) 가 담당.

## 8. 사용 예시

```tsx
<Card className="max-w-md">
  <CardHeader>
    <CardTitle>10분 알바</CardTitle>
    <CardDescription>출퇴근 틈새 시간을 즉시 활용하세요.</CardDescription>
  </CardHeader>
  <CardContent className="text-sm text-muted-foreground">
    지역·시간대·임금 필터로 빠르게 좁혀 보세요.
  </CardContent>
  <CardFooter>
    <Button size="lg" className="w-full">지원하기</Button>
  </CardFooter>
</Card>

// 부분만 사용
<Card>
  <CardContent>본문만 있는 카드</CardContent>
</Card>
```

## 9. Anti-patterns

- ❌ 카드 전체를 `<a>` 또는 `<button>` 으로 — 카드 안에 다른 인터랙션이 있을 때 nesting 충돌. 카드 안 단일 액션을 큰 영역으로 두려면 `CardFooter > Button className="w-full"` 패턴.
- ❌ `CardTitle` 위계를 페이지 heading 순서 무시하고 사용 (h3 강제) — 페이지에 따라 사용처에서 `Heading level` 사용 검토.
- ❌ 카드 안에 카드 깊이 중첩 — 정보 위계가 흐려짐.
