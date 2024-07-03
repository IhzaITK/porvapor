import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar'; // Import Sidebar
import "../css/backendadmin.css"; // Ensure this is only used here

const Orders = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar /> {/* Add Sidebar here */}
        <div className="content">
          <h1>Orders</h1>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Products</th>
                <th>Quantity</th>
                <th>Payment Details</th>
                <th>Transaction at</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
