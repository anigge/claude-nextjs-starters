import Link from "next/link"
import { LayersIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

interface LogoProps {
  className?: string
}

/** 사이트 로고(아이콘 + 사이트 이름). 클릭하면 홈으로 이동합니다. */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-semibold", className)}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <LayersIcon className="size-4" />
      </span>
      <span>{siteConfig.name}</span>
    </Link>
  )
}
