"use client"

import { useEffect } from "react"

import { Container } from "@/components/common/container"
import { ErrorState } from "@/components/common/error-state"

/**
 * 페이지 렌더링 중 발생한 오류 화면.
 * reset을 호출하면 해당 영역을 다시 렌더링합니다.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 운영 환경에서는 여기서 에러 모니터링 서비스로 보내세요.
    console.error(error)
  }, [error])

  return (
    <Container className="flex flex-1 items-center justify-center py-16">
      <ErrorState onRetry={reset} />
    </Container>
  )
}
