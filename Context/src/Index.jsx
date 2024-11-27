import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import for React 18
import App from './App';
import { ThemeProvider } from './ThemeContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Use createRoot

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
