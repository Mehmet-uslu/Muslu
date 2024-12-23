import React from 'react';


export default function YeniSezon() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-6 max-w-sm mx-auto md:ml-auto md:pl-4">
      {/* Üst Metin */}
      <p className="text-gray-500 uppercase text-xs tracking-widest mb-2">
        SELOŞUN ALIŞVERİŞ SAYFASINA HOŞGELDİNİZ
        
      </p>

      {/* Başlık */}
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-4 leading-snug">
        Yeni Sezon Başlıyor
      </h1>

      {/* Açıklama */}
      <p className="text-gray-600 text-center text-sm leading-relaxed mb-6">
        Yılın en heyecanlı zamanına hazır olun.
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
        src="https://i1.haber7.net//haber/haber7/photos/2020/27/DhdoZ_1593604260_5324.jpg"
        alt="Couple in a blanket"
        className="mt-8 w-full rounded-md"
      />
    </div>
  );
}
