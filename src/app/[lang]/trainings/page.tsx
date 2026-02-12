import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export default function TrainingsPage() {
  return (
    <>
      <Hero
        imgSrc="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Online & Face-to-Face Training"
        subtitle="Transform your body and mind with personalized training plans."
        buttons={[
          { text: 'Book a Free Consultation', href: '#contacts', primary: true },
          { text: 'Learn More', href: '#reviews' },
        ]}
      />
      <Reviews />
      <Footer />
    </>
  );
}
