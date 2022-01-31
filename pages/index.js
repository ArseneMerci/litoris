import Header from "../components/Head";
import IndexProducts from "../components/indexProducts";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import Home from "../components/Home";
// import datas from "../services/data";
import Navbar from "../components/Navbar";
import HeaderBar from "../components/header_bar";
import HorizontalLine from "../components/HorizontalLine";
import Link from "next/link";
import axios from "axios";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function index({ datas }) {
  const menDatas = datas.filter((data) => data.category == "men");
  const womenDatas = datas.filter((data) => data.category == "women");
  const kidsDatas = datas.filter((data) => data.category == "kids");
  const sandalsDatas = datas.filter((data) => data.category == "sandals");
  const men = menDatas.slice(0, 4);
  const women = womenDatas.slice(0, 4);
  const kids = kidsDatas.slice(0, 4);
  const sandals = sandalsDatas.slice(0, 4);

  return (
    <>
      <Header title="Lito Ris Design" />
      <HeaderBar />
      <Layout>
        <div className="h-full overflow-x-hidden mb-8">
          {/* Homepage content*/}
          <Home />
          {/* our product */}

          <div
            className="justify-center w-full bg-yellow-50 pb-4 bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage:
                "linear-gradient(rgba(254,252,232, 0.9), rgba(254,252,232, 0.9)),url(logo.png)",
              backgroundSize: "40vw",
            }}
          >
            <h1
              className="md:text-4xl text-xl md:py-8 xl:py-8 pt-5 font-serif font-black text-center capitalize"
              // style={{ fontSize: "3vw" }}
            >
              Our Products
            </h1>
            <div
              className="flex md:space-x-20 space-x-2 text-sm justify-center"
              // style={{ fontSize: "2vw" }}
            >
              <Link href="#" passHref>
                <motion.a
                  whileHover={{ scale: 1.3, originX: 0, color: "#831842" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="underline font-bold text-center uppercase text-xs"
                  // style={{ fontSize: "1vw" }}
                >
                  All
                </motion.a>
              </Link>

              <Link href="#" passHref>
                <motion.a
                  whileHover={{ scale: 1.3, originX: 0, color: "#831842" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center uppercase text-xs"
                >
                  On Sale
                </motion.a>
              </Link>
              <Link href="#" passHref>
                <motion.a
                  whileHover={{ scale: 1.3, originX: 0, color: "#831842" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center uppercase text-xs"
                >
                  Trending
                </motion.a>
              </Link>
              <Link href="#" passHref>
                <motion.a
                  whileHover={{ scale: 1.3, originX: 0, color: "#831842" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className=" text-center uppercase text-xs"
                >
                  ARRIVAL
                </motion.a>
              </Link>
            </div>
          </div>
        </div>
        <div className="-mt-8 mb-8 pb-8 bg-yellow-50">
          <IndexProducts title="Men" datas={men} />
          <HorizontalLine />
          <IndexProducts title="Women" datas={women} />
          <HorizontalLine />
          <IndexProducts title="Kids" datas={kids} />
          <HorizontalLine />
          <IndexProducts title="Sandals" datas={sandals} />
        </div>
        {/* Footer */}
        {/* Whatsapp icon to contact on whatsapp */}
        <Whatsapp />
      </Layout>
    </>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products/all");
  const { data } = res;
  return {
    props: {
      datas: data,
    },
  };
};
