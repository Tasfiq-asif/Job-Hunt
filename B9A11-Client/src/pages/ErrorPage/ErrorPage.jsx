
import { Helmet } from 'react-helmet';

import { Link, useNavigate } from "react-router-dom";

function ErrorPage() {
const navigate = useNavigate();

const goBack = () => {
  navigate(-1); // This will navigate back to the previous page in the history
};
  return (
    <section className="bg-white dark:bg-gray-900">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error 404</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div>
          <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            We can not find that page
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              type="button"
              onClick={goBack}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go back</span>
            </button>
            <Link to={"/"}>
              <button
                type="button"
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
              >
                Take me home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage