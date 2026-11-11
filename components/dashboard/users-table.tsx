"use client"

import { useState } from "react"

import { ConfirmDialog } from "@/components/common/confirm-dialog"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import type { MockUser } from "@/lib/mock/users"
import { usePreferencesStore } from "@/stores/preferences-store"

interface UsersTableProps {
  initialUsers: MockUser[]
}

/**
 * 사용자 목록 테이블. 삭제 기능(확인 다이얼로그 포함)과
 * Zustand의 조밀한 보기 설정에 따라 행 높이가 바뀌는 예제입니다.
 */
export function UsersTable({ initialUsers }: UsersTableProps) {
  const [users, setUsers] = useState(initialUsers)
  const compactMode = usePreferencesStore((state) => state.compactMode)

  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  const cellPadding = compactMode ? "py-1.5" : "py-3"

  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이름</TableHead>
            <TableHead className="hidden sm:table-cell">이메일</TableHead>
            <TableHead>권한</TableHead>
            <TableHead>상태</TableHead>
            <TableHead className="text-right">관리</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className={cn(cellPadding, "font-medium")}>{user.name}</TableCell>
              <TableCell className={cn(cellPadding, "hidden text-muted-foreground sm:table-cell")}>
                {user.email}
              </TableCell>
              <TableCell className={cellPadding}>{user.role}</TableCell>
              <TableCell className={cellPadding}>
                <Badge variant={user.status === "활성" ? "secondary" : "outline"}>{user.status}</Badge>
              </TableCell>
              <TableCell className={cn(cellPadding, "text-right")}>
                <ConfirmDialog
                  triggerLabel="삭제"
                  triggerVariant="ghost"
                  title={`${user.name} 사용자를 삭제할까요?`}
                  description="삭제한 사용자는 되돌릴 수 없습니다."
                  confirmLabel="삭제"
                  onConfirm={() => handleDelete(user.id)}
                />
              </TableCell>
            </TableRow>
          ))}
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="py-8 text-center text-muted-foreground">
                표시할 사용자가 없습니다.
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </div>
  )
}
