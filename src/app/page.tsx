import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack, { type TechCategory } from "./components/TechStack";
import Blog from "./components/Blog";
import GetInTouch from "./components/GetInTouch";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const TECH_STACK_QUERY = `*[
  _type == "tagCategory"
]|order(order asc){
  _id,
  title,
  "tags": *[_type == "tag" && references(^._id)]|order(title asc){_id, title}
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const techStack = await client.fetch<TechCategory[]>(TECH_STACK_QUERY, {}, options);

  return (
    <>
      <main className="">
        <Hero />
        <About />
        <TechStack categories={techStack} />
        <Blog posts={posts} />
        <GetInTouch />
      </main>
    </>
  );
}
