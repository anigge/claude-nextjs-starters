"use client"

import Link from "next/link"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { signupSchema, type SignupValues } from "@/lib/validations/auth"

/**
 * 회원가입 폼 예제: 비밀번호 확인까지 Zod로 교차 검증합니다.
 */
export function SignupForm() {
  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  })

  const onSubmit = async (values: SignupValues) => {
    // TODO: 실제 회원가입 API 호출로 교체
    await new Promise((resolve) => setTimeout(resolve, 500))
    toast.success("회원가입 요청이 처리되었습니다.", {
      description: values.email,
    })
    form.reset()
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="w-full">
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-name">이름</FieldLabel>
              <Input {...field} id="signup-name" autoComplete="name" aria-invalid={fieldState.invalid} />
              {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : null}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-email">이메일</FieldLabel>
              <Input
                {...field}
                id="signup-email"
                type="email"
                autoComplete="email"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : null}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-password">비밀번호</FieldLabel>
              <Input
                {...field}
                id="signup-password"
                type="password"
                autoComplete="new-password"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : null}
            </Field>
          )}
        />
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-confirm">비밀번호 확인</FieldLabel>
              <Input
                {...field}
                id="signup-confirm"
                type="password"
                autoComplete="new-password"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : null}
            </Field>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "처리 중..." : "가입하기"}
        </Button>
        <FieldDescription className="text-center">
          이미 계정이 있으신가요? <Link href="/login" className="underline underline-offset-4">로그인</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}
