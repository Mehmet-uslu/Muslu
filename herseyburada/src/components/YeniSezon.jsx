import React from 'react';

export default function YeniSezon() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-6 max-w-sm mx-auto">
      {/* Üst Metin */}
      <p className="text-gray-500 uppercase text-xs tracking-widest mb-2">
        Summer 2020
      </p>

      {/* Başlık */}
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-4 leading-snug">
        Part of the Neural Universe
      </h1>

      {/* Açıklama */}
      <p className="text-gray-600 text-center text-sm leading-relaxed mb-6">
        We know how large objects will act, but things on a small scale.
      </p>

      {/* Butonlar */}
      <div className="flex flex-col gap-3 w-full">
        <button className="bg-blue-500 text-white text-sm font-medium py-2 rounded-md hover:bg-blue-600 transition">
          Buy Now
        </button>
        <button className="border border-blue-500 text-blue-500 text-sm font-medium py-2 rounded-md hover:bg-blue-50 transition">
          Learn More
        </button>
      </div>


      {/* Görsel */}
      <img
        src="https://via.placeholder.com/300x200" // Görsel yolunu buraya ekleyin
        alt="Couple in a blanket"
        className="mt-8 w-full rounded-md"
      />
    </div>
  );
}
