'use client';

import { motion } from 'framer-motion';
import { Check, Bell } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export function ValueProp() {
  const t = useTranslations('home.valueProp');

  const protectors = t.raw('protectors') as string[];
  const optimizers = t.raw('optimizers') as string[];

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
      </SectionHeader>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="relative max-w-sm mx-auto">
            {/* Phone Frame */}
            <div className="bg-neutral-900 rounded-[3rem] p-4 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-neutral-100 px-6 py-3 flex justify-between items-center text-xs text-neutral-500">
                  <span>9:41</span>
                  <span>Green Laniel</span>
                  <span>100%</span>
                </div>

                {/* Notification */}
                <div className="p-4">
                  <div className="bg-forest-50 border border-forest-200 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center flex-shrink-0">
                        <Bell className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-forest-800 text-sm mb-1">
                          Vita 1 Alert
                        </p>
                        <p className="text-sm text-neutral-700">
                          {t('notification')}
                        </p>
                        <p className="text-xs text-neutral-500 mt-2">now</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="h-48 bg-neutral-50" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-forest-200 rounded-full opacity-50 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-earth-400 rounded-full opacity-30 blur-xl" />
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 space-y-8"
        >
          {/* Protectors */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-forest-700 mb-4">
              {t('protectorsHeading')}
            </h3>
            <ul className="space-y-3">
              {protectors.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-forest-700" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Optimizers */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-earth-600 mb-4">
              {t('optimizersHeading')}
            </h3>
            <ul className="space-y-3">
              {optimizers.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-earth-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-earth-600" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button href="/contact" size="lg">
            {t('cta')}
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
