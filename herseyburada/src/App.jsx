import React from 'react';
import './App.css';
import YeniSezon from './components/YeniSezon';
import SignUp from './components/SignUp'; // SignUp bileşenini import edin

function App() {
  return (
    <>
      <YeniSezon />
      <SignUp /> {/* Yeni form bileşeniniz */}
    </>
  );
}

export default App;
