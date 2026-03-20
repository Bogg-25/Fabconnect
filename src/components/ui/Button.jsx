import { forwardRef } from 'react';
import { cn } from './Card';
import { motion } from 'framer-motion';

export const Button = forwardRef(({ className, variant = 'primary', size = 'default', children, asChild = false, isLoading = false, ...props }, ref) => {
  const Comp = asChild ? motion.span : motion.button;
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/30",
    secondary: "bg-secondary-50 text-secondary-700 hover:bg-secondary-100 border border-secondary-200",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
    ghost: "hover:bg-primary-50 text-gray-700 hover:text-primary-600",
    accent: "bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/30",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    default: "h-11 px-6 py-2",
    lg: "h-14 px-8 text-lg font-medium",
    icon: "h-10 w-10 p-2",
  };

  return (
    <Comp
      ref={ref}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </Comp>
  );
});
Button.displayName = "Button";
