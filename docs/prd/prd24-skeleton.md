# Skeleton PRD

## 1. 컴포넌트 개요

- **이름**: `Skeleton`
- **목적**: 비동기로 채워질 영역의 자리표시자. 카드 / 리스트 / 텍스트 줄 로딩.
- **유사/관련 컴포넌트**: `Spinner`(point 단위 표시), `Progress`(결정형).
- **shadcn 베이스 여부**: 예 — 자체 (animate-pulse + bg-muted).

## 2. 유저스토리

- **US-1**: As a 사용자, I want 비동기 데이터가 로드되는 동안 빈 영역 대신 형태가 미리 보이길 원한다, so that 레이아웃 점프(CLS) 가 없다.
- **US-2**: As a 디자이너, I want 카드/리스트 모양에 맞게 자유롭게 모양을 줄 수 있길 원한다.

## 3. Props

| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| className | `string` | - | 높이/너비/모양 — `h-4 w-3/4 rounded-full` 등 | US-2 |
| ...HTMLDiv | native | - | (공통) | (공통) |

## 4. Variants

variant 없음 — 모양은 className 으로.

## 5. Sizes

해당 없음 — 사용처에서 `h-*` `w-*` 로 결정.

## 6. States

해당 없음 — 항상 pulse 애니메이션.

## 7. 접근성

- **시각 데코레이션**: 의미 없음. 부모 컨테이너에서 `aria-busy="true"` 또는 SR 친화 메시지 ("로딩 중") 동반 권장.
- **`prefers-reduced-motion`**: pulse 가 약하지만 거슬릴 수 있음. 필요 시 `motion-safe:` 변종 추가.

## 8. 사용 예시

```tsx
// 텍스트 줄
<div className="space-y-2">
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6" />
</div>

// 카드 자리표시 (뉴스 / 일자리 카드)
<div className="rounded-lg border bg-card p-4">
  <div className="flex items-center gap-3">
    <Skeleton className="h-10 w-10 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-3 w-1/3" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  </div>
  <Skeleton className="mt-3 h-24 w-full" />
</div>

// 리스트 (TanStack Query 로딩 시)
{isLoading ? (
  Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
) : (
  data.map((item) => <Card key={item.id} {...item} />)
)}
```

## 9. Anti-patterns

- ❌ 데이터가 1초 이내에 도착하는데 Skeleton 노출 — 깜빡임만 발생. `setTimeout` 으로 200ms 이상 지연 후 표시.
- ❌ 실제 카드와 다른 형태/크기 — 데이터 도착 시 레이아웃 점프 (CLS) 발생. 가능한 한 같은 dimension.
- ❌ Skeleton 안에 텍스트 추가 — pulse 가 텍스트를 가림. `Spinner + 텍스트` 조합이 적절.
- ❌ `aria-busy` 누락 — SR 사용자에게 "로딩 중" 안내 부재.
