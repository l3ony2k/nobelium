import FormattedDate from "@/components/FormattedDate";
import { useConfig } from "@/lib/config";
import Link from "next/link";

const BlogPost = ({ post }) => {
  const BLOG = useConfig();

  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <article key={post.id} className="mb-6 px-0 pb-1 pt-2.5 md:px-2.5 duration-150 hover:bg-gray-400/10 hover:rounded">
        <header className="flex flex-col justify-between md:flex-row md:items-baseline">
          <h2 className="text-xl md:text-xl font-bold mb-2 cursor-pointer text-black dark:text-gray-200">
            {post.title}
          </h2>
          <time className="text-sm md:text-base mb-1 flex-shrink-0 text-gray-600 dark:text-gray-500">
            <FormattedDate date={post.date} />
          </time>
        </header>
        <main>
          <p className="text-sm leading-6 md:text-base block md:block md:text-justify md:leading-7 text-gray-700 dark:text-gray-400">
            {post.summary}
          </p>
        </main>
      </article>
    </Link>
  );
};

export default BlogPost;
