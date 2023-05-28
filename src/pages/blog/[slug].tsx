import Image from "next/image";
import { fetchPages, fetchPageBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import "@notion-render/client/sass/theme.scss";

type Post = /*unresolved*/ any;

export default function Home({ post, html }: { post: Post; html: string }) {
  return (
    <main className={` `}>
      <div className="notion-render" dangerouslySetInnerHTML={{ __html: html }}></div>
    </main>
  );
}

// slugを取得する

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;
  let blocks = [] as any;
  let html = "";
  const post = await fetchPageBySlug(slug);

  if (post) {
    blocks = await fetchPageBlocks(post.id);
    const renderer = new NotionRenderer({
      client: notion,
    });

    renderer.use(hljsPlugin(blocks));
    renderer.use(bookmarkPlugin(blocks));

    html = await renderer.render(...blocks);
  }

  return {
    props: {
      post: post,
      html: html,
    },
  };
};
