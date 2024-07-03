import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../css/formpas.css';

const UpdateUser = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
    address: '',
    phone: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [changedFields, setChangedFields] = useState({});
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const userId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8888/users/${userId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setChangedFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8888/users/${userId}`, changedFields, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/backend");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update User</h1>
      <input
        type="text"
        placeholder="Username"
        name="username"
        onChange={handleChange}
        value={user.username}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={user.email}
      />
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <input
        type="text"
        placeholder="Role"
        name="role"
        onChange={handleChange}
        value={user.role}
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        onChange={handleChange}
        value={user.address}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        onChange={handleChange}
        value={user.phone}
      />
      <button onClick={handleClick}>Update</button>
      {error && <p>Something went wrong!</p>}
      <Link to="/backend">See all Users</Link>
    </div>
  );
};

export default UpdateUser;
