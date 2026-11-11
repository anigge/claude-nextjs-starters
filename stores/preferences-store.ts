import { create } from "zustand"

/** 사용자 화면 설정 상태 */
interface PreferencesState {
  /** 목록/카드의 여백을 줄인 조밀한 보기 */
  compactMode: boolean
  setCompactMode: (compactMode: boolean) => void
}

/**
 * 화면 설정을 전역으로 공유하는 Zustand 스토어.
 * 사용 예: const compactMode = usePreferencesStore((state) => state.compactMode)
 */
export const usePreferencesStore = create<PreferencesState>()((set) => ({
  compactMode: false,
  setCompactMode: (compactMode) => set({ compactMode }),
}))
