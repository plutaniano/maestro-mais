import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Unauthorized from '../pages/Unauthorized';

export default function Restrict({ isStaff = false, to = null }) {
  const { auth } = useAuth();
  const location = useLocation();

  // Superuser acessa tudo
  if (auth?.user?.is_superuser) return <Outlet />;

  // Se eh staff e esta restringido para staff
  if (isStaff && auth?.user?.is_staff) return <Outlet />;

  // Esta em algum dos grupos
  if (auth?.user?.groups?.find((g) => to.includes(g))) return <Outlet />;

  // Restringe apenas para nao logados
  if (to === null && auth?.accessToken) return <Outlet />;

  // Se tem o token, e nao passou nas etapas anteriores
  // quer dizer que nao possui autorizacao
  if (auth?.accessToken) return <Unauthorized />;

  // Nao esta logado
  return <Navigate to="/login" state={{ from: location }} replace />;
}
