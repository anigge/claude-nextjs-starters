"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface ConfirmDialogProps {
  triggerLabel: string
  triggerVariant?: React.ComponentProps<typeof Button>["variant"]
  title: string
  description: string
  confirmLabel?: string
  /** 확인 버튼을 눌렀을 때 실행할 동작 */
  onConfirm: () => void
}

/** 위험하거나 되돌릴 수 없는 동작 전에 한 번 더 묻는 확인 다이얼로그. */
export function ConfirmDialog({
  triggerLabel,
  triggerVariant = "outline",
  title,
  description,
  confirmLabel = "확인",
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant={triggerVariant}>{triggerLabel}</Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={onConfirm}>
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
