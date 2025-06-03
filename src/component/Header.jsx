import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { v4 as uuidv4 } from 'uuid';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsAccountOpen(false); // Close account dropdown when opening cart
  };

  const toggleAccount = () => {
    setIsAccountOpen(!isAccountOpen);
    setIsCartOpen(false); // Close cart dropdown when opening account
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#myCartDropdown1") &&
        !event.target.closest("#myCartDropdownButton1")
      ) {
        setIsCartOpen(false);
      }
      if (
        !event.target.closest("#userDropdown1") &&
        !event.target.closest("#userDropdownButton1")
      ) {
        setIsAccountOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const { cart , deleteCart } = useContext(CartContext);

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="#" title="" className="">
                  <h1 className="text-white font-bold text-2xl">Ecom</h1>
                </a>
              </div>
              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                <li>
                  <Link
                    to="/"
                    title=""
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    Home
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link
                    to="/product"
                    title=""
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    Products
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link
                    to="/about"
                    title=""
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center lg:space-x-2">
              <button
                id="myCartDropdownButton1"
                onClick={toggleCart}
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <span className="sr-only">Cart</span>
                <svg
                  className="w-5 h-5 lg:me-1"
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
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
                <span className="hidden sm:flex">My Cart</span>
                <svg
                  className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
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
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="myCartDropdown1"
                className={`${
                  isCartOpen ? "block" : "hidden"
                } absolute right-7 top-16 z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg `}
              >
                {cart && cart.map((item) => (
                  <div key={uuidv4()} className="grid grid-cols-2">
                    <div>
                      <span
                        className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline"
                      >
                        {item.title}
                      </span>
                      <p className="mt-0.5 truncate text-sm font-normal text-gray-500">
                        {item.price * item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-6">
                      <p className="text-sm font-normal leading-none text-gray-500">
                        Qty: {item.quantity}
                      </p>
                      <button
                        onClick={() => deleteCart(item)}
                        data-tooltip-target="tooltipRemoveItem1a"
                        type="button"
                        className="text-red-600 hover:text-red-700"
                      >
                        <span className="sr-only"> Remove </span>
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}

                <Link
                  to="/cart"
                  title=""
                  className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                  role="button"
                >
                  {" "}
                  Proceed to Checkout{" "}
                </Link>
              </div>
              <button
                id="userDropdownButton1"
                onClick={toggleAccount}
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <svg
                  className="w-5 h-5 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Account
                <svg
                  className="w-4 h-4 text-gray-900 dark:text-white ms-1"
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
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="userDropdown1"
                className={`${
                  isAccountOpen ? "block" : "hidden"
                } absolute px-3 right-7 top-16 z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white antialiased shadow`}
              >
                <ul className="p-2 text-start text-sm font-medium text-gray-900">
                  <li>
                    <Link
                      to="/"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      {" "}
                      My Account{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      {" "}
                      My Orders{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
