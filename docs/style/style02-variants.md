# Variants — 색상 매핑 (Color Chips)

각 variant 의 시각적 정의입니다. 모든 색은 shadcn 시맨틱 토큰을 사용합니다.
raw hex 색상은 이 디자인 시스템에서 **금지**입니다 (arbitrary value 최소화 원칙).

## variant 매핑 표

| Variant | Background | Text | Border | Hover | 용도 |
|---------|-----------|------|--------|-------|------|
| `default` | `bg-primary` | `text-primary-foreground` | - | `hover:bg-primary/90` | 기본 액션 (가장 강조) |
| `secondary` | `bg-secondary` | `text-secondary-foreground` | - | `hover:bg-secondary/80` | 보조 액션 |
| `destructive` | `bg-destructive` | `text-destructive-foreground` | - | `hover:bg-destructive/90` | 삭제 등 위험 액션 |
| `outline` | `bg-background` | (상속) | `border-input` | `hover:bg-accent hover:text-accent-foreground` | 약한 강조, 폼 옆 액션 |
| `ghost` | (없음) | (상속) | - | `hover:bg-accent hover:text-accent-foreground` | 매우 약한 강조, 툴바 |
| `link` | (없음) | `text-primary` | - | `hover:underline` | 텍스트 링크 |

## 시맨틱 토큰 빠른 참조

| 토큰 | 의미 |
|------|------|
| `primary` / `primary-foreground` | 주요 액션 색 / 그 위 텍스트 |
| `secondary` / `secondary-foreground` | 보조 액션 색 / 그 위 텍스트 |
| `destructive` / `destructive-foreground` | 위험/삭제 색 / 그 위 텍스트 |
| `accent` / `accent-foreground` | 강조 영역 (hover bg 등) |
| `muted` / `muted-foreground` | 흐린 영역 / 흐린 텍스트 |
| `background` / `foreground` | 페이지 배경 / 본문 텍스트 |
| `border`, `input` | 테두리, 입력 필드 테두리 |
| `ring` | 포커스 ring 색 |

토큰의 실제 색상값은 프로젝트의 Tailwind 설정 (`tailwind.config.js` / CSS 변수) 에서 정의됩니다.

## 새 variant 추가

1. 사용자에게 추천안과 함께 묻습니다 (`skill/skill02-llm-rules.md`).
2. 결정되면 위 표에 행 추가 + `style01-tailwind-rules.md` 의 cva 블록에도 반영.
3. 이미 만들어진 컴포넌트들에 영향이 있는지 확인 (각 컴포넌트가 모든 variant를 가질 필요는 없음).
