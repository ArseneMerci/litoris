import Link from "next/link";
import { useSelector } from "react-redux";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Navbar = () => {
  const headerQuantity = useSelector((state) => state.cart.quantity);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const cookieCart = Cookies.get("backetitems");
  console.log("cookieCart", cookieCart);
  const router = useRouter();

  const logout =()=>{
    localStorage.clear();
    return router.push("/");
  }
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('litoris_USER_TOKEN')) 
      var loggedIn = localStorage.getItem('litoris_USER_TOKEN')
  }

  return (
    <>
      <nav className="z-10 flex justify-between text-black w-full shadow-2xl pb-4 mx-auto fixed sticky top-0  bg-red-100">
        {/* search form */}
        <div className="px-5 md:pl-8 md:pt-6 flex w-1/2 items-center">
          <div className="flex items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-6 w-4 h-6 mr-2 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              name="name"
              placeholder="Search..."
              className="w-1/2 text-sm bg-white bg-opacity-0 py-2 pl-1 border-b-2 border-gray-400 outline-none focus:border-red-600"
            />
          </div>
        </div>

        <div className="px-5 xl:px-18 w-full items-center">
          <div className="w-full flex text-center justify-center">
            <Link href="/" passHref>
              <a className="font-bold font-heading" href="#">
                <img
                  className="h-12 xl:h-32 w-auto"
                  src="./logo.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 w-full">
              <li>
                <Link href="/" passHref>
                  <a className={router.pathname == "/" ? "activeLink" : "hover:underline"}>HOME</a>
                </Link>
              </li>
              <li>
                <Link href="/men" passHref>
                  <a className={router.pathname == "/men" ? "activeLink" : "hover:underline"}>MEN</a>
                </Link>
              </li>
              <li>
                <Link href="/women" passHref>
                  <a className={router.pathname == "/women" ? "activeLink" : "hover:underline"}>WOMAN</a>
                </Link>
              </li>
              <li>
                <Link href="/kids" passHref>
                  <a className={router.pathname == "/kids" ? "activeLink" : "hover:underline"}>KIDS</a>
                </Link>
              </li>
              <li>
                <Link href="/AllProduct" passHref>
                  <a className={router.pathname == "/AllProduct" ? "activeLink" : "hover:underline"}>COLLECTIONS</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/trends" passHref>
                  <a className="hover:underline">TRENDS</a>
                </Link>
              </li> */}
              <li>
                <Link href="/about" passHref>
                  <a className={router.pathname == "/about" ? "activeLink" : "hover:underline"}>ABOUT</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* icon */}
        <div>
          <div className="hidden xl:flex items-center space-x-5 items-center h-full px-8">
            <a className="" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </a>
            <Link href="/cart" passHref>
              <a className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative pb-8 font-extrabold inline-flex rounded-full h-3 w-3 -mt-2">
                    {headerQuantity}
                  </span>
                </span>
              </a>
            </Link>
            { loggedIn?(
              <a onClick={logout} className="border-2 cursor-pointer border-black shadow-sm hover:text-white px-8 text-center text-lg font-semibold py-2 hover:bg-pink-800">
                LogOut
              </a>
              ):(
            <Link href="/login" passHref>
              <a className="border-2 border-black shadow-sm hover:text-white px-8 text-center text-lg font-semibold py-2 hover:bg-pink-800">
                Login
              </a>
            </Link>
              )
            }
          </div>
        </div>
        {/* phone format */}
        <div className="flex space-x-2">
          <Link href="#" passHref>
            <a className="md:hidden flex items-center" href="#">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative pb-8 font-extrabold inline-flex rounded-full h-3 w-3 -mt-2">
                  {headerQuantity}
                </span>
              </span>
            </a>
          </Link>
          <Link href="/login" passHref>
            <a className="flex items-center md:hidden" href="#">
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
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </Link>
          <button
            className="navbar-burger self-center md:hidden"
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
      <style jsx>
        {`
          .home {
            color: #ffffff;
          }
          a:hover {
            color: #831842;
          }
        `}
      </style>
    </>
  );
};
export default Navbar;
