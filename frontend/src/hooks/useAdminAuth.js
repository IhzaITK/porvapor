// hooks/useAdminAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAdminAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);
};

export default useAdminAuth;
