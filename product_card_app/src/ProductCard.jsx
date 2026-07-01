import React from 'react';

const ProductCard = (product) => {
  return (
    <div className="border-2 rounded-lg p-4 m-4">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
        <h3 className="text-lg font-semibold mb-2">${product.price}</h3>
        <h4>{product.title}</h4>
        <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">Delete</button>
    </div>
  );
}

export default ProductCard;
