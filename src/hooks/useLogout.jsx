import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import useAuth from './useAuth';

export default function useLogout() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  // // TODO: re-enable logout
  // function logout() {
  //   axios.get('/token/logout/', {
  //     withCredentials: true,
  //   })
  //     .finally(() => {
  //       setAuth({});
  //       navigate('/login');
  //     });
  // }
  // return logout;
  return () => { };
}
