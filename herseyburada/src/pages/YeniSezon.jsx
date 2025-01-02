import React from 'react';
import { useHistory } from 'react-router-dom';

const YeniSezon = () => {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login'); // Redirects to the login page
  };

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">Herşey burada</div>

          {/* Navigation Menu */}
          <nav>
            <ul className="flex space-x-6">
              <li className="relative group">
                <button className="text-gray-800 hover:text-blue-500">Shop</button>
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="py-2 px-4 border-b border-gray-200 font-bold">Kadin</div>
                  <ul className="py-2">
                    <li className="py-1 px-4 hover:bg-gray-100">Bags</li>
                    <li className="py-1 px-4 hover:bg-gray-100">Belts</li>
                    <li className="py-1 px-4 hover:bg-gray-100">Cosmetics</li>
                    <li className="py-1 px-4 hover:bg-gray-100">Hats</li>
                  </ul>
                  <div className="py-2 px-4 border-b border-gray-200 font-bold">Erkek</div>
                  <ul className="py-2">
                    <li className="py-1 px-4 hover:bg-gray-100">Bags</li>
                    <li className="py-1 px-4 hover:bg-gray-100">Belts</li>
                    <li className="py-1 px-4 hover:bg-gray-100">Cosmetics</li>
                    <li className="py-1 px-4 hover:bg-gray-100">Hats</li>
                  </ul>
                </div>
              </li>
              <li><a href="#" className="text-gray-800 hover:text-blue-500">About</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-500">Contact</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-500">Pages</a></li>
              <li>
                <button onClick={handleLoginClick} className="text-gray-800 hover:text-blue-500">Login</button>
              </li>
            </ul>
          </nav>

          {/* Login/Register */}
          <div className="flex space-x-4 items-center">
            <button onClick={handleLoginClick} className="text-gray-800 hover:text-blue-500">Login / Register</button>
            <a href="#" className="text-gray-800 hover:text-blue-500">🛒</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <p className="uppercase text-lg tracking-widest font-semibold">Summer 2023</p>
            <h1 className="text-5xl font-bold my-4">New Collection</h1>
            <p className="text-lg mb-6">We know how large objects will act, but things on a small scale.</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">Shop Now</button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kc5e-ysBovZGTcX6DAFV8v7K5ekS65hV27N-0g4GDcKxOS0Z0YogIcIZLlSzKqY9qB9qdzNA3szeLjvtDTaix1styMF4tWp38Ao~8fxkp7jUhQFZbKz5DaSnxwI3SEf1kQgwjv7bGMxuj2~Syh6JqDYzVUYzHM7IOXeyCe3afTfgZAKG7JqX1QOSkp4Rn5YFQ2eTGBQ1bflxxL2lzdRK9vZ9XVXeabv9XJ4~TEiOYfyLdblFHy0YE3wMgcpPgqWW-dIo1emGgqL9f-vspoOoCMvBXSLm1oZAV1JUHR~kipMzk7CuIMjQp5ZktkZ34yPdtwOL3k3NMKCWB5GLXZ~zPA__"
              alt="New Collection"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default YeniSezon;
