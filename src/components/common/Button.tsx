import clsx from 'clsx';
import Link from 'next/link';
import React, { forwardRef } from 'react';

/**
 * A nice button component using the Link component from Next.js
 */
const Button = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'>
>(function Button({ className, href, children, ...props }, ref) {
  return (
    <Link
      href={href as string}
      ref={ref}
      className={clsx(
        'font-bold text-black w-max grid place-content-center px-8 py-2 bg-yellow-light rounded cursor-pointer hover:scale-105 transition-all',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
});

export default Button;
