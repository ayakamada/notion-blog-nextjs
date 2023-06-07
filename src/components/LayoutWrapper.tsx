import { ReactNode } from "react";
import Footer from "./Footer";
import Link from "next/link";

import SectionContainer from "@/components/SectionContainer";
import ThemeSwitch from "@/components/ThemeSwitch";
import headerNavLinks from "@/data/headerNavLinks";

import { siteMetaData } from "@/data/siteMetaData";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetaData.title}>
              <div className="flex items-center justify-between">
                <div className="mr-3">{/* <Logo /> */}</div>
                <div className="hidden h-6 text-2xl font-semibold sm:block">{siteMetaData.title}</div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-50 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
