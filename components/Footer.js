import { useConfig } from '@/lib/config'
import CC from '@/components/cc'
const Footer = ({ fullWidth }) => {
  const BLOG = useConfig()

  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-600 dark:text-gray-500 transition-all ${
        !fullWidth ? 'max-w-[43rem] px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className='border-gray-200 border-opacity-50 dark:border-gray-600 dark:border-opacity-50' />
      <div className='mt-2 mb-4 leading-6'>
        <div className='flex align-baseline justify-between flex-wrap items-center'>
          <CC />
          <p>
            ©️ {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
