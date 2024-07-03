import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar'; // Import Sidebar
import "../css/backendadmin.css"; // Ensure this is only used here

const ManageAccounts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:8888/users'); // Assuming you have a route for fetching users
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8888/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar /> {/* Add Sidebar here */}
        <div className="content">
          <h1>Manage Accounts</h1>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Password</th>
                <th>Role</th>
                <th>Birth</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.role}</td>
                  <td>{user.birth}</td>
                  <td>{user.created_at}</td>
                  <td>{user.updated_at}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={() => handleDelete(user.id)} className="delete-button">Delete</button>
                    <button className="edit-button">
                      <Link to={`/updateacc/${user.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        Edit
                      </Link>
                    </button>
                    <button className="details-button">
                      <Link to={`/detail/${user.id}`}>Details</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageAccounts;
