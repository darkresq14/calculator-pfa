import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 text-center">
      &copy; {new Date().getFullYear()} My Website. All rights reserved.
    </footer>
  );
};

export default Footer;
