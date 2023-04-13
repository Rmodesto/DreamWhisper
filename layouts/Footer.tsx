// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-4 mt-auto">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
