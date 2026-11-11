import type { LucideIcon } from "lucide-react"
import {
  BarChart3Icon,
  HomeIcon,
  InfoIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

/** 내비게이션 항목 타입 */
export interface NavItem {
  title: string
  href: string
  icon?: LucideIcon
  description?: string
}

/**
 * 사이트 전역 설정.
 * 사이트 이름, 설명, 메뉴를 이 파일에서만 수정하면 헤더/푸터/사이드바에 모두 반영됩니다.
 */
export const siteConfig = {
  name: "Starter Kit",
  description:
    "Next.js 15/16 App Router, Tailwind CSS, shadcn/ui 기반의 빠른 웹 개발 스타터킷",
  /** 마케팅(공개) 사이트 상단 메뉴 */
  mainNav: [
    { title: "홈", href: "/", icon: HomeIcon },
    { title: "소개", href: "/about", icon: InfoIcon },
    { title: "대시보드", href: "/dashboard", icon: LayoutDashboardIcon },
  ] satisfies NavItem[],
  /** 대시보드 사이드바 메뉴 */
  dashboardNav: [
    { title: "개요", href: "/dashboard", icon: BarChart3Icon },
    { title: "사용자", href: "/dashboard/users", icon: UsersIcon },
    { title: "설정", href: "/dashboard/settings", icon: SettingsIcon },
  ] satisfies NavItem[],
} as const
