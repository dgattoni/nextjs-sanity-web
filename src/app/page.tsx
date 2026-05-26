import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const TAGS_QUERY = `*[
  _type == "tag"
]|order(name asc){_id, title, description}`;


const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const tags = await client.fetch<SanityDocument[]>(TAGS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
       
      </ul>
      <h1 className="text-4xl font-bold mt-12 mb-8">Tags</h1>
      <ul className="flex flex-col gap-y-4">
         {  
       tags.map((tag) => (
          <li className="hover:underline" key={tag._id}>
            <h2 className="text-xl font-semibold">{tag.title}</h2>
            <p>{tag.description}</p>
          </li>
        ))  
        }
      </ul>

    </main>
  );
}