import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/profile.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:8888/api/account', { withCredentials: true });
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:8888/api/account', user, { withCredentials: true });
      alert("Profile updated successfully");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="profile-body">
      <Header />
      <h1 className="header">Account Details</h1>
      <div className="profile">
        <div className="sidebar_pro">
          <ul className="profile-ul">
            <Link to="#"><span className="side-link">Account Details</span></Link><br />
            <Link to="/order"><span className="side-link">Orders</span></Link><br />
            <Link to="/change"><span className="side-link">Change Password</span></Link><br />
            <Link to="/login"><span className="side-link">Log Out</span></Link><br />
          </ul>
        </div>
        <div className="profil">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="label">Full Name</label>
              <input type="text" id="username" name="username" value={user.username || ''} onChange={handleChange} className="input" required />
            </div>
            <div className="form-group">
              <label htmlFor="address" className="label">Address</label>
              <input type="text" id="address" name="address" value={user.address || ''} onChange={handleChange} className="input" />
            </div>
            <div className="form-group">
              <label htmlFor="birth" className="label">Birth Date</label>
              <input type="date" id="birth" name="birth" value={user.birth || ''} onChange={handleChange} className="input" />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="label">Handphone</label>
              <input type="tel" id="phone" name="phone" value={user.phone || ''} onChange={handleChange} className="input" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label">Email Address</label>
              <input type="email" id="email" name="email" value={user.email || ''} onChange={handleChange} className="input" required />
            </div>
            <button type="submit" className="button">Save Changes</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
