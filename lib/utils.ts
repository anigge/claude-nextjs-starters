import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 조건부 클래스 문자열을 합치고, Tailwind 클래스 충돌을 해소합니다.
 * 예: cn("p-2", isActive && "p-4") → "p-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
