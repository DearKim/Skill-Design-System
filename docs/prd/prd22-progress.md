# Progress PRD

## 1. 컴포넌트 개요

- **이름**: `Progress`
- **목적**: 결정형 진행률 바 — 업로드, 온보딩 단계, 폼 작성률 등.
- **유사/관련 컴포넌트**: `Spinner`(불확정형), `Skeleton`(자리표시).
- **shadcn 베이스 여부**: 예 — Radix Progress.

## 2. 유저스토리

- **US-1**: As a 업로드 사용자, I want 진행률을 숫자/바로 동시에 보고 싶다.
- **US-2**: As a 온보딩 사용자, I want 단계 N/M 을 바로 시각화하고 싶다.

## 3. Props

| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| value | `number` (0-100) | - | 현재 진행률. undefined 면 indeterminate (시각은 별도 처리 필요) | US-1, US-2 |
| max | `number` | `100` | 최대값 | (공통) |
| className | `string` | - | 외부 확장 | (공통) |

## 4. Variants

variant 없음 — 색은 `--primary` 고정. 다른 색이 필요하면 `className="[&>div]:bg-success"` 등.

## 5. Sizes

기본 `h-2`. 큰 트랙은 `className="h-3"` 등.

## 6. States

- 진행 중 / 완료 (value=100) — 별도 시각 분기 없음. 사용처에서 라벨로 표현.

## 7. 접근성

- **ARIA**: Radix 가 `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` 자동 부여.
- **숫자 동반**: 시각만으로 진행률을 전달하지 말고 텍스트로도 ("60%"). — US-1

## 8. 사용 예시

```tsx
// 고정값
<Progress value={60} />

// animated
function Demo() {
  const [v, setV] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setV((n) => Math.min(100, n + 10)), 800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="space-y-2">
      <Progress value={v} />
      <p className="text-xs text-muted-foreground">{v}%</p>
    </div>
  );
}

// 단계
<Progress value={(currentStep / totalSteps) * 100} />
```

## 9. Anti-patterns

- ❌ 진행률을 모르는데 0-100 임의값으로 표시 — `Spinner` 사용.
- ❌ Progress 만 있고 숫자/메시지 없음 — 의미 모호.
- ❌ value 가 max 를 초과 — 시각 깨짐. `Math.min(value, max)` clamp.
