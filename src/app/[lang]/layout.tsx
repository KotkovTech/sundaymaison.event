import { locales, Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLocale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const dict = await getDictionary(currentLocale);

  return (
    <html lang={currentLocale} className="scroll-smooth">
      <body className="bg-[#FAF7F2] text-[#2C2623] antialiased min-h-screen flex flex-col justify-between">
        <Navbar dict={dict} locale={currentLocale} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} locale={currentLocale} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
