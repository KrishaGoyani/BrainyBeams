import React from 'react';
import { useTheme } from './ThemeContext';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
        <button
          onClick={toggleTheme}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default App;
