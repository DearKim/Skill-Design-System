# States — 상태 정의

다음 이름으로 통일합니다. 각 컴포넌트가 **모든 상태를 가질 필요는 없습니다** — PRD 6번 섹션에 해당 컴포넌트의 상태만 정의합니다.

## 표준 상태

| State | 의미 | Tailwind / 처리 방식 | 비고 |
|-------|------|-----------------------|------|
| `default` | 평상시 | (없음) | 기본 스타일 |
| `hover` | 마우스 오버 | `hover:` | |
| `focus-visible` | 키보드 포커스 | `focus-visible:` | `focus-visible:ring-2 focus-visible:ring-ring` 권장 |
| `active` | 눌리는 중 | `active:` | `active:scale-[0.98]` 등 (선택) |
| `disabled` | 비활성 | `disabled:` | `opacity-50`, `pointer-events-none` |
| `loading` | 비동기 진행 중 | (직접 처리) | 스피너 + disabled 외관, `aria-busy="true"` |
| `error` | 입력 오류 | `aria-invalid:` 또는 직접 처리 | `aria-invalid="true"` 유발 |
| `selected` | 선택·활성 토글 | `data-[state=selected]:` 또는 prop | 칩, 탭, 활성 nav. ARIA: `aria-pressed` (토글) / `aria-selected` (리스트·탭) |
| `motion-reduced` | `prefers-reduced-motion: reduce` 매칭 | 미디어쿼리 / `useReducedMotion()` 훅 | 모션 컴포넌트 전체가 따라야 할 시스템 정책. 자세한 가드는 모션 유틸 참고. |
| `consent-pending` | 도메인 동의 미수락 | localStorage / 컨텍스트 검사 | **도메인 한정** — 의료법 동의 게이트 등. 일반 컴포넌트는 사용 안 함. |
| `beta` | Beta 라벨 노출 컨텍스트 | prop / Badge | **도메인 한정** — 정식 추천이 아닌 보조 기능 표시. 사실상 라벨에 가깝지만 상태로 통일. |

> **정책**: 시스템 표준에 모두 등재되어 있어도 각 컴포넌트는 해당 상태가 필요할 때만 구현합니다. 도메인 한정(`consent-pending`, `beta`)은 시스템에 정의만 두고, 일반 컴포넌트 PRD 의 상태 표에는 옮기지 않습니다.

## 접근성 연계

- `disabled` 시: HTML `disabled` 가 가능하면 그것을 사용. 안 되면 `aria-disabled`.
- `loading` 시: `aria-busy="true"`.
- `error` 시: `aria-invalid="true"` + 가능하면 `aria-describedby` 로 에러 메시지 연결.
- `selected` 시: 컴포넌트 시맨틱에 따라 `aria-pressed` (토글 버튼) 또는 `aria-selected` (리스트/탭/그리드 항목).
- `motion-reduced` 시: 모션을 비활성화하거나 매우 짧은 transition 으로 대체 (페이드 OK, 큰 이동·스케일 NO).

자세한 접근성 기본 요구는 [`../prd/prd01-template.md`](../prd/prd01-template.md) 의 7번 섹션 참고.

## 시각 표준 (참고값)

| State | 권장 시각 표현 | 비고 |
|-------|-----------------|------|
| `selected` | `bg-primary/10 border-primary text-primary` | 어떤 테마의 `--primary` 든 자동 적응 |
| `motion-reduced` | 진입/이동 애니메이션 0ms 또는 opacity-only | "삭제" 가 아니라 "약화" 가 기본 |

## 상태 추가

새 상태가 필요해지면 [`../skill/skill02-llm-rules.md`](../skill/skill02-llm-rules.md) 의 "새 규칙 추가 절차" 를 따라 사용자 확인 후 이 파일을 갱신합니다. 이미 만들어진 PRD/컴포넌트에 영향이 없는지 확인합니다.
