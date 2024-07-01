import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <div className="relative my-8">
      <section className="w-screen max-w-full flex flex-col items-center px-8 py-24">
        <div className="w-full max-w-screen-sm border rounded border-white px-8 py-12 flex flex-col items-center gap-4">
          <h2 className=" font-display text-3xl">SIGN UP</h2>
          <p>Join us now blah blah blah</p>
          <Link
            href={"https://google.com"}
            className="grid place-content-center px-4 py-2 font-bold bg-yellow-dark rounded"
          >
            SIGN UP
          </Link>
        </div>
      </section>
      <div className=" absolute flex flex-col top-0 w-full items-center h-full px-8">
        <div className="flex flex-col w-full max-w-screen-lg h-full">
          <div className="ml-4">IMG</div>
          <div className="self-end">IMG</div>
          <div className="mt-auto">IMG</div>
          <div className="self-end mr-4">IMG</div>
        </div>
      </div>
    </div>
  );
}
