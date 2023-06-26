import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "ui";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
