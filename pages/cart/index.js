import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../../components/Layout";
import PageLayout from "../../components/PageLayout/PageLayout";

function Cart() {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  const [value, setValue] = useState("a");
  const router = useRouter();

  function logValue() {
    console.log(value);
  }
  const handleSubmit = () => {
    router.push("/Shipping");
  };

  return (
    <PageLayout>
      <main className="p-4 h-full mb-8">
        <h1 className="xl:text-3xl font-bold mb-8">Shopping Cart</h1>
        <section className="flex flex-wrap mb-4">
          <div className="flex flex-col xl:w-3/4 w-full">
            <div className="overflow-x-auto">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 shadow overflow-hidden">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table
                    className="min-w-full divide-y divide-gray-300"
                    //   style={{ width: "32vw" }}
                  >
                    <thead className="bg-gray-300">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Color&Size
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Item(s)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cart.products.map((product) => (
                        <tr key={product._id}>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-12 w-12">
                                <img
                                  className="h-12 w-12"
                                  src={product.frontImage}
                                  alt=""
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="">
                              <div className="text-sm font-medium text-gray-900">
                                {product.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {product.category.toUpperCase()}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="">
                              <div className="text-sm font-medium text-gray-900">
                                {product.color.toUpperCase()}
                              </div>
                              <div className="text-sm text-gray-500">
                                {product.size}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                          {product.productQuantity}
                          </td>
                          <td className="px-6 py-4">
                          {product.item}
                          </td>
                          <td className="px-6 py-4 text-sm font-bold text-gray-500 cursor-default">
                            {product.discPrice}
                          </td>
                          <td className="px-6 py-4">
                            <button className="w-12 flex py-2 justify-center text-lg leading-5 font-semibold bg-pink-900 text-white hover:bg-pink-800">
                              X
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Link href="./AllProduct" passHref>
                  <div className="py-4 text-2xl font-bold text-pink-900 flex justify-end cursor-pointer">
                    <MdKeyboardBackspace className="mt-2 animate-bounce" />
                    Continue Shopping
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 w-full bg-gray-600 h-32 rounded-xl text-white font-bold px-8 px-auto py-8 text-xl">
            <h2 className="mb-4">
              Subtotal ({cart.quantity} items): $ {cart.total}
            </h2>
            <button
              className="w-full py-1 text-xl rounded-xl bg-pink-900"
              onClick={handleSubmit}
            >
              {" "}
              CHECK OUT
            </button>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

// const StepBody = styled.div`
//   text-align:center;
// `

const Button = styled.button`
  margin: 0 20px;
  cursor: pointer;
  outline: none;
  background: #fff;
  border: 1px solid #000;
  padding: 6px 12px;
`;

export default Cart;
