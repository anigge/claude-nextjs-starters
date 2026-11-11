import { LayoutDashboardIcon, MoonStarIcon, ShieldCheckIcon, SmartphoneIcon, SparklesIcon, ZapIcon } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"

const features = [
  {
    title: "반응형 레이아웃",
    description: "헤더, 모바일 메뉴, 대시보드 사이드바가 화면 크기에 맞춰 바뀝니다.",
    icon: SmartphoneIcon,
  },
  {
    title: "다크모드",
    description: "라이트/다크/시스템 테마를 지원하며 새로고침해도 깜빡임 없이 유지됩니다.",
    icon: MoonStarIcon,
  },
  {
    title: "폼 검증",
    description: "React Hook Form과 Zod로 입력값을 검증하고 에러 메시지를 표시합니다.",
    icon: ShieldCheckIcon,
  },
  {
    title: "상태 관리",
    description: "Zustand로 전역 설정을 관리하고, localStorage 값은 검증된 훅으로 동기화합니다.",
    icon: ZapIcon,
  },
  {
    title: "대시보드 구성",
    description: "사이드바, 브레드크럼, 테이블, 통계 카드 등 관리자 화면 패턴을 제공합니다.",
    icon: LayoutDashboardIcon,
  },
  {
    title: "shadcn/ui 컴포넌트",
    description: "필요한 컴포넌트만 CLI로 추가해 소스를 직접 수정하며 쓸 수 있습니다.",
    icon: SparklesIcon,
  },
]

/** 랜딩 기능 소개 그리드 */
export function FeaturesSection() {
  return (
    <section className="border-t bg-muted/30 py-16 sm:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="기능"
          title="처음부터 필요한 것들을 갖추고 있습니다"
          description="직접 만들기 번거로운 기반 기능을 검증된 라이브러리로 미리 연결해 두었습니다."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
