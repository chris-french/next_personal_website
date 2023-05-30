// Footer.js
import React from 'react';
import Border from './Border';

const Footer = ({ children, className, darkMode }) => {
  return (
    <Border
      borderWidth="border-0"
      className={`p-4 ${className} ${
        darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
      }`}
    >
      {children}
    </Border>
  );
};

export default Footer;
