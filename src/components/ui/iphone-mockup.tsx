'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface IPhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export function IPhoneMockup({ children, className }: IPhoneMockupProps) {
  return (
    <div className={cn('relative mx-auto', className)}>
      {/* iPhone Frame */}
      <div className="bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-7 bg-neutral-900 rounded-full z-10" />

        {/* Screen */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden relative min-h-[500px]">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-8 pt-4 pb-2">
            <span className="text-sm font-medium text-neutral-900">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
              </svg>
              <svg className="w-4 h-4 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
              </svg>
              <div className="w-6 h-3 bg-neutral-900 rounded-sm ml-1">
                <div className="w-4 h-2 bg-asparagus-500 rounded-sm m-0.5" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-4">
            {children}
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-neutral-700 rounded-full" />
    </div>
  );
}

interface NotificationProps {
  appName: string;
  appIcon?: ReactNode;
  title: string;
  message: string;
  time?: string;
  className?: string;
}

export function IPhoneNotification({
  appName,
  appIcon,
  title,
  message,
  time = 'now',
  className
}: NotificationProps) {
  return (
    <div className={cn(
      'mx-4 bg-white/90 backdrop-blur-xl rounded-2xl p-3 shadow-lg border border-neutral-200',
      className
    )}>
      <div className="flex items-start gap-3">
        {/* App Icon */}
        <div className="w-10 h-10 rounded-xl bg-brunswick-600 flex items-center justify-center flex-shrink-0">
          {appIcon || (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
              {appName}
            </span>
            <span className="text-xs text-neutral-400">{time}</span>
          </div>
          <p className="font-semibold text-neutral-900 mt-0.5">{title}</p>
          <p className="text-sm text-neutral-600 mt-0.5 line-clamp-2">{message}</p>
        </div>
      </div>
    </div>
  );
}
