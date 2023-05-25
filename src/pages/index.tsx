import Image from "next/image";
import { fetchPages } from "@/lib/notion";
import Link from "next/link";

type Post = /*unresolved*/ any;

export default function Home({ posts }: { posts: Post[] }) {
  console.log(posts);
  return (
    <main className="">
      {posts.map((post) => (
        <Link key={post.id} href={post.id}>
          <h1>{post.properties.Post.title[0].plain_text}</h1>
          <p>{post.properties.Description.rich_text[0].plain_text}</p>
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
