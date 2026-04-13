import { forwardRef } from 'react';
import { cn } from './Card';

export const Badge = forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: "bg-primary-50 text-primary border border-primary-100",
    secondary: "bg-secondary-50 text-secondary border border-secondary-100",
    outline: "border text-gray-700",
    warning: "bg-primary-50 text-primary border-primary-100",
    success: "bg-accent-50 text-accent border-accent-100",
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
