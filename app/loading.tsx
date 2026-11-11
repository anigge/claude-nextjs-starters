import { Container } from "@/components/common/container"
import { Skeleton } from "@/components/ui/skeleton"

/** 페이지 로딩 중 보여주는 기본 스켈레톤 화면 */
export default function Loading() {
  return (
    <Container className="flex flex-col gap-6 py-10" aria-busy="true" aria-live="polite">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-72" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </Container>
  )
}
