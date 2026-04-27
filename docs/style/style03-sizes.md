# Sizes — 크기 토큰

본 디자인 시스템의 표준 사이즈는 `sm | md | lg` 3종입니다.
prop 이름과 허용 값에 대한 네이밍 규칙은 [`../architecture/architecture03-naming.md`](../architecture/architecture03-naming.md) 참고.

## size 토큰 표 (인터랙션 컴포넌트 기본값)

| Size | 높이 | 가로 padding | font-size | 비고 |
|------|------|---------------|-----------|------|
| `sm` | `h-8` | `px-3` | `text-sm` | 밀집 UI, 인라인 액션 |
| `md` | `h-10` | `px-4` | `text-sm` | **기본값** |
| `lg` | `h-12` | `px-6` | `text-base` | 메인 CTA, 대형 폼 |

## 적용 범위

- 위 토큰은 **버튼류/입력류** 같은 일반적인 인터랙션 컴포넌트의 기본 사이즈입니다.
- 비-인터랙션 요소(예: 카드, 컨테이너)는 별도 정책이 필요할 수 있습니다 — 필요해질 때 사용자에게 묻고 별도 파일(`style05-...md`)로 추가합니다.

## `xl` 추가 정책

- 기본 정책상 `xl` 은 **추가하지 않습니다**.
- 대형 CTA 등으로 명시적으로 필요해질 때만, 사용자 확인 후 위 표에 행을 추가하고 `style01-tailwind-rules.md` 의 cva 블록에도 반영합니다.

## 새 size 카테고리

icon-only 사이즈, height 가 다른 layout 사이즈 등 새로운 축이 필요해지면 이 파일을 직접 수정하기보다 별도 파일로 분리하는 편이 좋습니다 (예: `style05-icon-sizes.md`).
