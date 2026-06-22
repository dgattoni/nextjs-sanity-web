import { type SanityDocument } from "next-sanity";

import PostCard from "./PostCard";

export default function Blog({ posts }: { posts: SanityDocument[] }) {
  return (
    <section id="blog" aria-labelledby="blog-heading" className="section-divider bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="mb-14">
          <span className="pink-bar" aria-hidden="true"></span>
          <span className="eyebrow">Writing</span>
          <h2 id="blog-heading" className="font-bold text-[2.5rem] uppercase text-ink">
            Blog
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
          {posts.map((post) => (
            <li key={post._id}>
              <PostCard
                title={post.title}
                slug={post.slug.current}
                publishedAt={post.publishedAt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
