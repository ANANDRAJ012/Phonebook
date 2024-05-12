import React, { useState } from 'react';
import classNames from 'classnames';

const ToggleButton = ({ setTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can add logic here to toggle between dark mode and light mode
    setTheme(isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black');
  };

  const buttonClasses = classNames(
    'rounded-full',
    'p-1',
    'transition-colors',
    'ml-8',
    {
      'bg-gray-300 dark:bg-gray-700': !isDarkMode,
      'bg-gray-700 dark:bg-gray-300': isDarkMode,
    }
  );

  return (
    <button className={buttonClasses} onClick={toggleMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ToggleButton;

