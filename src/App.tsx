import React from 'react';
import GlobalStyle from './GlobalStyle';
import Landing from './pages/Landing';

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <GlobalStyle />
    </>
  );
};

export default App;
