import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [color, setColor] = useState('black');

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setBackgroundColor(previousState => (previousState === 'white' ? 'darkblue' : 'white'));
    setColor(previousState => (previousState === 'black' ? 'white' : 'black'));
  };

  return (
    <ThemeContext.Provider value={{ isEnabled, backgroundColor, color, toggleSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
