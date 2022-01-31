import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullname,
      confirmPassword,
      email,
      password,
    };
    if (!checked) return setError("Check The box before Signing Up");
    if (!fullname || !email || !password || !confirmPassword) {
      return setError("All Fields are required!");
    }
    setError("");
    setSubmitting(true);
    const res = await axios.post("http://localhost:3000/api/user/signup", data)
                .catch((data)=>{
                  if(data.message=='Request failed with status code 409') setError('Email already Exists.');
                  else setError('check your internet connection.')
                });
    if(res){
      if(res.status==201){
        setSubmitting(false)
        return router.push("./login");
      }
    }
    return setSubmitting(false)
  };

  return (
    <div className="w-full bg-red-200 -mt-4 h-full">
      <div className="rounded-lg shadow-xl bg-gray-200  p-6 sm:p-12 md:w-1/2 mx-auto mt-4">
        <div className="w-full mx-auto flex justify-center">
          <Link href="/" passHref>
            <a className="font-bold font-heading" href="#">
              <img className="h-20 w-auto" src="./logo.png" alt="logo" />
            </a>
          </Link>
        </div>
        <form>
          <div className="mb-6">
            <label
              htmfor="fullname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your FullName
            </label>
            <input
              type="text"
              id="fullname"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Gwiza Ivan"
              required=""
              value={fullname}
              onChange={(e)=>setFullname(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmfor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required=""
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmfor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              placeholder="***********"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmfor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Repeat password
            </label>
            <input
              type="password"
              id="repeat-password"
              placeholder="***********"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required=""
                onChange={() => {
                  if (checked === true) setChecked(false);
                  else setChecked(true);
                }}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmfor="terms"
                className="font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <Link href="#" passHref>
                  <a className="text-pink-900 hover:underline dark:text-blue-500">
                    terms and conditions
                  </a>
                </Link>
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
            type="button"
            disabled
            className="text-white w-full bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            registering...
          </button>
          ):(
            <button
            type="button"
            className="text-white w-full bg-pink-900 hover:bg-pink-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            Register new account
          </button>            
          )}
        </form>
        <hr className="bg-black my-4" />
        Have account?
        <Link href="./login" passHref>
          <a className="text-base font-medium text-pink-900 dark:text-red-400 hover:underline">
            Login
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Register;
