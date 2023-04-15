// pages/_app.tsx
import "font-awesome/css/font-awesome.min.css";
import type { AppProps } from "next/app";

import "../styles/globals.css"; // Updated import statement

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
