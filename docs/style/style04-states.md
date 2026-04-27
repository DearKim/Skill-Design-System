# States — 상태 정의

다음 이름으로 통일합니다. 각 컴포넌트가 **모든 상태를 가질 필요는 없습니다** — PRD 6번 섹션에 해당 컴포넌트의 상태만 정의합니다.

## 표준 상태

| State | 의미 | Tailwind prefix | 비고 |
|-------|------|-----------------|------|
| `default` | 평상시 | (없음) | 기본 스타일 |
| `hover` | 마우스 오버 | `hover:` | |
| `focus-visible` | 키보드 포커스 | `focus-visible:` | `focus-visible:ring-2 focus-visible:ring-ring` 권장 |
| `active` | 눌리는 중 | `active:` | `active:scale-[0.98]` 등 (선택) |
| `disabled` | 비활성 | `disabled:` | `opacity-50`, `pointer-events-none` |
| `loading` | 비동기 진행 중 | (직접 처리) | 스피너 + disabled 외관, `aria-busy` |
| `error` | 입력 오류 | `aria-invalid:` 또는 직접 처리 | `aria-invalid="true"` 유발 |

## 접근성 연계

- `disabled` 시: HTML `disabled` 가 가능하면 그것을 사용. 안 되면 `aria-disabled`.
- `loading` 시: `aria-busy="true"`.
- `error` 시: `aria-invalid="true"` + 가능하면 `aria-describedby` 로 에러 메시지 연결.

자세한 접근성 기본 요구는 [`../prd/prd01-template.md`](../prd/prd01-template.md) 의 7번 섹션 참고.

## 상태 추가

새 상태(예: `selected`, `expanded`)가 필요해지면 이 파일을 직접 수정합니다. 단, 이미 만들어진 PRD/컴포넌트에 영향이 없는지 확인합니다.
