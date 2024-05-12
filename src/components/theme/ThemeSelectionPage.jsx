import React from 'react';
import ToggleButton from '../theme/ToggleButton';

const ThemeSelectionPage = ({ setTheme }) => {
    const themes = [
      { name: '', colorClass: 'bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-400 text-white' },
      { name: '', colorClass: 'bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white' },
      { name: '', colorClass: 'bg-gradient-to-r from-indigo-400 via-cyan-500 to-teal-600 text-white' },
      { name: '', colorClass: 'bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 text-white' },
      { name: '', colorClass: 'bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 text-white' },
    //   { name: '', colorClass: 'bg-gray-700 text-white' },
    ];
  
    const handleThemeChange = (theme) => {
      setTheme(theme.colorClass);
    };
  
    return (
      <div className="fixed top-0 right-0 w-13 h-13 rounded-lg flex items-center justify-center lg:block">
        <div className="p-6">
          <h1 className="text-md text-center justify-center font-bold mb-3">Select Theme</h1>
          <div className="grid grid-cols-6 gap-2">
            {themes.map((theme, index) => (
              <button
                key={index}
                onClick={() => handleThemeChange(theme)}
                className={`w-6 h-6 rounded-lg ${theme.colorClass} hover:opacity-80 hover:w-6 hover:h-6 focus:outline-red 
                              focus:border-blue-300 focus:ring focus:ring-${theme.colorClass}-300 focus:ring-opacity-50`}
              >
                {theme.name}
              </button>
            ))}
          </div>
          <div className={`flex mt-2 text-center font-bold `}>
            <ToggleButton setTheme={setTheme} />
          </div>
        </div>
      </div>
    );
  };
  
  export default ThemeSelectionPage;
  
