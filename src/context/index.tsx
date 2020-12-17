import React, { createContext, useState, useEffect, useCallback } from 'react';

const Context = createContext({
  authenticated: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(token: string, userId: string) {},
  token: '',
  handleLogout() {},
});

const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const login = useCallback((token: string, userId: string) => {
    setToken(token);

    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);

    setAuthenticated(true);
  }, []);

  const handleLogout = useCallback(() => {
    setAuthenticated(false);
    setToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }, []);

  return (
    <Context.Provider
      value={{
        authenticated,
        login,
        token,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
