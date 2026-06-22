import Link from "next/link";

type PostCardProps = {
  title: string;
  slug: string;
  publishedAt: string;
};

export default function PostCard({ title, slug, publishedAt }: PostCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="group flex flex-col h-full p-6 bg-white border border-border rounded-lg no-underline transition-colors hover:border-pink-500"
    >
      <h3 className="text-xl font-semibold text-ink mb-2 group-hover:text-accent">
        {title}
      </h3>
      <p className="text-sm text-ink-mid mt-auto">
        {new Date(publishedAt).toLocaleDateString()}
      </p>
    </Link>
  );
}
