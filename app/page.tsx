"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "https://picsum.photos/id/1011/1200/400",
    "https://picsum.photos/id/1015/1200/400",
    "https://picsum.photos/id/1016/1200/400",
  ];

  const gallery = [
    "https://picsum.photos/id/1021/400/300",
    "https://picsum.photos/id/1025/400/300",
    "https://picsum.photos/id/1035/400/300",
    "https://picsum.photos/id/1041/400/300",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-red-700 text-white flex justify-around p-4 shadow">
        <a href="#hero" className="font-bold hover:underline">
          Hero
        </a>
        <a href="#rules" className="font-bold hover:underline">
          Rules
        </a>
        <a href="#gallery" className="font-bold hover:underline">
          Gallery
        </a>
        <a
          href="https://forms.gle/your-google-form"
          target="_blank"
          className="font-bold hover:underline"
        >
          Form
        </a>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="flex flex-col justify-center items-center h-[80vh] text-center bg-gradient-to-r from-red-700 to-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          School Marching Competition
        </h1>
        <p className="text-lg md:text-2xl font-medium">
          Unity • Discipline • National Spirit
        </p>
      </section>

      {/* Carousel */}
      <section className="relative overflow-hidden w-full max-h-[400px]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Slide ${i}`} className="w-full" />
          ))}
        </div>
      </section>

      {/* Rules */}
      <section id="rules" className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Competition Guidelines
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Each team consists of 16–20 participants.</li>
          <li>Uniform must be neat and identical.</li>
          <li>Performance duration: max 10 minutes.</li>
          <li>Scoring includes discipline, formation, and creativity.</li>
          <li>Jury decisions are final.</li>
        </ul>
      </section>

      {/* Gallery */}
      <section id="gallery" className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Competition Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i}`}
              className="w-full rounded-lg shadow"
            />
          ))}
        </div>
      </section>

      {/* Floating Button */}
      <button
        onClick={() =>
          window.open("https://forms.gle/your-google-form", "_blank")
        }
        className="fixed bottom-6 right-6 bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-800 transition"
      >
        Evaluation Form
      </button>
    </main>
  );
}
