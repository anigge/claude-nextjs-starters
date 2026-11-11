import type { Metadata } from "next"

import { Container } from "@/components/common/container"
import { PageHeader } from "@/components/common/page-header"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "소개",
  description: "스타터킷의 구성과 사용 방법을 소개합니다.",
}

const sections = [
  {
    title: "폴더 구조",
    description: "app은 라우팅, components는 UI, config는 사이트 설정, stores는 전역 상태, lib은 유틸과 검증 스키마를 담습니다.",
  },
  {
    title: "컴포넌트 계층",
    description: "components/ui(shadcn 원자·조합) → components/common(공용) → components/layout(레이아웃) → 페이지 순으로 의존합니다.",
  },
  {
    title: "새 페이지 추가",
    description: "app 아래에 폴더를 만들고 page.tsx를 두면 됩니다. 메뉴는 config/site.ts에서 추가하세요.",
  },
]

/** 프로젝트 소개 페이지 (/about) */
export default function AboutPage() {
  return (
    <Container className="py-10">
      <PageHeader title="소개" description="스타터킷의 구성과 개발 규칙을 정리했습니다." />
      <div className="grid gap-4 md:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Container>
  )
}
