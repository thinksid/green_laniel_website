import { cn } from '@/lib/utils';

type CardVariant = 'default' | 'featured' | 'stat';
type CardPadding = 'sm' | 'md' | 'lg';

interface CardProps {
  variant?: CardVariant;
  padding?: CardPadding;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    'bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200',
  featured:
    'bg-forest-800 text-white rounded-2xl shadow-lg',
  stat:
    'bg-warmgray rounded-xl text-center',
};

const paddingStyles: Record<CardPadding, string> = {
  sm: 'p-4',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-10',
};

export function Card({
  variant = 'default',
  padding = 'md',
  className,
  children,
}: CardProps) {
  return (
    <div
      className={cn(variantStyles[variant], paddingStyles[padding], className)}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3 className={cn('font-display text-display-sm', className)}>{children}</h3>
  );
}

export function CardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('', className)}>{children}</div>;
}

export function CardFooter({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('mt-4 pt-4', className)}>{children}</div>;
}
