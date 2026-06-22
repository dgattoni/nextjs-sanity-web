import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Blog from "./components/Blog";
import GetInTouch from "./components/GetInTouch";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

// const TAGS_QUERY = `*[
//   _type == "tag"
// ]|order(name asc){_id, title, description}`;


const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  // const tags = await client.fetch<SanityDocument[]>(TAGS_QUERY, {}, options);

  return (
    <>
      <main className="">
        <Hero />
        <About />
        <TechStack />
        <Blog posts={posts} />
        <GetInTouch />
      </main>
    </>
  );
}
