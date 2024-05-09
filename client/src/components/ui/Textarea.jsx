import { forwardRef } from "react";

export const Textarea = forwardRef(({ rows = 2, ...props }, ref) => (
  <div className="flex items-center justify-center h-full">
    <textarea
      {...props}
      ref={ref}
      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
      rows={rows}
    />
  </div>
));