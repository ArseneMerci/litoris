import Head from "next/head";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import PageLayout from "../components/PageLayout/PageLayout";
const About = () => {
  return (
    <PageLayout>
      <div className="overflow-x-hidden mb-8">
        <header
          className="bg-cover"
          style={{
            height: 400,
            backgroundImage:
              "linear-gradient(rgba(255,255,255, 0), rgba(0,0,0, 0.9)),url(images/about.jpg)",
          }}
        >
          <div className="flex w-full justify-center ">
            <div className="mt-56 h-full bg-black px-8 py-2 justify-center flex">
              <Link href="/">
                <a>
                  <h1 className="text-white font-bold cursor-pointer">Home</h1>
                </a>
              </Link>{" "}
              <p className="px-2 text-white font-bold cursor-default">/</p>
              <h1 className="text-white font-bold text-pink-900 cursor-default">
                About Us
              </h1>
            </div>
          </div>
        </header>

        {/* <!-- component --> */}
        <div className="w-full h-full bg-white flex flex-row flex-wrap p-3">
          <div className="mx-auto w-full">
            {/* <!-- Profile Card --> */}
            <div className="rounded-lg shadow-lg bg-white w-full flex flex-row flex-wrap p-3 antialiased">
              <div className="md:w-1/3 w-full">
                <img
                  className="shadow-lg antialiased rounded-tl-3xl"
                  src="./images/emmalito.jpg"
                  style={{ height: 500 }}
                />
              </div>
              <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                  <div className="text-4xl text-black leading-tight font-serif">
                    Emmalito Murenzi
                  </div>
                  <div className="text-normal text-pink-900 hover:text-gray-400 cursor-pointer mb-4">
                    <span className="border-b border-dashed border-gray-900 pb-1">
                      CEO and Founder
                    </span>
                  </div>
                  <div className="text-left text-lg">
                    <p>
                      <strong>Emmalito Murenzi</strong> is a popular male
                      Rwandan Fashion Designer and TV Presenter for 8yrs of
                      experience as well. Emmalito was born and raised in
                      Kigali, the capital city of Rwanda. He earned a master’s
                      degree in International relations and Diplomacy but
                      decided to pursue his love of fashion. Before he went into
                      the fashion industry, he worked in Events management,
                      marketing and branding field. He is known as a person who
                      played a big role in Rwandan fashion industry since 2013
                      through organizing and Mc’ing different fashion shows that
                      include, Culture fashion week, Modest fashion show, Kigali
                      fashion show and many more ...
                    </p>
                    <br />
                    <p>
                      <strong>Emmalito Murenzi</strong> specializes in styling
                      men, women and children. He has <strong>clients</strong> in
                      other countries like America, Canada, Australia, Poland,
                      Switzerland, Finland, France, and many more. Through his
                      creativity of designing African fabrics, He is on a
                      mission of taking African prints on an international level
                      and promoting African culture through fashion.
                    </p>
                  </div>
                  <div className="md:space-x-10 space-x-4 flex text-xl text-gray-600 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">
                    Connect: &nbsp;
                    <Link
                      href="https://www.facebook.com/murenzi.emmalito"
                      passHref
                    >
                      <a target="_blank">
                        <svg
                          className="w-6 h-6 text-pink-900 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    </Link>
                    <Link href="https://twitter.com/emmalito2" passHref>
                      <a target="_blank">
                        <svg
                          className="w-6 h-6 text-pink-900 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/emmanuel-murenzi-24164a94/"
                      passHref
                    >
                      <a target="_blank">
                        <svg
                          className="w-6 h-6 text-pink-900 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                      </a>
                    </Link>
                    <Link href="https://www.instagram.com/emma_lito/" passHref>
                      <a target="_blank">
                        <svg
                          className="w-6 h-6 text-pink-900 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Profile Card --> */}
          </div>
        </div>
        {/* about us  */}
        <section className="bg-yellow-50 -mt-8 py-8">
          <div className="my-8 mx-8">
            <div className="text-normal text-pink-900 hover:text-gray-300 cursor-pointer mb-4">
              <span className="border-b border-dashed border-gray-500 pb-1">
                OUR STORY
              </span>
            </div>
            <h2 className="text-2xl font-semibold">My Style, My Pride</h2>
            <h1 className="text-4xl font-black font-serif mt-2 pb-5">
              The New Way to advance
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
              <p className="w-full text-xl">
                <strong>Lito Ris Design </strong>is a fashion brand from Rwanda
                that specializes in top-of-the-range items for Men, Women and
                Children. <strong>Lito Ris Design </strong>has become one of
                Rwanda’s foremost fashion house, consistently delivering
                high-quality,
              </p>
              <p className="w-full text-xl">
                luxury pieces with emphasis on unrivalled craftsmanship and
                tailoring. Drawing inspiration from the essence of each client’s
                individuality, Lito Ris is known to craft one-of-a-kind
                ensembles that become an extension of the wearer.
              </p>
              <img src="./logo.png" className="md:-mt-36" />
            </div>
            <p className="text-xl mb-4">
              The brand is committed to providing a unique look and feel through
              statement collections, which are responsibly sourced and ethically
              handcrafted.
            </p>
            <span className="text-xl font-bold font-serif ">Mission:</span>
            <ul className="list-disc ml-8 mb-4">
              <li>
                To create values African fabrics to an international market and
                make a difference
              </li>
              <li>
                To promote emerging designers and re-launching of established
                brands
              </li>
              <li>
                To inspire moments of optimism, joy, and happiness in Fashion
                Design{" "}
              </li>
            </ul>
            <span className=" border-gray-500 pb-1 text-xl font-bold py-2 font-serif">
              Vision:
            </span>
            <ul className="list-disc ml-8">
              <li>
                To be a leading Fashion House with creative designs that defines
                the uniqueness of African fabrics{" "}
              </li>
              <li>
                Connecting people around the World to enjoy African Fabrics
              </li>
              <li>Helping people to realize their dreams in fashion</li>
            </ul>
          </div>
        </section>
        {/* partnership */}
        <section className="-mt-4">
          <div className="scroll-box my-4">
            <h2 className="text-center text-4xl font-black font-serif mt-2 mb-8">
              OUR CLIENTS
            </h2>
            <div className="scroll-container mx-auto">
              <span id="scroll-element">
                KIGALI DATES LTD &nbsp; &nbsp; &nbsp; THE CAVE LTD &nbsp; &nbsp;
                &nbsp; GIST LTD &nbsp; &nbsp; &nbsp; BRAINEYES LTD &nbsp; &nbsp;
                &nbsp; ITDEVES LTD &nbsp; &nbsp; &nbsp; SALITAN LTD &nbsp;
                &nbsp; &nbsp;INDIVIDUALS
              </span>
            </div>
            <div className="h-8" />
          </div>
        </section>

        {/* our location */}
        <section className="mx-4 md:mx-20 mb-8">
          <div className="justify-center py-10 my-4">
            <p className="text-4xl font-black text-center  items-center font-serif pb-5">
              Our Location
            </p>
          </div>
          <div className="flex flex-wrap bg-white w-full -mt-12 ">
            <div className="md:w-1/2 w-full rounded shadow hover:shadow-lg bg-white p-8">
              <h1 className="text-4xl mb-4 cursor-default">Contact Us</h1>
              <p className="text-sm cursor-default">
                Feel free to drop us a line via this contact form, or visit our
                headquarter. The Lito Ris Design is always looking for feedbacks
                and comments from you to improve our service quality. Our
                working hours is from 8:00AM to 8:00PM from Monday to Saturday
                (except holidays and sunday).
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4 pb-16">
                <div className="flex">
                  <div className="w-1/4 mt-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="w-3/4">
                    <h1 className="text-xl font-semibold text-pink-900">
                      Address
                    </h1>
                    <p className="text-xs cursor-default">
                      KK 15 Rd, SILVER BACK MALL/SONATUBE (Ground Floor)
                    </p>
                    <p className="text-sm cursor-default font-semibold">
                      Kigali/RWANDA
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-1/4 mt-2">
                    <img src="https://img.icons8.com/ios/25/000000/clock--v1.png" />
                  </div>
                  <div className="w-3/4">
                    <h1 className="text-xl font-semibold text-pink-900">
                      Opening Hours
                    </h1>
                    <p className="text-sm font-semibold">Monday–Saturday</p>
                    <p className="text-sm cursor-default">08:00am – 08:00pm</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-1/4 mt-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="w-3/4">
                    <h1 className="text-xl font-semibold text-pink-900">
                      Phone
                    </h1>
                    <div className="grid grid-cols-1">
                      <a className="text-sm cursor-pointer hover:text-pink-900 font-semibold">
                        +250 782 866 080
                      </a>
                      <a className="text-sm cursor-pointer hover:text-pink-900">
                        +250 783 639 943
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-1/4 mt-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="w-3/4">
                    <h1 className="text-xl font-semibold text-pink-900">
                      Email
                    </h1>
                    <div className="grid grid-cols-1">
                      <Link href="mailto: litorisdesign@gmail.com">
                        <a className="text-sm cursor-pointer hover:text-pink-900 font-semibold">
                          litorisdesign@gmail.com
                        </a>
                      </Link>
                      <Link href="mailto: k.plaz66@gmail.com">
                        <a className="text-sm cursor-pointer hover:text-pink-900">
                          k.plaz66@gmail.com
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full bg-gray-200">
              <h1 className="my-8 text-4xl px-6">Get in touch</h1>
              <form className="p-6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <label htmfor="name" className="hidden">
                    Your name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmfor="email" className="hidden">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmfor="tel" className="hidden">
                    Your phone
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Your phone"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmfor="text" className="hidden">
                    Your message
                  </label>
                  <textarea
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Your message"
                    className="w-100 mt-2 py-1 h-32 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-pink-900 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="text-center justify-center">
          <div className="bg-gray-200 w-full rounded shadow hover:shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4634380784514!2d30.100547214224314!3d-1.9686432985647826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca76b2e5951ad%3A0x8d8af363e7799732!2sLito%20Ris%20Design!5e0!3m2!1sen!2srw!4v1643460572697!5m2!1sen!2srw"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
export default About;
