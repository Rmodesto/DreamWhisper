import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 md:hidden flex items-center justify-between">
      <h1 className="text-white text-lg font-semibold">Chat App</h1>
    </header>
  );
};

export default Header;
