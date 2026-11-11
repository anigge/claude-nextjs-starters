import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { UsersTable } from "@/components/dashboard/users-table"
import { Button } from "@/components/ui/button"
import { mockUsers } from "@/lib/mock/users"

export const metadata: Metadata = {
  title: "사용자 관리",
}

/** 사용자 관리 (/dashboard/users) */
export default function UsersPage() {
  return (
    <>
      <PageHeader
        title="사용자"
        description="팀원의 권한과 상태를 관리합니다."
        actions={<Button>사용자 추가</Button>}
      />
      <UsersTable initialUsers={mockUsers} />
    </>
  )
}
