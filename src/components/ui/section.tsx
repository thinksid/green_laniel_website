import { cn } from '@/lib/utils';

type SectionVariant = 'default' | 'alt' | 'dark';

interface SectionProps {
  variant?: SectionVariant;
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

const variantStyles: Record<SectionVariant, string> = {
  default: 'bg-cream',
  alt: 'bg-warmgray',
  dark: 'bg-forest-800 text-white',
};

export function Section({
  variant = 'default',
  id,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section', // py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16
        variantStyles[variant],
        className
      )}
    >
      <div className={cn('container-content', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('text-center mb-12 md:mb-16', className)}>{children}</div>
  );
}

export function SectionTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className={cn('font-display text-display-md md:text-display-lg text-balance', className)}>
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn('mt-4 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto', className)}>
      {children}
    </p>
  );
}
