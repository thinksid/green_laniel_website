import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brunswick-700 text-white hover:bg-brunswick-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:ring-brunswick-500',
  secondary:
    'bg-white text-brunswick-800 hover:bg-brunswick-50 hover:shadow-md focus:ring-brunswick-500',
  outline:
    'bg-transparent text-brunswick-800 border-2 border-brunswick-800 hover:bg-brunswick-800 hover:text-white focus:ring-brunswick-500',
  ghost:
    'bg-transparent text-neutral-700 hover:text-brunswick-700 hover:bg-brunswick-100 focus:ring-brunswick-500',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      fullWidth,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center font-body font-medium rounded-lg transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    );

    if (href) {
      return (
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
