import Link from 'next/link';
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

function Hero() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src="https://media.istockphoto.com/id/1092655748/video/group-of-people-doing-exercise-with-kettlebell-in-gym.mp4?s=mp4-640x640-is&k=20&c=WVYLugYhSlv4iJUBhSd-FWr6aaARDg8YudO0aoYarhE=" type="video/mp4" />
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit bg-zinc-900 p-8 rounded-lg z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Beni<span className="text-blue-600">Fit</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Elite personal training tailored to your physiology and goals.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/trainings"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
          >
            Start Training
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-all duration-200"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
