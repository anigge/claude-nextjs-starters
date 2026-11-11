"use client"

import { AlertCircleIcon, RotateCcwIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface ErrorStateProps {
  title?: string
  description?: string
  /** 전달되면 "다시 시도" 버튼을 보여줍니다. */
  onRetry?: () => void
}

/** 오류 발생 시 안내하는 상태 화면. error.tsx 등에서 재사용합니다. */
export function ErrorState({
  title = "문제가 발생했습니다",
  description = "잠시 후 다시 시도해 주세요.",
  onRetry,
}: ErrorStateProps) {
  return (
    <Alert variant="destructive" className="max-w-xl">
      <AlertCircleIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="flex flex-col gap-3">
        <p>{description}</p>
        {onRetry ? (
          <Button variant="outline" size="sm" className="w-fit" onClick={onRetry}>
            <RotateCcwIcon />
            다시 시도
          </Button>
        ) : null}
      </AlertDescription>
    </Alert>
  )
}
