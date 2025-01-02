import React from 'react';

const Shopcard = ({ imageUrl, title, department, oldPrice, newPrice, colors }) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{department}</p>
        <div className="flex items-center mt-2">
          {oldPrice && (
            <span className="text-gray-400 line-through mr-2">${oldPrice}</span>
          )}
          <span className="text-green-600 font-semibold">${newPrice}</span>
        </div>
        <div className="flex items-center mt-3 space-x-2">
          {colors.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shopcard;

// Örnek Kullanım
// <Shopcard 
//   imageUrl="https://via.placeholder.com/150" 
//   title="Graphic Design" 
//   department="English Department" 
//   oldPrice="16.48" 
//   newPrice="6.48" 
//   colors={["#007bff", "#ff5722", "#4caf50"]} 
// />
