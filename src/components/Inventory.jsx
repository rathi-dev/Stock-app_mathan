import React, { useState } from 'react';
import initialInventory from '../data/inventory.json';

const Inventory = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [editId, setEditId] = useState(null);
  const [editedItem, setEditedItem] = useState({});

  const handleDelete = (id) => {
    const updated = inventory.filter(item => item.id !== id);
    setInventory(updated);
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditedItem({ ...item });
  };

  const handleChange = (e) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updated = inventory.map(item =>
      item.id === editId ? editedItem : item
    );
    setInventory(updated);
    setEditId(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold mb-6 text-gray-800">📦 Inventory List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Brand</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-yellow-100 transition-colors`}
              >
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">
                  {editId === item.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editedItem.name}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full"
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editId === item.id ? (
                    <input
                      type="text"
                      name="category"
                      value={editedItem.category}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full"
                    />
                  ) : (
                    item.category
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editId === item.id ? (
                    <input
                      type="text"
                      name="brand"
                      value={editedItem.brand}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full"
                    />
                  ) : (
                    item.brand
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editId === item.id ? (
                    <input
                      type="number"
                      name="quantity"
                      value={editedItem.quantity}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full"
                    />
                  ) : (
                    <span className={item.quantity === 0 ? 'text-red-600' : 'text-green-600'}>
                      {item.quantity}
                    </span>
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editId === item.id ? (
                    <input
                      type="number"
                      name="price"
                      value={editedItem.price}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full"
                    />
                  ) : (
                    `₹${item.price}`
                  )}
                </td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  {editId === item.id ? (
                    <button
                      onClick={handleSave}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-green-400 text-white px-3 py-1 rounded hover:bg-green-500"
                    >
                      Update
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
