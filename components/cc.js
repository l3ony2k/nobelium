import Link from 'next/link'

const CC = () => {
  return (
    <Link href='/copyright'>
      <a className=''>
        <svg
          className='fill-gray-600 dark:fill-gray-500'
          width='89'
          height='18'
          viewBox='0 0 89 18'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M56 0C51.0375 0 47 4.03754 47 9C47 13.9625 51.0375 18 56 18C60.9625 18 65 13.9625 65 9C65 4.03754 60.9625 0 56 0ZM56 1.38462C60.1988 1.38462 63.6154 4.80115 63.6154 9C63.6154 9.85742 63.4655 10.679 63.203 11.4488L57.3954 8.86343C57.3192 8.79333 57.242 8.72435 57.1561 8.66602C57.0455 8.59089 56.9272 8.52566 56.8032 8.47266C56.6792 8.41965 56.5495 8.37892 56.4151 8.35096C56.3433 8.33603 56.2675 8.33513 56.1934 8.32797L55.424 7.98588C55.4034 7.95318 55.3753 7.92635 55.3604 7.88987C55.3264 7.80647 55.3077 7.71404 55.3077 7.61538C55.3077 7.51673 55.3264 7.4243 55.3604 7.3409C55.3945 7.25749 55.4446 7.18372 55.5065 7.12185C55.5683 7.05997 55.6421 7.00989 55.7255 6.97581C55.8089 6.94174 55.9013 6.92308 56 6.92308C56.3946 6.92308 56.6923 7.22077 56.6923 7.61538H58.0769C58.0769 7.50375 58.0673 7.39367 58.0499 7.28681C58.0324 7.17995 58.0077 7.07657 57.9742 6.97581C57.773 6.37123 57.2946 5.8877 56.6923 5.66962V4.84615H55.3077V5.66962C55.2073 5.70597 55.1097 5.75039 55.017 5.80078C54.9242 5.85118 54.8357 5.90803 54.752 5.97115C54.6682 6.03427 54.59 6.10352 54.5167 6.17804C54.3701 6.32707 54.2453 6.49706 54.1489 6.68374C54.1007 6.77708 54.0594 6.87505 54.0258 6.97581C53.9882 7.089 53.9647 7.2066 53.9474 7.32737L49.3595 5.28561C50.665 2.96144 53.1501 1.38462 56 1.38462ZM48.797 6.55123L54.6046 9.13657C54.779 9.29696 54.9766 9.43318 55.1968 9.52734C55.387 9.60866 55.5937 9.65148 55.8066 9.67203L56.576 10.0141C56.5966 10.0468 56.6247 10.0737 56.6396 10.1101C56.6736 10.1935 56.6923 10.286 56.6923 10.3846C56.6923 10.6806 56.5247 10.922 56.2745 11.0242C56.1911 11.0583 56.0987 11.0769 56 11.0769C55.9013 11.0769 55.8089 11.0583 55.7255 11.0242C55.6421 10.9901 55.5683 10.94 55.5065 10.8782C55.3827 10.7544 55.3077 10.5819 55.3077 10.3846H53.9231C53.9231 10.4963 53.9327 10.6063 53.9501 10.7132C53.9676 10.8201 53.9923 10.9234 54.0258 11.0242C54.0594 11.125 54.1007 11.2229 54.1489 11.3163C54.1971 11.4096 54.2524 11.498 54.3139 11.5826C54.3753 11.6672 54.4434 11.7474 54.5167 11.822C54.59 11.8965 54.6682 11.9657 54.752 12.0288C54.8357 12.092 54.9242 12.1488 55.017 12.1992C55.1097 12.2496 55.2073 12.294 55.3077 12.3304V13.1538H56.6923V12.3304C57.395 12.076 57.9276 11.4612 58.0499 10.7132C58.052 10.7 58.0507 10.6859 58.0526 10.6726L62.6405 12.7144C61.335 15.0386 58.8499 16.6154 56 16.6154C51.8012 16.6154 48.3846 13.1988 48.3846 9C48.3846 8.14258 48.5345 7.32098 48.797 6.55123Z' />
          <path d='M80 0C75.0375 0 71 4.03754 71 9C71 13.9625 75.0375 18 80 18C84.9625 18 89 13.9625 89 9C89 4.03754 84.9625 0 80 0ZM80 1.38462C84.1988 1.38462 87.6154 4.80115 87.6154 9C87.6154 13.1988 84.1988 16.6154 80 16.6154C75.8012 16.6154 72.3846 13.1988 72.3846 9C72.3846 4.80115 75.8012 1.38462 80 1.38462ZM80 4.84615C78.4728 4.84615 77.2308 6.08815 77.2308 7.61538H75.8462L77.9231 9.69231L80 7.61538H78.6154C78.6154 6.85177 79.2364 6.23077 80 6.23077C80.7636 6.23077 81.3846 6.85177 81.3846 7.61538V10.3846C81.3846 11.1482 80.7636 11.7692 80 11.7692C79.4898 11.7692 79.0476 11.4888 78.8074 11.0769H77.3295C77.6389 12.2684 78.713 13.1538 80 13.1538C81.5272 13.1538 82.7692 11.9118 82.7692 10.3846V7.61538C82.7692 6.08815 81.5272 4.84615 80 4.84615Z' />
          <path d='M9 0C4.03711 0 0 4.03711 0 9C0 13.9629 4.03711 18 9 18C13.9629 18 18 13.9629 18 9C18 4.03711 13.9629 0 9 0ZM9 1.5C13.1514 1.5 16.5 4.84863 16.5 9C16.5 13.1514 13.1514 16.5 9 16.5C4.84863 16.5 1.5 13.1514 1.5 9C1.5 4.84863 4.84863 1.5 9 1.5ZM6 6C4.7666 6 3.75 7.0166 3.75 8.25V9.75C3.75 10.9834 4.7666 12 6 12C7.2334 12 8.25 10.9834 8.25 9.75H6.75C6.75 10.1748 6.4248 10.5 6 10.5C5.5752 10.5 5.25 10.1748 5.25 9.75V8.25C5.25 7.8252 5.5752 7.5 6 7.5C6.4248 7.5 6.75 7.8252 6.75 8.25H8.25C8.25 7.0166 7.2334 6 6 6ZM12 6C10.7666 6 9.75 7.0166 9.75 8.25V9.75C9.75 10.9834 10.7666 12 12 12C13.2334 12 14.25 10.9834 14.25 9.75H12.75C12.75 10.1748 12.4248 10.5 12 10.5C11.5752 10.5 11.25 10.1748 11.25 9.75V8.25C11.25 7.8252 11.5752 7.5 12 7.5C12.4248 7.5 12.75 7.8252 12.75 8.25H14.25C14.25 7.0166 13.2334 6 12 6Z' />
          <path d='M32 0C27.0531 0 23 4.05315 23 9C23 13.9469 27.0531 18 32 18C36.9469 18 41 13.9469 41 9C41 4.05315 36.9469 0 32 0ZM32 1.38462C36.1916 1.38462 39.6154 4.80839 39.6154 9C39.6154 13.1916 36.1916 16.6154 32 16.6154C27.8084 16.6154 24.3846 13.1916 24.3846 9C24.3846 4.80839 27.8084 1.38462 32 1.38462ZM32 3.46154C31.2385 3.46154 30.6154 4.08462 30.6154 4.84615C30.6154 5.60769 31.2385 6.23077 32 6.23077C32.7615 6.23077 33.3846 5.60769 33.3846 4.84615C33.3846 4.08462 32.7615 3.46154 32 3.46154ZM32 6.92308C30.8231 6.92308 29.9231 7.82308 29.9231 9V11.0769L30.6154 11.7692V14.5385H33.3846V11.7692L34.0769 11.0769V9C34.0769 7.82308 33.1769 6.92308 32 6.92308Z' />
        </svg>
      </a>
    </Link>
  )
}

export default CC
