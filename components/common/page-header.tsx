import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  /** 우측에 배치할 버튼 등 액션 영역 */
  actions?: ReactNode
}

/** 페이지 상단 제목 영역. 모바일에서는 액션이 제목 아래로 내려갑니다. */
export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
        {description ? (
          <p className="text-sm text-muted-foreground sm:text-base">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  )
}
