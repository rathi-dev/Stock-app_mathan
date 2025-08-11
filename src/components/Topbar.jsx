import React from 'react';
 
 
const Topbar = () => {
  return (
    <div className="w-full bg-white px-6 py-4 shadow flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        />
   
        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
          JS
        </div>
      </div>
    </div>
  );
};
 
export default Topbar;