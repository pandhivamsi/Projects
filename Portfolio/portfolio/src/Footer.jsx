import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5 text-center">
      <p className="mb-0">&copy; {new Date().getFullYear()} Pandhi Vamsi. All Rights Reserved.</p>
    </footer>
  );
}