/** 예제용 사용자 데이터. 실제 API 연동 전까지 사용합니다. */
export interface MockUser {
  id: string
  name: string
  email: string
  role: "관리자" | "편집자" | "뷰어"
  status: "활성" | "비활성"
}

export const mockUsers: MockUser[] = [
  { id: "1", name: "김민준", email: "minjun@example.com", role: "관리자", status: "활성" },
  { id: "2", name: "이서연", email: "seoyeon@example.com", role: "편집자", status: "활성" },
  { id: "3", name: "박지호", email: "jiho@example.com", role: "뷰어", status: "비활성" },
  { id: "4", name: "최수아", email: "sua@example.com", role: "편집자", status: "활성" },
  { id: "5", name: "정우진", email: "woojin@example.com", role: "뷰어", status: "활성" },
]
