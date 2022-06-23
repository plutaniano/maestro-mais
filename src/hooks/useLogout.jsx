import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import useAuth from './useAuth';

export default function useLogout() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  function logout() {
    axios.get('/api/token/logout/', {
      withCredentials: true,
    })
      .finally(() => {
        setAuth({});
        navigate('/login');
      });
  }
  return logout;
}
