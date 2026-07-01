import React from 'react';

const ProductCard = (props) => {
  return (
    <div className="border-2 border-white rounded-lg p-4 m-4">
        <img src={props.image} alt={props.title} className="w-full h-48 object-cover mb-4" />
        <h4 className="text-xl font-bold mb-2 text-white">{props.title}</h4>
        <h3 className="text-lg font-semibold mb-2 text-white">${props.price}</h3>
        <button onClick={() => props.del(props.id)} className="bg-red-500 text-white px-4 py-2 rounded mt-4 cursor-pointer hover:bg-red-600">Delete</button>
    </div>
  );
}

export default ProductCard;
