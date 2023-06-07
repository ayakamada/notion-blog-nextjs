import Image from "next/image";
import { publishedPages } from "@/lib/notion/publishPages";
import Link from "next/link";
import formatDate from "@/lib/utils/formatDate";

type Post = /*unresolved*/ any;

const MAX_DISPLAY = 5;

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main className="">
      <ul>
        {!posts.length && "No posts found."}
        {posts.slice(0, MAX_DISPLAY).map((post, i) => (
          <li key={i} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <dl>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={post.properties.Date.datestart}>{formatDate(post.properties.Date.date.start)}</time>
                </dd>
              </dl>
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <Link
                    href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                    className="text-gray-900 dark:text-gray-100"
                  >
                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                      {post.properties.Post.title[0].plain_text}
                    </h3>
                  </Link>
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
        ))}
      </ul>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </main>
  );
}

export const getStaticProps = async () => {
  const response = await publishedPages(MAX_DISPLAY);
  // const posts = await publishedPages();

  return {
    props: {
      posts: response.results,
    },
  };
};
