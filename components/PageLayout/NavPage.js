import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function NavPage() {
  const quantity = useSelector((state) => state.cart.quantity);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="z-10 flex justify-between text-black w-full shadow-2xl py-2 fixed sticky top-0 bg-red-100">
        <div className="px-5 xl:px-12 flex w-full items-center">
          <div className="w-3/4">
            <Link href="/" passHref>
              <a className="text-3xl font-bold font-heading">
                <img className="h-8 xl:h-24" src="./logo.png" alt="logo" />
              </a>
            </Link>
          </div>
          <div className="flex w-1/2">
            <ul className="hidden mt-2 md:flex mx-auto font-semibold font-heading space-x-12">
              <li>
                <Link href="/">
                  <a className="uppercase">Home</a>
                </Link>
              </li>
              <li>
                <Link href="./AllProduct" passHref>
                  <a className="uppercase">Collections</a>
                </Link>
              </li>
              <li>
                <a className="underline text-pink-900 font-bold hover:scale-110 hover:rotate-12" href="#">
                  ABOUT US
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-5 items-center py-2">
              <Link href="./cart" passHref>
                <a className="flex items-center hover:text-gray-600" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-4 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative pb-8 font-extrabold inline-flex rounded-full h-3 w-3 -mt-2 -500">
                      {quantity}
                    </span>
                  </span>
                </a>
              </Link>
              <Link href="./login" passHref>
                <a className="flex items-center hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </Link>
              <button
                className="navbar-burger self-center xl:hidden"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {navbarOpen ? (
        <div className="bg-black w-3/4 opacity-75">
          <ul className="text-white font-semibold font-heading w-full px-8">
            <li>
              <Link href="/" passHref>
                <a className="underline">HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/men" passHref>
                <a className="hover:underline">MEN</a>
              </Link>
            </li>
            <li>
              <Link href="/women" passHref>
                <a className="hover:underline">WOMAN</a>
              </Link>
            </li>
            <li>
              <Link href="/kids" passHref>
                <a className="hover:underline">KIDS</a>
              </Link>
            </li>
            <li>
              <Link href="/product" passHref>
                <a className="hover:underline">COLLECTION</a>
              </Link>
            </li>
            <li>
              <Link href="/trends" passHref>
                <a className="hover:underline">TRENDS</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a className="hover:underline">ABOUT</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
