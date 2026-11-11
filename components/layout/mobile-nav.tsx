"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/common/logo"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

/** 모바일 전용 메뉴. 작은 화면에서 우측 Sheet로 메뉴를 펼칩니다. */
export function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="md:hidden" aria-label="메뉴 열기" />}
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="sr-only">모바일 내비게이션 메뉴</SheetDescription>
        </SheetHeader>
        <nav aria-label="모바일 메뉴" className="flex flex-col gap-1 px-4">
          {siteConfig.mainNav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent",
                  isActive ? "bg-accent text-foreground" : "text-muted-foreground"
                )}
              >
                {Icon ? <Icon className="size-4" /> : null}
                {item.title}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
