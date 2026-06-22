import { PortableText, type PortableTextComponents, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Link from "next/link";
import { notFound } from "next/navigation";

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="mt-8 mb-3 text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-6 mb-2 text-2xl">{children}</h3>,
    h4: ({ children }) => <h4 className="mt-4 mb-2 text-1xl">{children}</h4>,
  },
};

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
 
const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 pt-24 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="prose">
        <p className="mb-4">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        <div className="content-body">{Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents} />}</div>
      </div>
    </main>
  );
}