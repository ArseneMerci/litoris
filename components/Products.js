import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", delay: 0.2 },
  },
  exit: {
    y: "-100vw",
    transition: { ease: "easeInOut" },
  },
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
      delay: 1.9,
    },
  },
};

const Products = ({ datas, title }) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pb-20 pt-3 bg-yellow-50"
    >
      <div className="justify-center w-full">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          className="md:text-4xl py-8 pt-5 font-black text-center font-serif underline decoration-dotted"
        >
          {title}
        </motion.h1>
        <div className="flex text-xs md:space-x-20 space-x-2 md:text-lg justify-center md:justify-center">
          <Link href="#" passHref>
            <motion.a
              whileHover={{ scale: 1.3, originX: 0, color: "#831842" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="underline font-bold uppercase"
            >
              All Products
            </motion.a>
          </Link>

          <Link href="#" passHref>
            <motion.a
              whileHover={{ scale: 1.3, originX: 0, color: "#831842" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="uppercase hover:underline"
            >
              On Sale
            </motion.a>
          </Link>
          <Link href="#" passHref>
            <motion.a
              whileHover={{ scale: 1.3, originX: 0, color: "#831842" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="uppercase hover:underline"
            >
              Trending Now
            </motion.a>
          </Link>
          <Link href="#" passHref>
            <motion.a
              whileHover={{ scale: 1.3, originX: 0, color: "#831842" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="uppercase hover:underline"
            >
              NEW ARRIVAL
            </motion.a>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-4 mt-8 md:mx-20">
        {datas.map((data) => (
          <Link href={`/product/${data.slug}`} passHref>
            <div
              key={data.id}
              className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group"
            >
              <motion.div
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="overflow-hidden relative"
                style={{ height: "35vh", display: "block" }}
              >
                <img
                  className="resize-none object-cover transition duration-700 ease-in-out group-hover:opacity-60"
                  src={data.frontImage}
                  alt={data.name}
                  // style={{ width: "100%", height: "100%", display: "block" }}
                />
              </motion.div>
              <div className="px-4 py-3 bg-white">
                <div className="flex">
                  <div className="flex w-3/4">
                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                    <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
                    <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
                    <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
                    <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
                  </div>
                  <div className="w-1/2 ml-4 text-sm text-gray-600 float-right -mt-0.5 text-yellow-400">
                    {" "}
                    1(Reviews)
                  </div>
                </div>
                <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                  {data.name}
                </h1>
                <div className="flex pt-2">
                  <div className="w-3/4 flex">
                    {data.discPrice == 0 ? (
                      <p className="mr-2 text-sm text-red-600 line-through">
                        {" "}
                      </p>
                    ) : (
                      <p className="mr-2 text-sm text-red-600 line-through">
                        ${data.discPrice}
                      </p>
                    )}
                    <p className="mr-2 text-sm text-gray-600">
                      ${data.actualPrice}
                    </p>
                  </div>
                  <div className="">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      className="text-white py-1 px-4 -mt-0.5 text-xs ml-20"
                      style={{ backgroundColor: "#831842" }}
                    >
                      Shop
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};
export default Products;
