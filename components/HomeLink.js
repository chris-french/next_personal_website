// HomeLink.js
import React from 'react';
import Border from './Border';

export default function HomeLink({ name, isSelected, onClick, darkMode }) {
  return (
    <Border >
        <button
            className={`
                p-2
                transition 
                duration-500 
                rounded
                border-spacing-2
                border-2 
                ${darkMode ? 'decoration-alt-light' : 'decoration-alt-dark'} 
                ${
                isSelected
                    ? `${
                        darkMode
                        ? 'font-bold text-off-dark border bg-off-light shadow-highlight shadow-inner'
                        : 'font-bold text-off-light border bg-off-dark shadow-highlight shadow-inner'
                    }`
                    : `${
                        darkMode
                        ? 'bg-alt-dark border text-alt-light shadow-inner shadow-dark'
                        : 'bg-alt-light ring-alt-dark ring-1 text-alt-dark shadow-dark shadow-md'
                    }`
                }
                `}
            onClick={onClick}
            >
            {name}
            </button>
    </Border>
   
  );
}
