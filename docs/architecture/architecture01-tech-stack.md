# Tech Stack

## 사용 기술

- **React** — UI 라이브러리
- **TypeScript** — 정적 타입
- **TailwindCSS** — 스타일 (유틸리티 우선)
- **shadcn/ui** — 헤드리스 + 스타일 베이스
- **class-variance-authority (`cva`)** — variant/size 조합 처리
- **`cn()` 유틸** (shadcn `lib/utils`) — `clsx` + `tailwind-merge` 합성
- **`@radix-ui/react-slot`** — `asChild` 패턴 지원
- **`tailwindcss-animate`** — shadcn 애니메이션 토큰 플러그인
- **Vite** — dev 서버 / 빌드 도구

## 버전 가정

별도 명시 전까지 다음을 가정합니다. 실제 프로젝트의 `package.json` 과 어긋날 경우 사용자에게 확인합니다.

| 도구 | 가정 버전 | 비고 |
|------|-----------|------|
| React | 18+ | `forwardRef` / Server Components 미사용 가정 |
| TypeScript | 5+ | |
| TailwindCSS | v3 | shadcn 기본 토큰 호환. v4 사용 시 별도 결정 필요. |
| Vite | 5+ | dev / build |
| Node | 20+ | `@types/node` 기준 |

실제 의존성 버전은 [`/package.json`](../../package.json) 이 정답입니다 — 위 표와 어긋날 경우 package.json 을 따릅니다.

## 새 도구를 추가하려면

`skill/skill02-llm-rules.md` 의 "새 규칙 추가 절차" 를 따릅니다. 이 파일을 직접 수정하기보다는, **다른 도구 카테고리(예: 테스트, 빌드)를 도입한다면** `architecture05-[도구명].md` 같은 별도 파일을 만드는 편이 깔끔합니다.
