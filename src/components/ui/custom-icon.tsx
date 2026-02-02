'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export type IconName = 'flower' | 'greenhouse' | 'fruits' | 'plants';

interface CustomIconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const iconSizes = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
};

export function CustomIcon({ name, size = 'md', className }: CustomIconProps) {
  const dimension = iconSizes[size];

  return (
    <Image
      src={`/icons/icon_${name}.png`}
      alt={name}
      width={dimension}
      height={dimension}
      className={cn('object-contain', className)}
    />
  );
}
