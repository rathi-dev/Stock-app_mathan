// src/pages/Orders.jsx
import React from "react";
import orders from "../data/orders.json";
import orderItems from "../data/orderItems.json";
import users from "../data/users.json";
import products from "../data/products.json";

const statusColors = {
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
  Shipped: "bg-violet-100 text-violet-800",
  Pending: "bg-yellow-100 text-yellow-800",
};

export default function Orders() {
  // Helper to get username by user_id
  const getUserName = (user_id) => {
    const user = users.find((u) => u.user_id === user_id);
    return user ? user.name : "Unknown";
  };

  // Helper to get products in an order
  const getOrderProducts = (order_id) => {
    // Filter orderItems by order_id
    const items = orderItems.filter((item) => item.order_id === order_id);
    // Map product_ids to product names
    return items
      .map((item) => {
        const product = products.find((p) => p.product_id === item.product_id);
        return product ? product.name : "Unknown Product";
      })
      .join(", ");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl text-center font-bold mb-6">🛒 Orders</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                Order ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                Order Items
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                Order Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Placed By
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.order_id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap border-r border-gray-200">
                  {order.order_id}
                </td>
                <td className="px-4 py-3 whitespace-normal max-w-xs border-r border-gray-200">
                  {getOrderProducts(order.order_id)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap border-r border-gray-200">
                  {order.orderdate}
                </td>
                <td className="px-4 py-3 whitespace-nowrap border-r border-gray-200">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      statusColors[order.status] || "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {getUserName(order.user_id)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
