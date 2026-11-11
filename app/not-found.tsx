import Link from "next/link"
import { SearchXIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { EmptyState } from "@/components/common/empty-state"
import { Container } from "@/components/common/container"

/** 존재하지 않는 경로(404) 화면 */
export default function NotFound() {
  return (
    <Container className="flex flex-1 items-center justify-center py-16">
      <EmptyState
        icon={SearchXIcon}
        title="페이지를 찾을 수 없습니다"
        description="주소가 바뀌었거나 삭제된 페이지일 수 있습니다."
        action={
          <Button render={<Link href="/" />}>홈으로 돌아가기</Button>
        }
      />
    </Container>
  )
}
