import { ReactNode } from "react";
import Footer from "./Footer";
import Link from "next/link";
// import MobileNav from "./MobileNav";
// import ThemeSwitch from "./ThemeSwitch";

const headerNavLinks = [
  { href: "/blog", title: "Blog" },
  // { href: "/tags", title: "Tags" },
  // { href: "/projects", title: "Projects" },
  // { href: "/about", title: "About" },
];

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <header className="flex items-center justify-between py-10">
        <div>
          <Link href="/" aria-label="Nextjs + Notion BLOG">
            <div className="flex items-center justify-between">
              <div className="mr-3">{/* <Logo /> */}</div>
              Nextjs + Notion BLOG
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
