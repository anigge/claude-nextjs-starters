import { z } from "zod"

/** 로그인 폼 검증 스키마. 타입은 스키마에서 추론해 중복 정의를 피합니다. */
export const loginSchema = z.object({
  email: z.email({ message: "올바른 이메일 주소를 입력해 주세요." }),
  password: z.string().min(8, { message: "비밀번호는 8자 이상이어야 합니다." }),
})

export type LoginValues = z.infer<typeof loginSchema>

/** 회원가입 폼 검증 스키마. 비밀번호 확인 일치 여부까지 검사합니다. */
export const signupSchema = z
  .object({
    name: z.string().min(2, { message: "이름은 2자 이상이어야 합니다." }),
    email: z.email({ message: "올바른 이메일 주소를 입력해 주세요." }),
    password: z.string().min(8, { message: "비밀번호는 8자 이상이어야 합니다." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  })

export type SignupValues = z.infer<typeof signupSchema>
