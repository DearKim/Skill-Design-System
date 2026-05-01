# Alert PRD

## 1. 컴포넌트 개요

- **이름**: `Alert` (compound: Title / Description)
- **목적**: 페이지 내부 인라인 안내·면책 배너 — 의료법 LegalNotice, 공지, 에러 안내.
- **유사/관련 컴포넌트**: `Toast`(우측 하단 일시 알림), `Dialog`(모달 알림).
- **shadcn 베이스 여부**: 예 — 알림 4 토큰 variant 추가.

## 2. 유저스토리

- **US-1**: As a 의료 정보 페이지 사용자, I want 면책 배너가 일관된 위치/톤으로 보이길 원한다, so that 의료법 위반 오해가 없다.
- **US-2**: As a 폼 사용자, I want 검증 실패가 페이지 내부 영역에 명확히 보이길 원한다 (Toast 가 아닌 그 자리).
- **US-3**: As a 디자이너, I want 아이콘 + 제목 + 본문이 자동 정렬되길 원한다, so that 매번 layout 짜지 않는다.

## 4. ~~Variants~~ → §4

## 3. Props

### `Alert` (root)
| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| variant | `'default' \| 'destructive' \| 'warning' \| 'success' \| 'info'` | `'default'` | 시각 변형 | US-1 |
| className | `string` | - | 외부 확장 | (공통) |
| ...HTMLDiv | native | - | role="alert" 자동 부여됨 | (공통) |

### `AlertTitle` / `AlertDescription`
native attributes (h5 / div).

## 4. Variants

| Variant | 색 | 용도 |
|---------|----|------|
| `default` | `bg-background border-border` | 일반 안내 |
| `info` | `bg-info/10 border-info/40` | 정보 안내 |
| `success` | `bg-success/10 border-success/40` | 완료 / 성공 |
| `warning` | `bg-warning/10 border-warning/40` | 의료법 면책, Beta 공지 — US-1 |
| `destructive` | `bg-destructive/10 border-destructive/40 text-destructive` | 에러, 실패 — US-2 |

## 5. Sizes

단일 (p-4). 본문 길이에 따라 자연스럽게 늘어남.

## 6. States

정적. 닫기 버튼이 필요하면 `Toast` 또는 사용처에서 추가.

## 7. 접근성

- **role**: `role="alert"` 자동 — SR 가 즉시 알림.
- **아이콘**: lucide 아이콘은 `[&>svg]:absolute` 로 자동 좌상단 배치. — US-3
- **시각만으로 의미 전달 금지** — variant 색 외에 텍스트로 분명하게.

## 8. 사용 예시

```tsx
// 의료법 면책 (A.PAGO LegalNotice 의 베이스)
<Alert variant="warning">
  <AlertTriangle />
  <AlertTitle>의료광고법 안내</AlertTitle>
  <AlertDescription>
    본 검색 결과는 허가된 의료기기에 대한 카테고리 기반 안내이며, 개별 제품
    추천이나 진단을 대신하지 않습니다.
  </AlertDescription>
</Alert>

// 폼 검증 실패
<Alert variant="destructive">
  <AlertCircle />
  <AlertTitle>저장에 실패했습니다</AlertTitle>
  <AlertDescription>네트워크 연결을 확인해주세요.</AlertDescription>
</Alert>

// 정보
<Alert variant="info">
  <Info />
  <AlertDescription>이 검색 결과는 식약처 공시 정보 기반입니다.</AlertDescription>
</Alert>
```

## 9. Anti-patterns

- ❌ 일시적 알림에 Alert 사용 — `Toast` 가 적절.
- ❌ `destructive` 를 면책 배너에 사용 — 위험 액션 의미 침범. `warning` 사용. (US-1)
- ❌ Title 없이 Description 만 — 위계 약함. 한 줄이면 Title 만으로도 OK.
- ❌ 아이콘 없이 색만으로 의미 표현 — 색맹 사용자 고려.
