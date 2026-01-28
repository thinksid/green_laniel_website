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
    'bg-forest-800 text-white hover:bg-forest-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:ring-forest-500',
  secondary:
    'bg-white text-forest-800 hover:bg-forest-50 hover:shadow-md focus:ring-forest-500',
  outline:
    'bg-transparent text-forest-800 border-2 border-forest-800 hover:bg-forest-800 hover:text-white focus:ring-forest-500',
  ghost:
    'bg-transparent text-neutral-700 hover:text-forest-700 hover:bg-forest-100 focus:ring-forest-500',
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
