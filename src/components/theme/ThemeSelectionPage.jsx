import React from 'react';

const ThemeSelectionPage = ({ setTheme }) => {
    const themes = [
        { name: '', colorClass: 'bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-400' },
        { name: '', colorClass: 'bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500' },
        { name: '', colorClass: 'bg-gradient-to-r from-indigo-400 via-cyan-500 to-teal-600' },
        { name: '', colorClass: 'bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600' },
        { name: '', colorClass: 'bg-gradient-to-r from-yellow-400 via-green-500 to-blue-600' },
        { name: '', colorClass: 'bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400' },
    ];

    const handleThemeChange = (theme) => {
        setTheme(theme.colorClass);
    };

    return (
        <div className="fixed top-0 right-0 w-13 h-13 rounded-lg flex items-center justify-center hidden lg:block">
            <div className="p-6">
                <h1 className="text-xl text-center font-bold mb-4">Select Theme</h1>
                <div className="grid grid-cols-6 gap-2">
                    {themes.map((theme, index) => (
                        <button
                            key={index}
                            onClick={() => handleThemeChange(theme)}
                            className={`w-6 h-6 rounded-lg  ${theme.colorClass} hover:opacity-80 hover:w-6 hover:h-7 focus:outline-red focus:ring focus:ring-${theme.colorClass}-300 focus:ring-opacity-50`}
                        >
                            {theme.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThemeSelectionPage;
