import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/common/container"

const techStack = ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zustand"]

/** 랜딩 히어로 영역: 한 줄 소개 + CTA + 기술 스택 배지 */
export function HeroSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col items-center gap-8 text-center">
        <div className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            빠르게 시작하는 <span className="text-primary">웹 개발 스타터킷</span>
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            레이아웃, 다크모드, 폼 검증, 상태 관리가 이미 준비되어 있어
            <br className="hidden sm:inline" /> 필요한 기능만 골라 바로 개발할 수 있습니다.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" render={<Link href="/dashboard" />}>
            대시보드 보기
            <ArrowRightIcon />
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/about" />}>
            프로젝트 소개
          </Button>
        </div>
        <ul className="flex flex-wrap justify-center gap-2" aria-label="사용 기술">
          {techStack.map((tech) => (
            <li key={tech}>
              <Badge variant="secondary">{tech}</Badge>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
