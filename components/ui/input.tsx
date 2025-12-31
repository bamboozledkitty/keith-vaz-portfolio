import * as React from "react"
import { cn } from "../../lib/utils"
import { Squircle } from "./squircle"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Squircle cornerRadius={16} className={cn("w-full", className)}>
        <input
          type={type}
          className={cn(
            "flex h-12 w-full border border-input bg-gray-50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/5 disabled:cursor-not-allowed disabled:opacity-50 transition-all font-medium"
          )}
          ref={ref}
          {...props}
        />
      </Squircle>
    )
  }
)
Input.displayName = "Input"

export { Input }