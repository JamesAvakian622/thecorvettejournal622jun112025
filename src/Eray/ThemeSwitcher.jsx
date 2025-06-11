// src/components/ThemeSwitcher.jsx
import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

 
  const toggleTheme = () => {
    setTheme(theme === ("light" )  ?"dark" :  'light' );
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {/* Switch to */} {theme ===  'light' ?  'dark' :  'light' } Theme
      </button>
      
    </div>
  );
};

export default ThemeSwitcher;
