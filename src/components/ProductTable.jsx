import React, { useState } from 'react';
import products from '../data/products.json';

export default function ProductTable() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showBox, setShowBox] = useState(false);

  function showData(product) {
    if (selectedProduct && selectedProduct.product_id === product.product_id) {
      setShowBox(!showBox);
    } else {
      setSelectedProduct(product);   
      setShowBox(true);
    }
  }

  return (
    <div className="p-6 relative">
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full border border-gray-300 text-left text-sm">
          <thead className="bg-blue-100 text-blue-800 uppercase text-sm sticky top-0 z-10">
            <tr>
              <th className="border px-6 py-3">Product Name</th>
              <th className="border px-6 py-3">Category</th>
              <th className="border px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {products.slice(0, 5).map((product, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-3 font-medium text-gray-800">
                  {product.name}
                </td>
                <td className="px-6 py-3 text-gray-600">{product.category}</td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => showData(product)}
                    className="text-blue-600 hover:text-blue-800 font-semibold underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Box */}
      {showBox && selectedProduct && (
        <div
          className="absolute top-12 right-10 bg-white shadow-xl border border-gray-200 p-6 rounded-lg w-96 cursor-pointer transition-all duration-300"
          onClick={() => setShowBox(false)}
        >
          <h2 className="text-xl font-bold text-blue-800 mb-3">
            {selectedProduct.name}
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Description:</strong> {selectedProduct.description}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Category:</strong> {selectedProduct.category}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Price:</strong> ₹{selectedProduct.price}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Stock ID:</strong> {selectedProduct.stock_id}
          </p>
          <p className="text-gray-700">
            <strong>Created At:</strong>{' '}
            {new Date(selectedProduct.created_at).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}
