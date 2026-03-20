import { forwardRef } from 'react';
import { cn } from './Card';

export const Badge = forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: "bg-primary-50 text-primary-700 border border-primary-100",
    secondary: "bg-secondary-50 text-secondary-700 border border-secondary-100",
    outline: "border text-gray-700",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
    success: "bg-green-50 text-green-700 border-green-200",
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";
