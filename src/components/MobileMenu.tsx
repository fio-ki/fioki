import { useState } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        className="p-2 text-black dark:text-black hover:bg-gray-200 rounded"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 border border-white bg-transparent backdrop-blur-md rounded-lg py-2">
          {[
            { href: '/', label: 'Home' },
            { href: '/shop', label: 'Shop' },
            // { href: '/about', label: 'About' },
            // { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block px-4 py-2 text-neutral-900 hover:bg-neutral-900 hover:text-white rounded transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
