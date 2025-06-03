import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { v4 as uuidv4 } from 'uuid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ToastContainer, toast } from "react-toastify";

const CartPage = () => {
  const { cart, total, deleteCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const tax = total > 0 ? 79 : 0;
  const finalTotal = total + tax;

  return (
    <>
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <ToastContainer position="top-center"/>
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Shopping Cart ({cart.length} items)
          </h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={uuidv4()} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <div className="shrink-0 md:order-1">
                        <LazyLoadImage
                          alt={item.title}
                          src={item.thumbnail}
                          effect="blur"
                          wrapperProps={{
                            style: { transitionDelay: "1s" },
                          }}
                          className="w-24 h-24 object-cover rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          >
                            <svg
                              className="h-3.5 w-3.5 text-gray-900"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <span className="mx-4 text-base font-medium text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          >
                            <svg
                              className="h-3.5 w-3.5 text-gray-900"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <span className="text-base font-medium text-gray-900 hover:underline">
                          {item.title}
                        </span>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
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
                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                              />
                            </svg>
                            Add to Favorites
                          </button>
                          <button
                            onClick={() => deleteCart(item)}
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
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
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-gray-900">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Subtotal
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        ${total.toFixed(2)}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        ${tax.toFixed(2)}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-4">
                      <dt className="text-lg font-bold text-gray-900">
                        Total
                      </dt>
                      <dd className="text-lg font-bold text-gray-900">
                        ${finalTotal.toFixed(2)}
                      </dd>
                    </dl>
                  </div>
                  <button
                    onClick={() => {
                      toast.success("Delivered Soon! 📦")
                    }}
                    type="button"
                    className="w-full rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                  >
                    Get Now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
