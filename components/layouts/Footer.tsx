import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-300 p-4 text-white text-center text-sm md:text-base">
      <p>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
