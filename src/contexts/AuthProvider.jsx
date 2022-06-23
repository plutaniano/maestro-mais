import { createContext, useMemo, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist') || false));

  const value = useMemo(() => ({
    auth,
    setAuth,
    persist,
    setPersist,
  }), [auth, persist]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
