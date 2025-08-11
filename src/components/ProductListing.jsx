import React from 'react';
import products from '../data/products.json';

export default function ProductListing() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.product_id}
          className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg p-4 cursor-pointer"
        >
          {/* Product image from public/images */}
          <img
            src={`/images/${product.image}`} // e.g., public/images/Wireless Keyboard.jpg
            alt={product.name}
            className="w-full h-48 object-contain mb-4 rounded bg-white"
          />

          {/* Product details */}
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-sm text-gray-500 mt-2">
            Category: {product.category}
          </p>
          <p className="text-sm text-gray-500">Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}
