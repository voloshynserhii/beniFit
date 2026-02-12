import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '@/get-dictionary';

interface HeroProps {
  lang: string;
  videoSrc?: string;
  imgSrc?: string;
  title?: React.ReactNode;
  subtitle?: string;
  buttons?: { text: string; href: string; primary?: boolean }[];
}

export default async function Hero({
  lang,
  videoSrc = "https://media.istockphoto.com/id/1092655748/video/group-of-people-doing-exercise-with-kettlebell-in-gym.mp4?s=mp4-640x640-is&k=20&c=WVYLugYhSlv4iJUBhSd-FWr6aaARDg8YudO0aoYarhE=",
  imgSrc,
  title = (
    <>
      Beni<span className="text-blue-600">Fit</span>
    </>
  ),
  subtitle = "Elite personal training tailored to your physiology and goals.",
  buttons = [
    { text: 'Start Training', href: '/trainings', primary: true },
    { text: 'Contact Me', href: '#contacts' },
  ],
}: HeroProps) {
  const dict = await getDictionary(lang as any);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0 opacity-60"
          priority
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-fit h-fit bg-zinc-900 p-8 rounded-lg z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          {subtitle}
        </p>

        <div className="flex justify-center gap-4">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={`px-8 py-4 font-semibold rounded-lg transition-all duration-200 ${
                button.primary
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}