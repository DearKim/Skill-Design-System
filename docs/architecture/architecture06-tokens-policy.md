# Tokens Policy — 시스템 공유 vs 테마별 토큰

테마(`docs/theme/`)가 시스템에 어떤 토큰까지 채울 수 있고, 어떤 토큰은 시스템 한 곳에서만 정의해야 하는지를 정합니다.

## 분리 원칙

| 분류 | 토큰 | 정의 위치 |
|------|------|-----------|
| **테마별** (각 프로젝트가 자기 슬롯을 채움) | `--background`, `--foreground`, `--primary` / `-foreground`, `--secondary` / `-foreground`, `--accent` / `-foreground`, `--muted` / `-foreground`, `--card` / `-foreground`, `--popover` / `-foreground`, `--border`, `--input`, `--ring` | 각 테마의 `:root` (또는 [`/src/styles/globals.css`](../../src/styles/globals.css) 위에 덮어쓰기) |
| **시스템 공유** (테마는 재정의 금지) | `--destructive` / `-foreground`, `--warning` / `-foreground`, `--success` / `-foreground`, `--info` / `-foreground`, `--radius`, `--font-sans` | [`/src/styles/globals.css`](../../src/styles/globals.css) 의 `:root` 한 곳 |

이유:

- **알림 4종 (`destructive` / `warning` / `success` / `info`)**: 의미(위험/주의/성공/안내)가 디자인 일관성의 핵심. 테마마다 헥스가 달라지면 컴포넌트 안에서 의미가 흔들림. shadcn 호환을 위해 위험·삭제 토큰의 이름은 `destructive` 를 유지하되 의미 분류는 "danger" 로 문서화 (4개 알림 셋 = `destructive(=danger) / warning / success / info`).
- **`--radius`**: 둥글기는 사용처(작은 칩 vs 큰 카드)에 따라 달라지지 자기 프로젝트라고 더 둥글게 갈 이유는 약함. 시스템 단일 값(`0.625rem`)을 정하고 파생(`-sm`, `-md`, `-lg`)도 시스템에서 일괄 도출.
- **`--font-sans`**: 한국어 본문 친화 단일 폰트(`Pretendard Variable` → `Pretendard` → `Apple SD Gothic Neo` → `system-ui` 폴백)로 통일. 테마마다 다르게 가면 영문 자형이 흩어짐.

## 다크모드 정책

현재 시스템은 **light 단일 모드** 입니다.

- [`/src/styles/globals.css`](../../src/styles/globals.css) 에 `.dark` 블록을 두지 않습니다.
- [`tailwind.config.js`](../../tailwind.config.js) 의 `darkMode: ['class']` 는 유지 — 향후 다크 지원 제품이 등장할 때 시스템 차원에서 `.dark` 블록을 추가하기 위한 자리.
- 테마는 자체 `.dark` 블록을 추가하지 않습니다. 필요해지면 본 문서 갱신 후 시스템 차원에서 한 번에 추가합니다.

## 사이즈 props 정책

`size: 'sm' | 'md' | 'lg'` 는 모든 테마가 동일 인터페이스를 노출합니다.
"어디에 어떤 size 를 쓸지" 의 적용 정책은 테마별로 다를 수 있으며 (모바일 우선 테마는 1차 CTA `lg` 강제 등 — [`../style/style03-sizes.md`](../style/style03-sizes.md)), 이는 **props 자체를 바꾸는 것이 아니라 사용 가이드** 차원입니다.

## 테마가 시스템 공유 토큰을 바꾸고 싶을 때

1. [`../skill/skill02-llm-rules.md`](../skill/skill02-llm-rules.md) 의 "새 규칙 추가 절차" 를 따름.
2. 시스템 [`../style/style02-variants.md`](../style/style02-variants.md) 의 "시맨틱 토큰 빠른 참조" 표 + [`tailwind.config.js`](../../tailwind.config.js) + [`/src/styles/globals.css`](../../src/styles/globals.css) 갱신.
3. 본 문서 `분리 원칙` 표를 갱신.
4. 모든 테마 PRD 가 영향 받는지 확인.

테마별로 자기 컨텍스트에서만 다르게 쓰고 싶다면 — 토큰을 바꾸지 말고 **컴포넌트 prop** 으로 표현해야 합니다 (예: `Button variant="warning"` 사용처를 테마 §4 에서 제한).
