import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { PreferencesForm } from "@/components/forms/preferences-form"

export const metadata: Metadata = {
  title: "설정",
}

/** 설정 페이지 (/dashboard/settings) */
export default function SettingsPage() {
  return (
    <>
      <PageHeader title="설정" description="화면과 계정 관련 설정을 변경합니다." />
      <div className="max-w-2xl">
        <PreferencesForm />
      </div>
    </>
  )
}
