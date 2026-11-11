"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { usePreferencesStore } from "@/stores/preferences-store"

/**
 * Zustand 스토어 연결 예제. 스위치를 바꾸면 전역 상태가 즉시 바뀌고,
 * 같은 스토어를 쓰는 다른 컴포넌트도 함께 갱신됩니다.
 */
export function PreferencesForm() {
  const compactMode = usePreferencesStore((state) => state.compactMode)
  const setCompactMode = usePreferencesStore((state) => state.setCompactMode)

  return (
    <Card>
      <CardHeader>
        <CardTitle>화면 설정</CardTitle>
        <CardDescription>Zustand 전역 상태로 관리되는 설정입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="compact-mode" className="flex flex-col items-start gap-1">
            <span>조밀한 보기</span>
            <span className="text-xs font-normal text-muted-foreground">
              목록과 카드의 여백을 줄입니다.
            </span>
          </Label>
          <Switch id="compact-mode" checked={compactMode} onCheckedChange={setCompactMode} />
        </div>
      </CardContent>
    </Card>
  )
}
