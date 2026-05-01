# Folder Structure

## 컴포넌트 폴더

각 컴포넌트는 단일 폴더로 관리합니다.

```
src/components/Button/
├── Button.tsx              # 구현
├── Button.prd.md           # PRD 사본 (선택, 아래 정책 참고)
├── index.ts                # export
└── Button.stories.tsx      # (선택) Storybook
```

## PRD 파일 위치 정책

PRD는 두 곳에 존재할 수 있습니다.

| 위치 | 역할 | 비고 |
|------|------|------|
| `docs/prd/prdNN-[ComponentName].md` | **카탈로그용 SSOT** | 디자인 시스템 전체에서 어떤 컴포넌트가 있는지 한눈에 추적 |
| `src/components/[Name]/[Name].prd.md` | 코드와 동거하는 사본 (선택) | 실 작업 시 코드 옆에 두면 편함 |

**원칙**: 두 파일이 모두 존재할 경우, `docs/prd/` 의 것을 정답으로 합니다. 둘이 어긋나면 `docs/prd/` 를 따라 동기화합니다.

(처음에 한 곳만 두는 것이 운영하기 단순합니다 — `docs/prd/` 만 두는 것을 기본 권장.)

## docs 폴더

이 디자인 시스템 자체의 룰북. 자세한 분류는 [`../index.md`](../index.md) 의 "폴더 가이드" 표 참고.

## 새 폴더가 필요해질 때

테스트, 토큰 정의 파일, 빌드 산출물 등 새 최상위 폴더가 필요할 때는 `skill/skill02-llm-rules.md` 의 "새 규칙 추가 절차" 를 따릅니다. 결정이 끝나면 이 파일을 수정하거나 `architecture05-[설명].md` 같은 새 파일을 만듭니다.
