// HomeLink.js
import React from 'react';

export default function HomeLink({ name, isSelected, onClick, darkMode }) {
  return (
    <button
      className={`
        drop-shadow-lg
        p-2 
        m-0 
        mb-0 
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
                  ? 'text-alt-dark border-solid bg-alt-light'
                  : 'text-alt-light border-solid bg-alt-dark'
              }`
            : `${
                darkMode
                  ? 'bg-alt-dark border-dotted text-alt-light'
                  : 'bg-alt-light border-dotted text-alt-dark'
              }`
        }
        `}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
