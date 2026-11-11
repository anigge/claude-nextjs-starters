"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ThemeToggle } from "@/components/common/theme-toggle"
import { UserMenu } from "@/components/common/user-menu"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { siteConfig } from "@/config/site"

/** 경로를 한글 메뉴 이름으로 바꿉니다. 목록에 없는 경로는 그대로 표시합니다. */
function getLabel(href: string, fallback: string) {
  return siteConfig.dashboardNav.find((item) => item.href === href)?.title ?? fallback
}

/** 대시보드 상단바: 사이드바 토글 + 브레드크럼 + 테마/사용자 메뉴 */
export function DashboardHeader() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  // 예: /dashboard/users → [{ href: "/dashboard", label: "개요" }, { href: "/dashboard/users", label: "사용자" }]
  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`
    return { href, label: getLabel(href, segment) }
  })

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between gap-2 border-b bg-background px-4">
      <div className="flex min-w-0 items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="min-w-0">
          <BreadcrumbList className="flex-nowrap truncate">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1
              return (
                <BreadcrumbItem key={crumb.href}>
                  {isLast ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <>
                      <BreadcrumbLink render={<Link href={crumb.href} />}>{crumb.label}</BreadcrumbLink>
                      <BreadcrumbSeparator />
                    </>
                  )}
                </BreadcrumbItem>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <UserMenu name="김사용자" email="user@example.com" />
      </div>
    </header>
  )
}
