# PRD 작성 체크리스트

PRD 작성 후 다음을 확인합니다. 모두 통과해야 워크플로우 4단계(구현)로 진행할 수 있습니다.

## 검증 항목

- [ ] **1번 개요** — 한 줄로 요약 가능한가
- [ ] **2번 유저스토리** — 모든 props/variants/states/접근성의 근거가 되는가 ([`../user-story/user-story01-writing-guide.md`](../user-story/user-story01-writing-guide.md) 형식 준수)
- [ ] **3번 Props 네이밍** — `architecture/architecture03-naming.md` 를 따르는가 (size: sm/md/lg, variant 등)
- [ ] **3번 Props 출처** — 표의 모든 행에 출처 US 번호가 있는가 (공통 prop 인 className 제외)
- [ ] **4번 Variants** — Tailwind/shadcn 시맨틱 토큰으로 명시되었는가 (raw hex 없음)
- [ ] **5번 Sizes** — 표준 토큰(`style/style03-sizes.md`) 과 일치하는가, 다르다면 그 이유가 명시되었는가
- [ ] **6번 States** — 컴포넌트 특성에 맞게 정의되었는가 (불필요한 state 없는가, 누락된 state 없는가)
- [ ] **7번 접근성** — 유저스토리에서 도출 가능한가, 출처 US 번호가 있는가
- [ ] **8번 사용 예시** — 실제 동작 가능한 코드인가
- [ ] **9번 Anti-patterns** — 임의 해석 가능 지점을 막는가
- [ ] **카탈로그 등록** — `prd/index.md` 의 "작성된 컴포넌트 PRD 카탈로그" 표에 한 줄 추가했는가

## 통과 후

1. `prd/index.md` 카탈로그 표에 행 추가 (컴포넌트명, 파일 링크, 작성일, 비고).
2. 워크플로우 4단계: shadcn/ui 패턴으로 구현 (`skill/skill01-workflow.md` 4번).
