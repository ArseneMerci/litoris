import React from "react";
import { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
// import datas from "../../services/data";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../public/css/add.module.css";
import Cookies from "js-cookie";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Product({ product }) {
  if (!product) {
    return <div>Product Not Found</div>;
  }
  const router = useRouter();

  const [size, setSize] = useState("");
  const [color, setColor] = useState("black");
  const [item, setItem] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);

  const price = product.discPrice;
  const dispatch = useDispatch();

  let incrementproductQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  let decrementproductQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const submitHandler = () => {
    dispatch(
      addProduct({ ...product, size, color, price, item, productQuantity })
    );
    Cookies.set('backetitems', productQuantity);
    router.push("/cart");
  };
  return (
    <Layout>
      <Link href="../AllProduct" passHref>
        <div className="mt-8 md:ml-8 py-4 font-bold text-pink-900 flex cursor-pointer">
          <MdKeyboardBackspace className="mt-1" />
          Back To All Product
        </div>
      </Link>
      <div className="flex flex-wrap overflow2-hidden mb-16">
        <div className="md:w-1/2 w-full">
          <div className="shadow-md bg-pink-900 px-5 mx-8">
          <Slide easing="ease" duration={5000} arrows={false}>
        <div className="each-slide">
          <img
            className="h-80 w-full object-contain "
            src={product.frontImage}
            alt={product.name}
            // style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>
        <div className="each-slide">
          <img
            className="h-80 w-full object-contain "
            src={product.rightImage}
            alt={product.name}
            // style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>
        <div className="each-slide">
          <img
            className="h-80 w-full object-contain "
            src={product.leftImage}
            alt={product.name}
            // style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>
      </Slide>
          </div>
          <div className="bg-white shadow-xl md:mx-8 mb-8">
            <h1 className="w-full py-2 text-3xl flex justify-center font-serif underline decoration-pink-900">
              Select Color
            </h1>
            <div
              className="flex flex-wrap space-x-1 md:p-4 py-2 space-y-1"
              style={{ backgroundColor: "#C4C4C4" }}
            >
              {product.colors.map((color) => (
                <div
                  key={color}
                  onClick={(e) => setColor(color)}
                  className="flex justify-center space-x-2 shadow-2xl border-shadow border-2 bg-white hover:border-black hover:border-dotted px-2 rounded-full cursor-pointer"
                >
                  <p
                    className={`rounded-full  w-2 h-2 my-1.5`}
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-sm">{color}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full shadow-md p-4">
          <h1 className="text-3xl font-serif font-semibold" style={{ color: "#831842" }}>
            {product.name}
          </h1>
          <h1 className="text-xl font-semibold ml-2 uppercase">
            {product.category}
          </h1>
          <div className="flex">
            <i className="fas fa-star text-yellow-400 text-xs"></i>
            <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
            <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
            <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
            <i className="far fa-star text-gray-400 text-xs hover:text-yellow-400"></i>
          </div>
          {/* social media  */}
          <div className="flex space-x-4">
            <img
              src="../images/share.png"
              className="h-8 my-2 hover:scale-110 hover:rotate-12"
            />
            <img
              src="../images/Circle-Whatsapp-icon-design.png"
              className="h-14 -mt-1 hover:scale-110 hover:rotate-12"
            />
          </div>
          <div>
            <h4 className="underline mt-4 font-bold">Reminder</h4>
            <p className="xl:w-1/2 w-full font-serif text-gray-800">
              “just tell Us what you want and what you like, then show me
              pictures or links, we would make it for ”
            </p>
          </div>

          {/* items  */}
          <div className="w-full flex flex-wrap">
            <h2 className="underline my-4 font-bold w-8">Item:</h2>
            <select
              onClick={(e) => setItem(e.target.value)}
              className="border-2 ml-4 mt-5 border-black text-sm rounded-sm h-6 w-36"
            >
              <option>- Select Items -</option>
              {product.items.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* size  */}
          <div className="w-full flex flex-wrap">
            <h2 className="underline my-4 font-bold w-8">Size:</h2>
            <select
              onClick={(e) => setSize(e.target.value)}
              className="border-2 ml-4 mt-5 border-black text-sm rounded-sm h-6 w-36"
            >
              <option>- Select Size -</option>
              <option value="28">Small</option>
              <option value="30">Medium</option>
              <option value="32">Large</option>
              <option value="34">XLarge</option>
              <option value="36">XXLarge</option>
              <option value="38">XXXLarge</option>
            </select>
          </div>
          {/* productQuantity  */}
          <div className="w-full flex flex-wrap">
            <h2 className="underline my-4 font-bold w-1.2">productQuantity:</h2>
            <div className="flex space-x-8 border-2 ml-4 mt-5 border-black text-sm rounded-sm h-6 w-36">
              <button
                onClick={decrementproductQuantity}
                className="bg-pink-900 text-white text-center hover:text-gray-700 hover:bg-gray-400 w-8"
              >
                −
              </button>
              <p className="w-8">{productQuantity}</p>
              <button
                onClick={incrementproductQuantity}
                className="bg-pink-900 text-white hover:text-gray-700 hover:bg-gray-400 w-8"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex space-x-10 my-2">
            <p className="text-2xl">Price</p>
            <p className="text-2xl font-bold" style={{ color: "#FF0000" }}>
              : ${product.actualPrice}
            </p>
          </div>
          <div className="flex space-x-2 mb-4">
            <button
              className="w-full xl:w-1/2 text-center text-white text-xl p-2"
              style={{ backgroundColor: "#831842" }}
              onClick={submitHandler}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .carousel-open:checked + .carousel-item {
            position: static;
            opacity: 100;
          }
          .carousel-item {
            •webkit-transition: opacity 0.6s ease-out;
            transition: opacity 0.6s ease-out;
          }
          #carousel-1:checked ~ .control-1,
          #carousel-2:checked ~ .control-2,
          #carousel-3:checked ~ .control-3 {
            display: block;
          }
          .carousel-indicators {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            bottom: 2%;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 10;
          }
          #carousel-1:checked
            ~ .control-1
            ~ .carousel-indicators
            li:nth-child(1)
            .carousel-bullet,
          #carousel-2:checked
            ~ .control-2
            ~ .carousel-indicators
            li:nth-child(2)
            .carousel-bullet,
          #carousel-3:checked
            ~ .control-3
            ~ .carousel-indicators
            li:nth-child(3)
            .carousel-bullet {
            color: #880e4f;
          }
        `}
      </style>
      {/* </div> */}
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://litorisdesign.herokuapp.com/api/products/${params.slug}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};
