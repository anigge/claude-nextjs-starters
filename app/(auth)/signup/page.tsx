import type { Metadata } from "next"

import { SignupForm } from "@/components/forms/signup-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "회원가입",
}

/** 회원가입 페이지 (/signup) */
export default function SignupPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">회원가입</CardTitle>
        <CardDescription>아래 정보를 입력해 계정을 만드세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>
    </Card>
  )
}
