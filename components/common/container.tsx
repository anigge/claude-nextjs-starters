import { cn } from "@/lib/utils"

type ContainerProps = React.ComponentProps<"div">

/** 최대 너비와 좌우 여백을 반응형으로 잡아주는 기본 래퍼. */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  )
}
