# PRD — 인덱스

**컴포넌트 단위** PRD 템플릿, 체크리스트, 그리고 작성된 컴포넌트 PRD 카탈로그를 모아둔 폴더입니다.
프로젝트 단위 **Theme** PRD 는 별도 폴더([`../theme/`](../theme/)) 에서 관리합니다.

이 폴더는 두 가지 역할을 합니다.
1. 컴포넌트 PRD를 어떻게 작성할지 알려주는 **시스템 문서** (`prd01-template.md`, `prd02-checklist.md`).
2. 워크플로우 결과로 만들어진 **각 컴포넌트의 PRD 기록** (`prd03` 부터 누적).

## 시스템 문서

| 수정하고 싶은 내용 | 어떤 파일을 보면 되는가 |
|---------------------|-------------------------|
| PRD 9개 섹션의 구조와 작성 원칙 | [prd01-template.md](./prd01-template.md) |
| PRD 작성 후 검증 체크리스트 | [prd02-checklist.md](./prd02-checklist.md) |

## 작성된 컴포넌트 PRD 카탈로그

워크플로우의 3단계(PRD 작성)를 통과한 컴포넌트의 PRD 가 여기에 누적됩니다.
각 컴포넌트 PRD 는 `prdNN-[component].md` 형식으로 다음 번호를 부여합니다 (다음 번호: `prd25`).

카탈로그 그룹은 [`/src/playground/`](../../src/playground/) 의 좌측 nav 와 동일한 분류를 따릅니다.

### Foundation
| 컴포넌트 | PRD 파일 | 작성일 | 비고 |
|----------|----------|--------|------|
| Typography | [prd03-typography.md](./prd03-typography.md) | 2026-05-01 | 자체 (Display/Heading/Text/Lead/Muted/InlineCode/List/Blockquote) |

### Action
| 컴포넌트 | PRD 파일 | 작성일 | 비고 |
|----------|----------|--------|------|
| Button | [prd04-button.md](./prd04-button.md) | 2026-05-01 | shadcn 베이스 — 11 variant |
| Badge | [prd05-badge.md](./prd05-badge.md) | 2026-05-01 | shadcn 베이스 — 7 variant |
| Link | [prd06-link.md](./prd06-link.md) | 2026-05-01 | 자체 — external + asChild |

### Form
| 컴포넌트 | PRD 파일 | 작성일 | 비고 |
|----------|----------|--------|------|
| Input | [prd07-input.md](./prd07-input.md) | 2026-05-01 | shadcn 베이스 — sm/md/lg |
| Select | [prd08-select.md](./prd08-select.md) | 2026-05-01 | Radix Select |
| Checkbox | [prd09-checkbox.md](./prd09-checkbox.md) | 2026-05-01 | Radix Checkbox |
| Switch | [prd10-switch.md](./prd10-switch.md) | 2026-05-01 | Radix Switch |
| Label | [prd11-label.md](./prd11-label.md) | 2026-05-01 | Radix Label |

### Layout
| 컴포넌트 | PRD 파일 | 작성일 | 비고 |
|----------|----------|--------|------|
| Card | [prd12-card.md](./prd12-card.md) | 2026-05-01 | shadcn 베이스 — compound |
| Separator | [prd13-separator.md](./prd13-separator.md) | 2026-05-01 | Radix Separator |

### Navigation
| 컴포넌트 | PRD 파일 | 작성일 | 비고 |
|----------|----------|--------|------|
| Tabs | [prd14-tabs.md](./prd14-tabs.md) | 2026-05-01 | Radix Tabs |

### Data Display
| 컴포넌트 | PRD 파일 | 작성일 | 비고 |
|----------|----------|--------|------|
| Avatar | [prd15-avatar.md](./prd15-avatar.md) | 2026-05-01 | Radix Avatar |
| Kbd | [prd16-kbd.md](./prd16-kbd.md) | 2026-05-01 | 자체 |

### Overlay
| 컴포넌트 | PRD 파일 | 작성일 | 비고 |
|----------|----------|--------|------|
| Dialog (Modal) | [prd17-dialog.md](./prd17-dialog.md) | 2026-05-01 | Radix Dialog |
| Sheet (Drawer) | [prd18-sheet.md](./prd18-sheet.md) | 2026-05-01 | Radix Dialog 재사용 — 4 side |
| Tooltip | [prd19-tooltip.md](./prd19-tooltip.md) | 2026-05-01 | Radix Tooltip |

### Feedback
| 컴포넌트 | PRD 파일 | 작성일 | 비고 |
|----------|----------|--------|------|
| Alert | [prd20-alert.md](./prd20-alert.md) | 2026-05-01 | 자체 — 알림 5 variant, LegalNotice 베이스 |
| Toast | [prd21-toast.md](./prd21-toast.md) | 2026-05-01 | Radix Toast |
| Progress | [prd22-progress.md](./prd22-progress.md) | 2026-05-01 | Radix Progress |
| Spinner | [prd23-spinner.md](./prd23-spinner.md) | 2026-05-01 | 자체 — currentColor + size |
| Skeleton | [prd24-skeleton.md](./prd24-skeleton.md) | 2026-05-01 | 자체 — animate-pulse |

<!--
새 컴포넌트 PRD를 추가할 때:
1. `prd01-template.md` 를 복사해 `prdNN-[component].md` 로 저장 (NN은 다음 번호)
2. 위 카탈로그 표 (해당 그룹) 에 한 줄 추가
3. 6단계 카탈로그 등록도 함께 (`/src/playground/sections/<Name>Section.tsx` + App.tsx + nav)
4. Theme PRD 는 ../theme/ 에서 별도 시퀀스(theme02~) 로 관리
참고: docs/skill/skill03-catalog.md
-->

## 갱신 규칙

- **시스템 문서 수정** (템플릿/체크리스트 변경): 해당 파일 직접 편집.
- **컴포넌트 PRD 추가**: 다음 번호로 새 md 파일 생성 + 위 카탈로그 표에 한 줄 추가.
- **컴포넌트 PRD 수정**: 해당 컴포넌트 파일 직접 편집 (번호와 파일명 유지).
- **PRD 시스템 자체에 새 카테고리 추가** (예: 변경 이력 정책, 마이그레이션 가이드): 다음 시스템 문서 번호(`prd03`이 컴포넌트로 쓰이기 시작했다면 다음 비어있는 번호) 또는 별도 폴더 생성을 사용자와 합의.
