'use client';

import React, { useState } from 'react';
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';
import Modal from './legal-modal';
import { Icons } from './icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold">
                Calculator PFA
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Modal />
              <ModeToggle />
              <a
                href="https://github.com/darkresq14/calculator-pfa"
                target="_blank"
                rel="noopener noreferrer">
                <Icons.lucideGithub />
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 "
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu">
        <div className="flex flex-col items-start space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Modal />
          <div className="flex flex-row items-center gap-2 px-2 pb-3 pt-2">
            <ModeToggle />
            <a
              href="https://github.com/darkresq14/calculator-pfa"
              target="_blank"
              rel="noopener noreferrer">
              <Icons.lucideGithub />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
