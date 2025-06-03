import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ShimmerContentBlock } from "react-shimmer-effects";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(`https://dummyjson.com/products/${id}`);

  const { addCart } = useContext(CartContext);

  if (loading) {
    return (
      <div className="my-32 mx-10">
        <ShimmerContentBlock
          title
          text
          cta
          thumbnailWidth={370}
          thumbnailHeight={370}
        />
      </div>
    );
  }

  return (
    <>
      <section className="py-8 bg-white md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <ToastContainer position="top-center"/>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <LazyLoadImage
                alt=""
                src={data.thumbnail} // use normal <img> attributes as props
                effect="blur"
                wrapperProps={{
                  // If you need to, you can tweak the effect transition using the wrapper style.
                  style: { transitionDelay: "1s" },
                }}
                className="mx-auto h-full"
              />
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-3xl font-semibold text-gray-900 ">
                {data.title}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                  ${data.price}
                </p>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-700">
                    ({data.rating})
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline "
                  >
                    {data.stock} Reviews
                  </a>
                </div>
              </div>
              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button
                  onClick={() => {
                    addCart(data);
                    toast.success("Added to Cart");
                  }}
                  className="text-white mt-4 sm:mt-0 bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
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
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {data.description}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                ipsa ve consequuntur dolorem expedita ipsam? Vero?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
