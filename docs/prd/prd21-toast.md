# Toast PRD

## 1. 컴포넌트 개요

- **이름**: `Toast` (compound: Provider / Viewport / Title / Description / Action / Close)
- **목적**: 우측 하단(또는 화면 한쪽) 일시 알림. 저장 완료, 매칭 성사, 매칭 취소 등.
- **유사/관련 컴포넌트**: `Alert`(인라인 영구 배너), `Dialog`(모달 알림).
- **shadcn 베이스 여부**: 예 — Radix Toast.

## 2. 유저스토리

- **US-1**: As a 사용자, I want 비동기 작업 완료를 화면 흐름을 깨지 않고 알고 싶다, so that 작업이 끊기지 않는다.
- **US-2**: As a 매칭 취소 사용자, I want "되돌리기" 같은 액션을 알림에서 바로 누르고 싶다.
- **US-3**: As a 키보드 사용자, I want 알림에도 포커스 가능한 닫기/액션 버튼이 있길 원한다.

## 3. Props

### `ToastProvider` (App 루트)
| Name | Type | Default | Description |
|------|------|---------|-------------|
| duration | `number` | `5000` | 자동 닫힘 ms |
| swipeDirection | `'right' \| 'left' \| 'up' \| 'down'` | `'right'` | 스와이프 방향 |

### `ToastViewport` — 위치 컨테이너 (App 루트에 한 번)

### `Toast` (root)
| Name | Type | Default | Description | 출처 |
|------|------|---------|-------------|------|
| variant | `'default' \| 'destructive' \| 'success' \| 'warning' \| 'info'` | `'default'` | 시각 변형 | US-1 |
| open / onOpenChange | `boolean` / `(o) => void` | - | controlled (큐 관리 시 필수) | US-1 |
| duration | `number` | (Provider) | 개별 자동 닫힘 | (공통) |

### `ToastAction`
| Name | Type | Required | Description |
|------|------|----------|-------------|
| altText | `string` | Yes | SR 라벨 (필수, Radix 강제) |

## 4. Variants

5종 — `default / destructive / success / warning / info`. 알림 4 토큰 활용.

## 5. Sizes

단일 (`p-4 pr-8`). Viewport 가 `max-w-[420px]`.

## 6. States

- 열기/닫기 애니메이션 (slide-in-from-bottom, swipe out)
- 스와이프 데이터 속성 (`data-[swipe=move]` 등)

## 7. 접근성

- **ARIA**: `role="status"` (default) 또는 `role="alert"` (destructive). Radix 가 처리.
- **포커스**: 알림 안 인터랙티브 요소 (Action / Close) 키보드 접근 가능. — US-3
- **altText**: `ToastAction.altText` 필수 — SR 가 액션 의미를 음성으로 안내. — US-2

## 8. 사용 예시

```tsx
// App 루트 (한 번만)
<ToastProvider>
  <App />
  <ToastViewport />
</ToastProvider>

// 큐 패턴
function useToastQueue() {
  const [toasts, setToasts] = useState([]);
  const push = (t) => setToasts((p) => [...p, { ...t, id: Date.now() }]);
  return { toasts, push, setToasts };
}

// 사용
const { toasts, push, setToasts } = useToastQueue();
<Button onClick={() => push({ variant: 'success', title: '저장됨' })}>저장</Button>
{toasts.map((t) => (
  <Toast key={t.id} variant={t.variant}
    onOpenChange={(o) => !o && setToasts((p) => p.filter((x) => x.id !== t.id))}>
    <ToastTitle>{t.title}</ToastTitle>
    <ToastClose />
  </Toast>
))}
```

## 9. Anti-patterns

- ❌ Toast 로 중요한 결정을 요구 — 자동 닫힘이라 놓칠 수 있음. Dialog 사용.
- ❌ 동시에 5개 이상 Toast 누적 — Viewport 가 가려짐. 큐 길이 제한 또는 collapse.
- ❌ `ToastAction` 의 `altText` 누락 — Radix 가 런타임 에러.
- ❌ ToastProvider/Viewport 누락 — 동작 안 함.
