'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn('border-b border-neutral-200', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-neutral-500" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-neutral-600">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: string | React.ReactNode }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn('divide-y divide-neutral-200', className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
