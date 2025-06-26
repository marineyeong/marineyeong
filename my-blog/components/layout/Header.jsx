import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="border-b-1 border-(--color-gray001)">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center">
          <Link href="/" className="inline-block px-3 py-5 font-serif text-primary text-3xl font-bold">
            marine.com
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
