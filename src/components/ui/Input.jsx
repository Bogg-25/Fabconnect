import { forwardRef } from 'react';
import { cn } from './Card';

export const Input = forwardRef(({ className, type, error, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-shadow",
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && <span className="text-xs text-red-500 mt-1 absolute -bottom-5 left-1">{error}</span>}
    </div>
  );
});
Input.displayName = "Input";

export const Label = forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";


