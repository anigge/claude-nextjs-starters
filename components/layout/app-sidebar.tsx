"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Logo } from "@/components/common/logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { siteConfig } from "@/config/site"

/**
 * 대시보드 사이드바. 데스크톱에서는 고정, 모바일에서는 Sheet로 자동 전환됩니다(shadcn sidebar 동작).
 */
export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Logo className="px-2 py-1" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>메뉴</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {siteConfig.dashboardNav.map((item) => {
                const Icon = item.icon
                // 개요(/dashboard)는 정확히 일치할 때만 활성화하고, 나머지는 하위 경로도 포함합니다.
                const isActive =
                  item.href === "/dashboard" ? pathname === item.href : pathname.startsWith(item.href)
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.title}
                      render={<Link href={item.href} />}
                    >
                      {Icon ? <Icon /> : null}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="px-2 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
          {siteConfig.name} v0.1.0
        </p>
      </SidebarFooter>
    </Sidebar>
  )
}
