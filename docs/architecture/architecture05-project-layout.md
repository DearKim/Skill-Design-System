# Project Layout — 빌드 셋업과 프로젝트 뼈대

`architecture02-folder-structure.md` 가 **컴포넌트 단위 폴더**를 다룬다면, 이 문서는 **프로젝트 전체의 빌드 셋업과 디렉토리**를 다룹니다.

## 최상위 디렉토리

```
Skill-Design-System/
├── docs/                     이 룰북 (디자인 시스템 정책)
├── src/
│   ├── components/           각 컴포넌트 폴더 (PascalCase)
│   ├── lib/
│   │   └── utils.ts          cn() 유틸
│   ├── styles/
│   │   └── globals.css       shadcn CSS 변수 + Tailwind layers
│   ├── App.tsx               dev 플레이그라운드 (배포 산출물 아님)
│   ├── main.tsx              dev 진입점
│   ├── index.ts              라이브러리 re-export 진입점
│   └── vite-env.d.ts
├── index.html                Vite dev 서버용
├── package.json
├── tsconfig.json             앱 코드용
├── tsconfig.node.json        vite.config.ts 용
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── components.json           shadcn CLI 설정
└── .gitignore
```

## 파일별 역할

| 파일 | 역할 | 수정이 잦은가 |
|------|------|---------------|
| `package.json` | 의존성, 스크립트 (`dev` / `build` / `preview` / `typecheck`) | 의존성 추가 시 |
| `tsconfig.json` | strict 모드, path alias `@/* → ./src/*` | 거의 없음 |
| `vite.config.ts` | React 플러그인, alias | 거의 없음 |
| `tailwind.config.js` | shadcn 시맨틱 토큰을 `colors` 로 매핑, `darkMode: 'class'` | 새 디자인 토큰 카테고리 추가 시 |
| `postcss.config.js` | Tailwind + autoprefixer | 거의 없음 |
| `components.json` | shadcn CLI 가 `add` 시 참고 (alias, css 위치, baseColor 등) | shadcn CLI 사용 시 |
| `src/styles/globals.css` | `:root` / `.dark` CSS 변수, `@tailwind` 레이어 | 색 팔레트 변경 시 |
| `src/lib/utils.ts` | `cn()` 정의 | 거의 없음 |
| `src/index.ts` | 라이브러리 진입점 | **컴포넌트 추가될 때마다 export 추가** |

## 진입점 두 개

- **`src/main.tsx` + `index.html`** — `npm run dev` 시 Vite 가 띄우는 데모 페이지. 컴포넌트를 시각적으로 확인하는 플레이그라운드.
- **`src/index.ts`** — 라이브러리로 사용할 때의 re-export 진입점. 컴포넌트가 추가되면 여기에 `export * from './components/Button';` 같은 줄을 추가합니다.

## 시맨틱 토큰 ↔ CSS 변수

`style/style02-variants.md` 가 사용하는 시맨틱 토큰 (`bg-primary`, `text-foreground` 등) 은 다음 두 파일을 통해 실제 색상이 됩니다.

1. `src/styles/globals.css` 의 `:root` 와 `.dark` 가 `--primary: 222.2 47.4% 11.2%;` 같은 HSL 컴포넌트 값을 정의.
2. `tailwind.config.js` 가 `primary: 'hsl(var(--primary))'` 형태로 그 변수를 Tailwind 컬러로 매핑.

색을 바꾸고 싶다면 `globals.css` 의 변수만 고치면 됩니다 — `tailwind.config.js` 는 보통 그대로.

## 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | Vite dev 서버 시작 (플레이그라운드) |
| `npm run build` | TS 체크 + Vite 프로덕션 빌드 |
| `npm run preview` | 빌드 산출물 로컬 미리보기 |
| `npm run typecheck` | 타입체크만 (`tsc --noEmit`) |

## shadcn CLI 사용

`components.json` 이 미리 설정되어 있으므로, shadcn 컴포넌트를 베이스로 시작할 때:

```bash
npx shadcn@latest add button
```

이 명령은 `src/components/ui/` 가 아니라 `src/components/` 에 직접 떨어집니다 (`components.json` 의 alias 설정). 본 디자인 시스템은 shadcn 컴포넌트를 **베이스**로 쓸 뿐이므로, 가져온 후 PRD 에 맞게 조정합니다.

> 주의: shadcn 기본 size 는 `default | sm | lg | icon` 입니다. 본 시스템은 `sm | md | lg` 이므로 가져온 후 변환이 필요합니다 ([`architecture03-naming.md`](./architecture03-naming.md)).

## 변경 시 주의

이 파일은 **빌드 환경 전반**을 다룹니다. 다음 변경은 영향 범위가 크므로 새 md 파일로 분리해 기록하는 편이 추적에 유리합니다.

- 빌드 도구 교체 (Vite → tsup / Rollup 등)
- Tailwind v3 → v4 마이그레이션
- 모노레포 전환
- 라이브러리 publish 빌드 도입
