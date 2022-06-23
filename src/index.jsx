import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import App from './App';
import makeServer from './server';

// Mirage.js
makeServer({ environment: process.env.NODE_ENV });

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <CSSReset />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root'),
);
