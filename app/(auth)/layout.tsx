import type { ReactNode } from "react"

import { Logo } from "@/components/common/logo"

/** 인증 페이지 레이아웃: 중앙 정렬된 카드형 화면 */
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-1 flex-col items-center justify-center gap-6 bg-muted/30 p-4 sm:p-6">
      <Logo />
      <div className="w-full max-w-sm">{children}</div>
    </div>
  )
}
