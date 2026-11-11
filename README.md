# Starter Kit

Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui 기반의 웹 개발 스타터킷입니다.
레이아웃, 다크모드, 폼 검증, 전역 상태, 반응형 대시보드를 미리 연결해 두었으니 필요한 기능부터 바로 개발하세요.

## 실행

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run lint     # ESLint 검사
npx tsc --noEmit # 타입 검사
```

## 폴더 구조

```
app/
  (marketing)/   공개 페이지 레이아웃 (헤더 + 푸터 + 공지 배너): /, /about
  (dashboard)/   관리자 레이아웃 (사이드바 + 상단바): /dashboard, /dashboard/users, /dashboard/settings
  (auth)/        인증 레이아웃 (중앙 카드): /login, /signup
  layout.tsx     루트 레이아웃 (폰트, 테마, 토스트, 툴팁 프로바이더)
  not-found.tsx  404 화면
  error.tsx      오류 화면
  loading.tsx    로딩 스켈레톤
components/
  ui/            shadcn/ui 컴포넌트 (CLI로 추가, 직접 수정 최소화)
  common/        프로젝트 공용 컴포넌트 (도메인 무관)
  layout/        헤더, 푸터, 사이드바, 모바일 메뉴 등 레이아웃 조각
  marketing/     랜딩 페이지 섹션
  dashboard/     대시보드 전용 컴포넌트
  forms/         폼 예제 (로그인, 회원가입, 설정)
  providers/     테마 프로바이더 등 전역 컨텍스트
config/
  site.ts        사이트 이름, 설명, 메뉴 설정 (메뉴는 여기서만 수정)
hooks/           shadcn 사이드바가 쓰는 use-mobile 래퍼
lib/
  utils.ts       cn() 클래스 병합 유틸
  validations/   Zod 검증 스키마
  mock/          예제 데이터
stores/          Zustand 전역 상태
```

## 컴포넌트 계층

아래 계층은 위 계층을 몰라야 합니다(단방향 의존).

| 계층 | 위치 | 예시 |
|---|---|---|
| L0 Foundation | `lib/utils.ts`, `config/site.ts`, providers | `cn`, `siteConfig`, `ThemeProvider` |
| L1 Primitives | `components/ui/` | `Button`, `Input`, `Badge` |
| L2 Composites | `components/ui/` | `Card`, `Sheet`, `Sidebar`, `Field` |
| L3 Common | `components/common/` | `Logo`, `ThemeToggle`, `PageHeader`, `ConfirmDialog` |
| L4 Layout | `components/layout/` | `SiteHeader`, `AppSidebar`, `DashboardHeader` |
| L5 Feature/Page | `app/`, `components/forms|marketing|dashboard` | 랜딩, 대시보드, 로그인 |

## 자주 하는 작업

### shadcn 컴포넌트 추가

```bash
npx shadcn@latest add <컴포넌트명>
```

이 프로젝트는 base-nova 스타일(Base UI 기반)입니다. 트리거에 `asChild` 대신 `render` prop을 씁니다.

```tsx
<DropdownMenuTrigger render={<Button variant="ghost" />}>메뉴</DropdownMenuTrigger>
```

> `npx shadcn add`는 기존 파일을 덮어쓸 수 있습니다. 수정한 `components/ui/*` 파일이 있으면 먼저 백업하세요.

### 메뉴 추가

`config/site.ts`의 `mainNav`(상단 메뉴)나 `dashboardNav`(사이드바)에 항목을 추가하면 헤더, 푸터, 사이드바, 모바일 메뉴에 자동 반영됩니다.

### 새 페이지 추가

`app/(dashboard)/dashboard/reports/page.tsx`처럼 폴더와 `page.tsx`를 만들면 됩니다. 레이아웃은 가까운 라우트 그룹의 `layout.tsx`가 적용합니다.

### 테마 색상 변경

`app/globals.css`의 `:root`(라이트)와 `.dark`(다크) 변수를 수정합니다. 값은 oklch 형식입니다.

### 폼 만들기

React Hook Form + Zod + shadcn `Field` 조합을 씁니다. 예제는 `components/forms/login-form.tsx`를 참고하세요.

1. `lib/validations/`에 Zod 스키마를 만들고 `z.infer`로 타입을 얻습니다.
2. `useForm`에 `zodResolver(schema)`를 넘깁니다.
3. 각 필드를 `Controller`로 감싸고 `FieldError`로 에러를 표시합니다.

### 전역 상태 추가

`stores/`에 Zustand 스토어를 만들고 컴포넌트에서 선택자로 구독합니다.

```ts
const compactMode = usePreferencesStore((state) => state.compactMode)
```

## 사용 라이브러리

직접 구현하지 않고 검증된 라이브러리를 사용합니다.

| 목적 | 라이브러리 |
|---|---|
| 클래스 병합 | `clsx`, `tailwind-merge` |
| 다크모드 | `next-themes` |
| 미디어 쿼리 훅 | `usehooks-ts` (`useMediaQuery`, `useIsClient`) |
| localStorage 훅 | `use-local-storage-state` |
| 폼 / 검증 | `react-hook-form`, `zod`, `@hookform/resolvers` |
| 전역 상태 | `zustand` |
| 토스트 | `sonner` (shadcn 컴포넌트) |
| 아이콘 | `lucide-react` |

### 필요할 때 추가하면 좋은 라이브러리

스타터에는 포함하지 않았습니다. 필요해지면 설치하세요.

- 데이터 테이블: `@tanstack/react-table` (shadcn `data-table` 예제와 함께 사용)
- 날짜: `react-day-picker`, `date-fns`
- 서버 데이터 캐싱: `@tanstack/react-query` (클라이언트에서 API 상태를 관리할 때)

## 참고

- 이 프로젝트는 `cacheComponents`를 켜 두었습니다. 요청 시점 값(`new Date()`, `cookies()` 등)은 `"use cache"`를 쓰거나 `Suspense` 안에서 접근하세요. 푸터의 연도 표시가 예시입니다.
- Next.js 16 기준입니다. 문서는 `node_modules/next/dist/docs/`를 참고하세요.
