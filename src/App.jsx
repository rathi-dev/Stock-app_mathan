import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import products from './data/products.json';
import orders from './data/orders.json';
import Cards from './components/cards';
import ProductTable from './components/ProductTable';
import ProductListing from './components/ProductListing';
import Inventory from './components/Inventory';
import Orders from './components/Orders';
 
function App() {
  const totalProductLength = products.length;
  const totalOrders = orders.length;
  return (
     <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={
                <>
                  <Cards productLength={totalProductLength} orderLength={totalOrders} />
                  <ProductTable />
                </>
              } />
              <Route path="/products" element={<ProductListing />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/inventory" element={<Inventory />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
 
export default App;