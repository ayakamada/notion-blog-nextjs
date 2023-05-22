import Image from 'next/image'
import {fetchPages} from '@/lib/notion'

type Post = /*unresolved*/ any;

export default function Home({ posts }: { posts: Post[] }) {
  
  return (
    <main
      className={` `}
    >

    </main>
  )
}


export const getServerSideProps = async () => {
  const posts = await fetchPages();

  console.log(posts);

  return {
    props: {
      posts: posts,
    },
  };
};

