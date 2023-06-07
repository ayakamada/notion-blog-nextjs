import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";

import { siteMetaData } from "@/data/siteMetaData";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme={siteMetaData.theme}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  );
}
