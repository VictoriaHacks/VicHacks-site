import React from 'react';
import Button from '../common/Button';
import Link from 'next/link';

interface props {
  href: string;
  title: string;
  body: string;
  borderStyle?: string;
  buttonStyle?: string;
}

export default function EducationBox({
  href,
  title,
  body,
  borderStyle,
  buttonStyle,
}: props) {
  return (
    <div
      className={`p-8 border-b-8 flex flex-col gap-2 ${borderStyle} bg-opacity-0 hover:bg-opacity-10 transition-all`}
    >
      <h2 className="font-bold text-2xl">{title}</h2>
      <p>{body}</p>
      <Link
        href={href}
        className={` mt-auto font-bold text-white w-max grid place-content-center px-8 py-2 rounded cursor-pointer hover:scale-105 transition-all ${buttonStyle}`}
      >
        Learn More
      </Link>
    </div>
  );
}
