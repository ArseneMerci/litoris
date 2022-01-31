import Navbar from "./Navbar";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import Collections from "../pages/Collections";
import AboutCollections from "../pages/AboutCollections";
import AboutCollectionFinal from "../pages/AboutCollectionFinal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "100vh",
    transition: {
      staggerChildren: 1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
      delay: 0.5,
    },
  },
};

const variants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 1,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
      delay: 0.9,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Home = () => {
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/about");
  };
  const shopClick = (e) => {
    e.preventDefault();
    router.push("/AllProduct");
  };
  const moreClick = (e) => {
    e.preventDefault();
    router.push("/about");
  };
  const menClick = (e) => {
    e.preventDefault();
    router.push("/men");
  };
  const womenClick = (e) => {
    e.preventDefault();
    router.push("/women");
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="">
        <header className="blog py-12 w-full">
          <div className="px-5 mb-4 xl:mx-auto xl:mx-2">
            <div
              className="bg-cover"
              style={{
                height: 500,
                // backgroundPosition:"center",
                backgroundRepeat: "no-repeat",
                backgroundImage:
                  "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5) ),url(images/em2.jpg)",
              }}
            >
              <div className="flex items-center justify-center  text-white">
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  className="relative w-full text-center md:text-center"
                >
                  <AnimatePresence>
                    <motion.h1
                      exit={{ y: -1000 }}
                      className="sm:text-sm md:text-4xl pt-6 text-yellow-50 xl:text-6xl md:px-4 font-serif font-bold"
                    >
                      Rwanda Leading Fashion House
                    </motion.h1>
                  </AnimatePresence>
                  <div className="py-5 mx-2">
                    <h2 className="pb-10 sm:text-xs md:text-lg xl:text-lg text-yellow-50 mb-8">
                      <strong>Shop with LitoRis:</strong> À la mode, Smart
                      casual, Timeless, Trendy
                    </h2>

                    <div className="flex flex-wrap w-full">
                      <motion.p
                        variants={childVariants}
                        className="xl:w-1/4 w-full md:pl-6 xl:ml-8 -mt-12 xl:mt-16 text-left text-yellow-50"
                      >
                        <strong>Lito Ris Design</strong> is a fashion brand in
                        Rwanda that specializes in top-of-the-range items for
                        Men, Women, and Children.
                      </motion.p>
                      <motion.div
                        variants={childVariants}
                        className="bg-black rounded-3xl xl:px-8 bg-opacity-50 -mb-20 xl:mt-20 md:w-full xl:w-1/2 w-full md:ml-2 md:mr-8 "
                        // style={{ width: "52vw" }}
                      >
                        <div className="flex justify-center text-yellow-50">
                          <div className="w-full">
                            <div className="rounded-t-3xl">
                              <h1 className="text-sm md:text-2xl pt-4 text-yellow-50 font-bold">
                                Launched Collections
                              </h1>
                            </div>
                            <div className="xl:text-6xl text-2xl md:text-3xl md:font-serif xl:font-serif xl:-mx-8 my-2">
                              <Collections />
                            </div>
                            <p className="my-2">Valid on All Sizes</p>
                            <motion.button
                              variants={buttonVariants}
                              whileHover="hover"
                              className="bg-black py-2 xl:px-8 px-4 -mx-4 mt-2 mb-4"
                              onClick={shopClick}
                            >
                              shop Now
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    variants={childVariants}
                    className="justify-center mx-2 mx-auto md:ml-16 xl:-mt-12"
                  >
                    <div className="rounded-full -mt-16 xl:-mt-4 md:mt-4 md:mr-80 bg-yellow-50 md:w-52 h-10 xl:visible invisible">
                      <motion.button
                        variants={childVariants}
                        whileHover="hover"
                        className="py-2 text-black font-bold "
                        onClick={moreClick}
                      >
                        View More
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* shop type */}
      <motion.section
        className="-mt-8 mb-8 text-center w-full justify-center items-center bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),url(logo.png)",
          backgroundSize: 500,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          <motion.h2
            exit={{ y: -1000 }}
            className="text-2xl text-black font-serif font-bold md:text-6xl md:font-extrabold"
            // style={{ fontSize: "4vw" }}
          >
            My Style, My Pride
          </motion.h2>
        </AnimatePresence>
        <motion.p
          variants={childVariants}
          className="xl:py-4 py-2 -mt-2 text-xs md:text-xl"
        >
          Shop clothes designed for fashion
        </motion.p>
        <motion.div
          variants={childVariants}
          className="flex w-full space-x-5 justify-center pb-8"
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="xl:w-1/2 hover:bg-pink-900 bg-black xl:w-40 rounded-full border text-xs shadow-lg xl:text-sm text-white p-2 cursor-pointer"
          >
            <button onClick={menClick}>SHOP MEN</button>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="xl:w-1/2 bg-black hover:bg-pink-900 xl:text-sm rounded-full xl:w-40 border text-xs shadow-lg text-white p-2 cursor-pointer"
          >
            <button onClick={womenClick}>SHOP WOMEN</button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* about us */}
      <section
        className="w-full py-12 bg-cover bg-fixed text-center text-white content-center"
        style={{
          // height: "46vh",
          content: "fit",
          backgroundImage:
            "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),url(images/grouped2.jpg)",
        }}
      >
        <div className="flex w-full h-full justify-center items-center">
          <div className="xl:w-3/4 w-full  mx-auto ">
            <AboutCollectionFinal />
            <motion.button
            variants={buttonVariants}
            whileHover="hover"
              className="bg-pink-900 text-xs w-40 md:w-40 xl:w-48 xl:mt-8 md:mt-8 text-white md:py-2 rounded-3xl"
              onClick={handleClick}
            >
              Discover More
            </motion.button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
