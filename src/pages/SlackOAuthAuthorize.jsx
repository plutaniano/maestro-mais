import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from '../axios';
import useAuth from '../hooks/useAuth';

export default function SlackOAuthAuthorize() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setAuth } = useAuth();

  useEffect(() => {
    const code = searchParams.get('code');
    axios.get('/slack/oauth/authorize', { params: { code } })
      .then((response) => {
        const accessToken = response?.data?.access;
        const user = response?.data?.user;
        setAuth({ user, accessToken });
      })
      .catch(console.error)
      .finally(() => navigate('/'));
  }, []);

  return (
    <p>Carregando</p>
  );
}
