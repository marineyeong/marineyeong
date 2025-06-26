import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-1 border-(--color-gray001)">
      <div className="max-w-5xl mx-auto py-8 text-center">
        <p className="mb-1 font-serif text-sm text-thirdly">designed by marine</p>
        <a
          href="mailto: marineyeong@gmail.com"
          className="inline-block py-1 px-3 font-serif text-lg text-secondary font-bold"
        >
          marineyeong@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
