import Image from "next/image";
import { fetchPages, fetchPageBySlug, fetchPageBlocks } from "@/lib/notion";

type Post = /*unresolved*/ any;

export default function Home({ post }: { post: Post }) {
  return <main className={` `}></main>;
}

// slugを取得する

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;
  const post = await fetchPageBySlug(slug);
  const blocks = fetchPageBlocks(slug);

  console.log(post);

  return {
    props: {
      post: post,
    },
  };
};
