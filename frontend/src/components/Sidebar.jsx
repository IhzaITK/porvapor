import React from 'react';
import { Link } from 'react-router-dom';
import { FaTable } from 'react-icons/fa';
import '../css/sidebar.css'; // Ensure the CSS file is created and linked

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/backend">
            <FaTable /> Manage Products
          </Link>
        </li>
        <li>
          <Link to="/manage">
            <FaTable /> Manage Accounts
          </Link>
        </li>
        <li>
          <Link to="/adminorders">
            <FaTable /> Orders
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
