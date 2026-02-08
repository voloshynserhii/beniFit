import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Reviews from '@/components/Reviews';
import About from '@/components/About';

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