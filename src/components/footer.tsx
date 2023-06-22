import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      &copy; {new Date().getFullYear()} My Website. All rights reserved.
    </footer>
  );
};

export default Footer;
