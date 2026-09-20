import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-11 w-full min-w-0 bg-transparent text-sm text-fg outline-none placeholder:text-subtle",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
