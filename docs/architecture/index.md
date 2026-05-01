# Architecture — 인덱스

기술 스택, 폴더/파일/Props 네이밍, TypeScript 규칙 등 **프로젝트 뼈대** 결정을 모아둔 폴더입니다.
"코드의 형태"를 다루며, "보이는 것"(색·크기·variant)은 [`../style/`](../style/) 에서 다룹니다.

## 파일 매핑

| 수정하고 싶은 내용 | 어떤 파일을 보면 되는가 |
|---------------------|-------------------------|
| 기술 스택 (React/TypeScript/Tailwind/shadcn 등) | [architecture01-tech-stack.md](./architecture01-tech-stack.md) |
| 컴포넌트 폴더 구조, PRD 파일 위치 정책 | [architecture02-folder-structure.md](./architecture02-folder-structure.md) |
| Props 네이밍 + 파일/폴더 네이밍 규칙 | [architecture03-naming.md](./architecture03-naming.md) |
| TypeScript 규칙 (interface, VariantProps, forwardRef 등) | [architecture04-typescript.md](./architecture04-typescript.md) |
| 프로젝트 빌드 셋업, 최상위 디렉토리, 시맨틱 토큰 매핑 | [architecture05-project-layout.md](./architecture05-project-layout.md) |
| 시스템 공유 vs 테마별 토큰 분리, 다크모드 정책, 사이즈 props 정책 | [architecture06-tokens-policy.md](./architecture06-tokens-policy.md) |

## 갱신 규칙

- 위 항목 중 하나의 내용을 **수정**할 때는 해당 파일을 직접 편집합니다.
- 새로운 아키텍처 결정(예: 라우팅 정책, 테스트 프레임워크 도입, 모노레포 전환 등)을 **추가**할 때는 `architecture06-[설명].md` 처럼 다음 번호로 파일을 만들고, 위 표에 한 줄 추가합니다.
- 의존성이 많은 큰 변경(예: 스택 교체)은 별도 파일로 분리하는 편이 추적에 유리합니다.
