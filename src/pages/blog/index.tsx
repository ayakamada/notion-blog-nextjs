import Image from "next/image";
import { fetchPages } from "@/lib/notion";
import Link from "next/link";

import formatDate from "@/lib/utils/formatDate";

type Post = /*unresolved*/ any;

export default function BlogIndex({ posts }: { posts: Post[] }) {
  // console.log(posts);
  return (
    <main className="">
      {posts.map((post, i) => (
        <Link key={post.id} href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}>
          <li key={i} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={post.properties.Date.datestart}>{formatDate(post.properties.Date.date.start)}</time>
                </dd>
              </dl>
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      {post.properties.Post.title[0].plain_text}
                    </Link>
                  </h3>
                  {/* <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div> */}
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  {post.properties.Description.rich_text[0].plain_text}
                </div>
              </div>
            </article>
          </li>
        </Link>
      ))}
    </main>
  );
}

export const getServerSideProps = async () => {
  const posts = await fetchPages();

  console.log(posts);

  return {
    props: {
      posts: posts.results,
    },
  };
};
