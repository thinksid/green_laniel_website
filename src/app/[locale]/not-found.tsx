import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <h1 className="font-display text-display-xl text-forest-800 mb-4">404</h1>
        <p className="text-xl text-neutral-600 mb-8">
          Page not found. The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button href="/">Go Home</Button>
      </div>
    </div>
  );
}
