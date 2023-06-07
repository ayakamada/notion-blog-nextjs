import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";

import { siteMetadata } from "@/data/siteMetadata";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  );
}
