'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// We use dynamic import for ReactPlayer to avoid hydration errors 
// because it relies on browser-specific APIs (window/document).
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false }) as unknown as React.ComponentType<any>;

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-60">
        <ReactPlayer
          // Replace with your actual video URL or local file path
          src="https://media.istockphoto.com/id/1092655748/video/group-of-people-doing-exercise-with-kettlebell-in-gym.mp4?s=mp4-640x640-is&k=20&c=WVYLugYhSlv4iJUBhSd-FWr6aaARDg8YudO0aoYarhE="
          playing={true}
          loop={true}
          muted={true} // REQUIRED for autoplay to work in most browsers
          width="100%"
          height="100%"
          playsinline={true} // Important for iOS
          config={{
            file: {
              attributes: {
                style: { width: '100%', height: '100%', objectFit: 'cover' },
              },
            },
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Beni<span className="text-blue-500">Fit</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Elite personal training tailored to your physiology and goals.
        </p>
        
        <div className="flex gap-4">
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
