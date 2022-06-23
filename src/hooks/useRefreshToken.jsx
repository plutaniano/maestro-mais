import axios from '../axios';
import useAuth from './useAuth';

export default function useRefreshToken() {
  const { setAuth } = useAuth();

  async function refresh() {
    const response = await axios.get('/api/token/refresh/', {
      withCredentials: true,
    });

    setAuth((prev) => ({
      ...prev,
      accessToken: response.data.access,
      user: response.data.user,
    }));
    return response.data.access;
  }

  return refresh;
}
