import clsx from 'clsx'
import Link from 'next/link'
import React, { forwardRef } from 'react'

/**
 * A nice button component using the Link component from Next.js
 */
const Button = forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>(
  function Button({ className, href, children, ...props }, ref) {
    return (
      <Link href={href as string}
        ref={ref}
        className={clsx('font-display w-max grid place-content-center px-4 py-2 font-bold bg-yellow-dark rounded cursor-pointer', className)}
        {...props}
      >
        {children}
      </Link>
    )
  }
)

export default Button