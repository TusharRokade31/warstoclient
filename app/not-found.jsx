import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="flex items-center h-full p-36 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 w-full mb-8 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href={"/"}>
          <button
            className="select-none mt-5 rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Back to homepage
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
