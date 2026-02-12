import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import { getDictionary } from '@/get-dictionary';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  
  return (
    <>
      <Hero lang={lang} />
      <About lang={lang} />
      <Reviews dict={dict.reviews} />
      <ContactForm dict={dict.contact} />
      <Footer lang={lang} />
    </>
  );
}