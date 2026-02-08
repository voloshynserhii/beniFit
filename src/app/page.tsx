import Hero from '@/app/components/Hero';
import ContactForm from '@/app/components/ContactForm';
import Footer from '@/app/components/Footer';
import Reviews from '@/app/components/Reviews';
import About from '@/app/components/About';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ContactForm />
      <Reviews />
      <Footer />
    </>
  );
}