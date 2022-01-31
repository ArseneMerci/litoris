import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

const Products = ({ datas, title }) => {
  const nextVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 120 },
    },
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: 5,
      },
    },
  };
  return (
    <section className="xl:pt-3 sm:-pt-3 md:pt-3 bg-yellow-50">
      <div className="flex -ml-4 space-x-8 md:mx-16 pl-8 items-start">
        <p
          className="md:w-3/4 float-left font-serif text-yellow-400 cursor-default"
          // style={{ fontSize: "2vw" }}
        >
          {title}'s Collections
        </p>
        <Link href={title.toLowerCase()} passHref>
          <motion.a
            variants={nextVariants}
            whileHover="hover"
            className="xl:pl-28 float-right text-pink-900 flex right-0 items-end"
            // style={{ fontSize: "1.5vw" }}
          >
            View More <MdArrowRightAlt className="mt-1.5 animate-bounce" />
          </motion.a>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-2 xl:grid-cols-4 md:grid-cols-2 md:gap-4 mt-2 md:mx-20">
        {datas.map((data) => (
          <Link href={`/product/${data.slug}`} passHref>
            <div
              key={data.id}
              className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 cursor-pointer bg-white"
            >
              <a href="#" className="">
                <h1 className="text-gray-800 font-semibold text-2xl hover:text-red-500 transition duration-300 ease-in-out text-center pt-2">
                  {data.name}
                </h1>
              </a>
              <motion.div
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.3 }}
                className="overflow-hidden relative m-4"
                style={{ height: "250px" }}
              >
                <img
                  className="resize-none object-fill transition duration-700 ease-in-out group-hover:opacity-60"
                  src={data.frontImage}
                  alt={data.name}
                  // style={{ width: "100%", height: "100%", display: "block" }}
                />
              </motion.div>
              <div className="px-4 pb-3 bg-white">
                <div className="flex w-full">
                  <div className="flex w-3/4" style={{ fontSize: "1vw" }}>
                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                    <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
                    <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
                    <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
                    <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
                  </div>
                  <div className="w-1/2 ml-4 text-sm text-gray-600 float-right -mt-0.5 text-yellow-400">
                    {" "}
                    3(Reviews)
                  </div>
                </div>

                <div className="flex py-2">
                  <div className="w-3/4">
                    <button
                      className="py-1 -mt-1 text-sm font-bold "
                      style={{ color: "#831842" }}
                    >
                      Shop now
                    </button>
                  </div>
                  <div className="flex space-x-4 mr-2">
                    {data.discPrice == 0 ? (
                      <p className="mr-2 text-sm text-red-600 line-through">
                        {" "}
                      </p>
                    ) : (
                      <div className="relative">
                        <p className=" ml-6 md:ml-12 text-sm text-red-600 line-through ">
                          ${data.discPrice}
                        </p>
                      </div>
                    )}
                    <p className="md:ml-24 text-sm text-gray-600 float-right font-bold">
                      ${data.actualPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
