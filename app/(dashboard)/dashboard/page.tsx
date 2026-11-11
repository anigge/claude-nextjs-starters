import type { Metadata } from "next"
import { ActivityIcon, DollarSignIcon, UsersIcon, ZapIcon } from "lucide-react"

import { PageHeader } from "@/components/common/page-header"
import { PreferencesForm } from "@/components/forms/preferences-form"
import { StatCard } from "@/components/dashboard/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  { title: "전체 사용자", value: "1,284", change: "지난달 대비 +12%", icon: UsersIcon },
  { title: "월 매출", value: "₩4,820,000", change: "지난달 대비 +8%", icon: DollarSignIcon },
  { title: "활성 세션", value: "342", change: "지난 1시간 기준", icon: ActivityIcon },
  { title: "API 호출", value: "98.2K", change: "오늘 기준", icon: ZapIcon },
]

export const metadata: Metadata = {
  title: "개요",
}

/** 대시보드 개요 (/dashboard) */
export default function DashboardPage() {
  return (
    <>
      <PageHeader title="개요" description="주요 지표와 최근 활동을 한눈에 확인하세요." />
      <section aria-label="주요 지표" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
            <CardDescription>예제 데이터입니다. 실제 데이터는 API로 연결하세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex justify-between gap-4">
                <span>김민준님이 프로필을 수정했습니다.</span>
                <span className="shrink-0 text-muted-foreground">5분 전</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>새 사용자 이서연님이 가입했습니다.</span>
                <span className="shrink-0 text-muted-foreground">32분 전</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>결제가 완료되었습니다. (₩39,000)</span>
                <span className="shrink-0 text-muted-foreground">2시간 전</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <PreferencesForm />
      </div>
    </>
  )
}
