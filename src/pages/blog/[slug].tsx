import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage, GetStaticPaths } from "next";
import { notion } from "@/lib/notion";
import { fetchPageBlocks } from "@/lib/notion/pageBlocks";
import { getPageBySlug } from "@/lib/notion/getPage";

import { INotionPage } from "@/lib/types/notion-page";

import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import "@notion-render/client/sass/theme.scss";

export default function Home({ post, html }: { post: INotionPage; html: string }) {
  return (
    <main className={` `}>
      <div className="notion-render" dangerouslySetInnerHTML={{ __html: html }}></div>
    </main>
  );
}

// slugを取得する
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug as string;

  let blocks = [] as any;
  let html = "";
  const post = await getPageBySlug(slug);

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
