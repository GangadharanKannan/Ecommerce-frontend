import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ShimmerPostList } from "react-shimmer-effects";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";


const ProductLayout = () => {


  const {data,loading} = useFetch("https://dummyjson.com/products");


  if(loading){
    return  ( 
      <div className="p-8">
        <ShimmerPostList postStyle="STYLE_FIVE" col={4} row={3} gap={30} />
      </div>
    
    )
  }
  return (
    <>
      <section className="bg-gray-50 py-8 antialiased  md:py-8">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* Heading & Filters */}
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <span className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-primary-600 ">
                      <svg
                        className="me-2.5 h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      Home
                    </span>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                      <span className="ms-1 text-sm font-medium text-gray-900 hover:text-primary-600 md:ms-2">
                        Products
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-4 ">
            { data.map((item) =>

              <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-xl">
                <div className="h-40 w-full">
                  
                  <LazyLoadImage
                    alt=''
                    src={item.thumbnail} // use normal <img> attributes as props
                    effect="blur"
                    wrapperProps={{
                        // If you need to, you can tweak the effect transition using the wrapper style.
                        style: {transitionDelay: "1s"},
                    }}
                    className="mx-auto h-full"
                   />
                </div>
                <div className="pt-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-800 ">
                      {" "}
                      Up to {item.discountPercentage} % off{" "}
                    </span>
                  </div>
                  <span className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
                    {item.title}
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                      <svg
                        className="h-4 w-4 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900 ">
                      {item.rating}
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      ({item.stock})
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-2xl font-extrabold leading-tight text-gray-800 ">
                      ${item.price}
                    </p>
                    <Link
                      to={`/product/${item.id}`}
                      className="inline-flex items-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-2  focus:ring-gray-300"
                    >
                      Product Overview
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductLayout;
