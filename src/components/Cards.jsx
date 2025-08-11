import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Cards=(props)=>{  
    const navigate = useNavigate();
    return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-4">
  <div className="bg-white p-6 w-75 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
    <h2 className="text-lg font-bold mb-2">Total Products</h2>
    <p className="text-gray-600">{props.productLength}</p>
    <button
          onClick={() => navigate("/products")}
          className="mt-4 text-sm text-white-600 hover:bg-red-700">
          View all Products →
    </button>
  </div>
 
  <div className="bg-white p-6 w-75 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
    <h2 className="text-lg font-bold mb-2">All Orders</h2>
    <p className="text-gray-600">{props.orderLength} </p>
    <button
          onClick={() => navigate("/orders")}
          className="mt-4 text-sm text-white-600 hover:bg-orange-700">
          View all Orders →
    </button>
  </div>

  <div className="bg-white p-6 w-75 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
    <h2 className="text-lg font-bold mb-2">Low Stock Items</h2>
    <p className="text-gray-600">0 </p>
    <button
          onClick={() => navigate("/inventory")}
          className="mt-4 text-sm text-white-600 hover:bg-green-700">
          View Inventory →
    </button>
  </div>

  <div className="bg-white p-6 w-75 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
    <h2 className="text-lg font-bold mb-2">Out of Stock</h2>
    <p className="text-gray-600">0</p>
    <button
          onClick={() => navigate("/inventory")}
          className="mt-4 text-sm text-white-600 hover:bg-violet-700">
          Update Inventory →
    </button>
  </div>
</div>
 
    )
}
export default Cards
 