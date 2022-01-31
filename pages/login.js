import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('litoris_USER_TOKEN')) {
      return router.push("/");
    }
  }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    };
    if (!email || !password) {
      return setError("All Fields are required!");
    }
    setError("");
    setSubmitting(true);
    const res = await axios.post("http://localhost:3000/api/user/login", data)
                .catch((data)=>{
                  if(data.message=='Request failed with status code 404' || data.message=='Request failed with status code 400' ) setError("Email or password doesn't Exist.");
                  else setError('check your internet connection.')
                });
    if(res){
      if(res.status==200){
        localStorage.setItem('litoris_USER_TOKEN', res.data.data.token);
        localStorage.setItem('litoris_USER_FULLNAME', res.data.data.fullname);
        setSubmitting(false)
        return router.push("/");
      }
    }
    return setSubmitting(false)
  };

  return (
    <div>
      <div className="flex items-center min-h-full py-8 px-6 bg-red-100 dark:bg-blue-900">
        <div className="flex h-full max-w-4xl mx-auto overflow-hidden bg-red-100 ">
          <div className="flex flex-col overflow-y-auto md:flex-row rounded shadow-xl">
            <div className="h-full md:h-full pt-20 bg-cover bg-red-100 md:w-1/2">
                <h1 className="text-3xl font-bold ml-8 text-pink-900 underline">
                Welcome
              </h1>
              <p className="text-gray-400 pt-10 w-1/2 mb-8">
              Good to see you again. Kindly, join and find your lovely and exciting clothes to wear and stay as a classic person.
              </p>
            </div>
            <div className="rounded-lg shadow-xl bg-gray-200 flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <div className="w-full mx-auto flex justify-center">
                  <Link href="/" passHref>
                    <a className="font-bold font-heading" href="#">
                      <img
                        className="h-20 w-auto"
                        src="./logo.png"
                        alt="logo"
                      />
                    </a>
                  </Link>
                </div>
                <p className="text-gray-500 text-center">
                My Style, My Pride
                </p>
                <form>
                  <div className="mb-6 mt-4">
                    <label
                      Htmfor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@gmail.com"
                      required=""
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      Htmfor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="***********"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        Htmfor="remember"
                        className="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {error ? (
                    <p className="text-rose-700 text-center italic uppercase pb-2 font-weight-bold text-lg font-mono">
                      {error}
                    </p>
                  ) : null}
                {submitting ? (
                  <button
                    type="submit"
                    disabled
                    className="text-white bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Loging In...
                  </button>
                  ):(
                    <button
                    type="submit"
                    className="text-white bg-pink-900 hover:bg-pink-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                  )}
                </form>

                <hr className="my-2 bg-black" />
                <div className="flex mt-2">
                  <p className="">
                    <Link href="#" passHref>
                      <a className="text-base font-medium text-gray-600 hover:text-pink-900 dark:text-blue-400 hover:underline">
                        Forgot your password?
                      </a>
                    </Link>
                  </p>
                  <p className=" ml-8">
                    <Link href="./register" passHref>
                      <a className="text-base font-medium text-pink-900 hover:text-pink-900 dark:text-blue-400 hover:underline">
                        Register
                      </a>
                    </Link>
                  </p>
                </div>
                <Link href="/" passHref>
                  <a className="text-base font-medium text-pink-900 hover:text-pink-900 dark:text-blue-400 hover:underline">
                    Back home
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
