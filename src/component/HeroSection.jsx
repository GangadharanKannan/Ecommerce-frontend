import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <>
      <section className="bg-white py-8 antialiased  md:py-16">
        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
          <div className="content-center justify-self-start md:col-span-7 md:text-start ms-10">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl">
              Shop Your Favourite
              <br />
              Up to 50% OFF!
            </h1>
            <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">
              Don't Wait - Limited Stock at Unbeatable Prices!
            </p>
            <Link
              to="/product"
              className="inline-block rounded-lg bg-blue-400 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              Shop Now
            </Link>
          </div>
          <div className="hidden md:col-span-5 md:mt-0 md:flex">
            <img
              className=""
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg"
              alt="shopping illustration"
            />
            {/* <img
              className="hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg"
              alt="shopping illustration"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
