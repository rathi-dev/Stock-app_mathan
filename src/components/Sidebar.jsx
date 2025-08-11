import React from 'react';
import { Link } from 'react-router-dom';
 
const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-800 text-white min-h-screen p-5">
      <h1 className="font-bold text-2xl mb-6">StockMaster</h1>
      <nav className="space-y-2">
        <Link to="/" className="block hover:bg-blue-700 px-4 py-2 rounded">Dashboard</Link>
        <Link to="/products" className="block hover:bg-blue-700 px-4 py-2 rounded">Products</Link>
        <Link to="/orders" className="block hover:bg-blue-700 px-4 py-2 rounded">Orders</Link>
        <Link to="/inventory" className="block hover:bg-blue-700 px-4 py-2 rounded">Inventory</Link>
        <Link to="/users" className="block hover:bg-blue-700 px-4 py-2 rounded">Profile</Link>
      </nav>
    </aside>
  );
};
 
export default Sidebar;