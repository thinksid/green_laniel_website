'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<FormStatus>('idle');

  const operationOptions = t.raw('form.operationOptions') as Record<string, string>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Formspree form endpoint
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mykplgpq';
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brunswick-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-brunswick-600" />
        </div>
        <p className="text-xl font-medium text-brunswick-800">{t('form.success')}</p>
      </motion.div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {/* Form */}
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block font-medium text-sm text-neutral-700 mb-2"
              >
                {t('form.name')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:border-brunswick-500 focus:ring-2 focus:ring-brunswick-500/20"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-sm text-neutral-700 mb-2"
              >
                {t('form.email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:border-brunswick-500 focus:ring-2 focus:ring-brunswick-500/20"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Operation Type */}
            <div>
              <label
                htmlFor="operationType"
                className="block font-medium text-sm text-neutral-700 mb-2"
              >
                {t('form.operationType')}
              </label>
              <select
                id="operationType"
                name="operationType"
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-900 transition-all duration-200 focus:outline-none focus:border-brunswick-500 focus:ring-2 focus:ring-brunswick-500/20"
              >
                <option value="">&mdash;</option>
                {Object.entries(operationOptions).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            {/* Primary Crop */}
            <div>
              <label
                htmlFor="crop"
                className="block font-medium text-sm text-neutral-700 mb-2"
              >
                {t('form.crop')}
              </label>
              <input
                type="text"
                id="crop"
                name="crop"
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:border-brunswick-500 focus:ring-2 focus:ring-brunswick-500/20"
              />
            </div>

            {/* Hectares */}
            <div>
              <label
                htmlFor="hectares"
                className="block font-medium text-sm text-neutral-700 mb-2"
              >
                {t('form.hectares')}
              </label>
              <input
                type="text"
                id="hectares"
                name="hectares"
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:border-brunswick-500 focus:ring-2 focus:ring-brunswick-500/20"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block font-medium text-sm text-neutral-700 mb-2"
            >
              {t('form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:border-brunswick-500 focus:ring-2 focus:ring-brunswick-500/20 resize-y min-h-[120px]"
            />
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg"
            >
              <AlertCircle className="w-5 h-5" />
              <span>{t('form.error')}</span>
            </motion.div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={status === 'submitting'}
            className="w-full md:w-auto"
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                {t('form.submit')}
              </span>
            )}
          </Button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="lg:col-span-1">
        <div className="bg-warmgray rounded-2xl p-6 md:p-8">
          <h3 className="font-display text-xl text-brunswick-800 mb-6">
            {t('heading')}
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-brunswick-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-brunswick-700" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Email</p>
                <a
                  href="mailto:info@greenlaniel.com"
                  className="font-medium text-brunswick-700 hover:text-brunswick-600"
                >
                  {t('info.email')}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-brunswick-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brunswick-700" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Service Area</p>
                <p className="font-medium text-neutral-700">{t('info.serving')}</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-brunswick-100 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-brunswick-700" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Languages</p>
                <p className="font-medium text-neutral-700">{t('info.languages')}</p>
              </div>
            </li>
          </ul>

          <p className="mt-6 text-sm text-neutral-500 border-t border-neutral-200 pt-6">
            {t('info.note')}
          </p>
        </div>
      </div>
    </div>
  );
}
