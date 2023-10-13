import React from "react";

type MyComponentProps = {
  children: React.ReactNode;
};

const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default MyComponent;
