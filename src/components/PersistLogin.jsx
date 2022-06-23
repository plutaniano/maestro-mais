import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';
import Loading from './Loading';
import Shell from './Shell';

export default function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth?.accessToken) {
      refresh().finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    isLoading
      ? <Loading />
      : <Shell><Outlet /></Shell>
  );
}
