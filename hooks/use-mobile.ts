"use client"

import { useMediaQuery } from "usehooks-ts"

/** Tailwind 기본 md 브레이크포인트(768px) 미만이면 모바일로 판단합니다. */
const MOBILE_QUERY = "(max-width: 767px)"

/**
 * 모바일 여부를 반환합니다. shadcn sidebar가 내부적으로 사용합니다.
 * 직접 matchMedia를 다루지 않고 검증된 usehooks-ts의 useMediaQuery를 사용합니다.
 */
export function useIsMobile(): boolean {
  return useMediaQuery(MOBILE_QUERY, { initializeWithValue: false })
}
