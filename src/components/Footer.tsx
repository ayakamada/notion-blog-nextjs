import Link from "next/link";
import { siteMetaData } from "@/data/siteMetaData";

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <Link href="/">{siteMetaData.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <div>aya kamada</div>
        </div>
      </div>
    </footer>
  );
}
