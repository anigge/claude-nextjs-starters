"use client"

import { XIcon } from "lucide-react"
import useLocalStorageState from "use-local-storage-state"

import { Button } from "@/components/ui/button"

interface AnnouncementBannerProps {
  /** 닫힘 상태를 구분하는 저장소 키. 공지가 바뀌면 키를 바꿔 다시 보여줍니다. */
  storageKey: string
  children: React.ReactNode
}

/**
 * 닫으면 브라우저 localStorage에 기억하는 공지 배너.
 * defaultServerValue를 지정해 서버 렌더링과 첫 클라이언트 렌더링이 같도록 합니다.
 */
export function AnnouncementBanner({ storageKey, children }: AnnouncementBannerProps) {
  const [dismissed, setDismissed] = useLocalStorageState<boolean>(storageKey, {
    defaultValue: false,
    defaultServerValue: false,
  })

  if (dismissed) return null

  return (
    <div className="flex items-center justify-center gap-3 bg-primary px-4 py-2 text-sm text-primary-foreground">
      <p className="text-center">{children}</p>
      <Button
        variant="ghost"
        size="icon-sm"
        className="shrink-0 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        aria-label="배너 닫기"
        onClick={() => setDismissed(true)}
      >
        <XIcon />
      </Button>
    </div>
  )
}
