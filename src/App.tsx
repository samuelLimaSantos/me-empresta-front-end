import React from 'react';
import GlobalStyle from './GlobalStyle';
import { AuthProvider } from './context';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
