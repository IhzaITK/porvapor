import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



// Higher-order component to protect routes
export const requireAuth = (Component) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuth = async () => {
        try {
          await axios.get('http://localhost:8888/api/auth/me', { withCredentials: true });
          setIsAuthenticated(true);
        } catch (error) {
          navigate('/login');
        }
      };
      checkAuth();
    }, [navigate]);

    if (!isAuthenticated) {
      return null; // or a loading spinner, or a redirect to login
    }

    return <Component {...props} />;
  };
};

// Higher-order component to protect admin routes
export const requireAdmin = (Component) => {
  return (props) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const checkAdmin = async () => {
        try {
          const res = await axios.get('http://localhost:8888/api/auth/me', { withCredentials: true });
          if (res.data.role === 'admin') {
            setIsAdmin(true);
          } else {
            navigate('/login');
          }
        } catch (error) {
          navigate('/login');
        }
      };
      checkAdmin();
    }, [navigate]);

    if (!isAdmin) {
      return null; // or a loading spinner, or a redirect to login
    }

    return <Component {...props} />;
  };
};


