import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <a>
        <article key={post.id} className="mb-6 md:mb-6 p-0 md:pb-1 md:pt-2.5 md:px-2.5 duration-150 hover:bg-gray-400/10 hover:rounded">
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="text-xl md:text-xl font-bold mb-2 cursor-pointer text-black dark:text-gray-200">
              {post.title}
            </h2>
            <time className="text-sm md:text-base mb-1 flex-shrink-0 text-gray-600 dark:text-gray-500">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </time>
          </header>
          <main>
            <p className="text-sm leading-6 md:text-base block md:block md:text-justify md:leading-7 text-gray-700 dark:text-gray-400">
              {post.summary}
            </p>
          </main>
        </article>
      </a>
    </Link>
  )
}

export default BlogPost
