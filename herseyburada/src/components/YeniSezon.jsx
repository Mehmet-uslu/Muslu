import React from 'react';
import Buton1 from './butonlar/Buton1';
import Buton2 from './butonlar/Buton2';

export default function YeniSezon() {
  return (
    <div>
      <h2>Yeni Sezon Başlıyor!</h2>
      <p>Yılın en heyecanlı zamanına hazır olun.</p>
      <Buton1 />
      <Buton2 />
    </div>
  );
}