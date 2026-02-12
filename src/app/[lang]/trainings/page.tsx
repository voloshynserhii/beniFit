import Hero from '@/components/Hero';
import WhoNeeds from '@/components/WhoNeeds';
import Reviews from '@/components/Reviews';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { getDictionary } from '@/get-dictionary';

export default async function TrainingsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <>
      <Hero
        lang={lang}
        imgSrc="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Online & Face-to-Face Training"
        subtitle="Transform your body and mind with personalized training plans."
        buttons={[
          { text: 'Book a Free Consultation', href: '#contacts', primary: true },
          { text: 'Learn More', href: '#reviews' },
        ]}
      />
      <WhoNeeds dict={dict.targetAudience} />
      <Reviews dict={dict.reviews} />
      <ContactForm dict={dict.contact} />
      <Footer lang={lang} />
    </>
  );
}
