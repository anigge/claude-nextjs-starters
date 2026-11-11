import Link from "next/link"

import { Logo } from "@/components/common/logo"
import { Container } from "@/components/common/container"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"

/**
 * 현재 연도를 캐시해서 반환합니다.
 * cacheComponents 환경에서 new Date()를 prerender 중 직접 호출하면 빌드가 실패하므로 "use cache"로 감쌉니다.
 */
async function getCopyrightYear() {
  "use cache"
  return new Date().getFullYear()
}

/** 마케팅 페이지 하단 푸터. */
export async function SiteFooter() {
  const year = await getCopyrightYear()

  return (
    <footer className="mt-auto border-t bg-muted/30">
      <Container className="flex flex-col gap-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="max-w-sm text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>
          <nav aria-label="푸터 메뉴" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <Separator />
        <p className="text-xs text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
