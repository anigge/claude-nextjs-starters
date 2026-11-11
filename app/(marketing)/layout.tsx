import type { ReactNode } from "react"

import { AnnouncementBanner } from "@/components/common/announcement-banner"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

/** 마케팅(공개) 페이지 레이아웃: 공지 배너 + 헤더 + 본문 + 푸터 */
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AnnouncementBanner storageKey="announcement-v0.1">
        스타터킷 v0.1이 공개되었습니다. 대시보드 예제를 확인해 보세요.
      </AnnouncementBanner>
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </>
  )
}
