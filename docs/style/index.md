# Style — 인덱스

TailwindCSS 사용 규칙, variants, sizes, states 등 **시각적 결정**을 모아둔 폴더입니다.
"코드의 형태"(네이밍, 폴더 구조, TS 인터페이스)는 [`../architecture/`](../architecture/) 에서 다룹니다.

## 파일 매핑

| 수정하고 싶은 내용 | 어떤 파일을 보면 되는가 |
|---------------------|-------------------------|
| Tailwind 사용 규칙 (`cn`, `cva`, 토큰 우선, arbitrary value 정책) | [style01-tailwind-rules.md](./style01-tailwind-rules.md) |
| variant별 색·배경·hover 매핑 (color chip 정의) | [style02-variants.md](./style02-variants.md) |
| size별 height/padding/font-size 토큰 | [style03-sizes.md](./style03-sizes.md) |
| state(hover/focus/active/disabled/loading/error) 시각 표현 | [style04-states.md](./style04-states.md) |

## 갱신 규칙

- 위 항목 중 하나의 내용을 **수정**할 때는 해당 파일을 직접 편집합니다.
- 다음과 같은 **새 내용**은 다음 번호의 새 md 파일로 추가합니다:
  - 새 디자인 토큰 카테고리(예: spacing scale, typography scale, radius scale, shadow scale)
  - 다크 모드/테마 정의
  - 모션/트랜지션 정책
  - 색상 팔레트 자체 (시맨틱 토큰을 넘어 raw palette 정의)
- 새 variant 하나를 기존 variants.md 표에 추가하는 것은 **수정**입니다.
