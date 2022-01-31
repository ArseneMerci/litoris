import React from 'react'
import HeaderBar from '../components/header_bar';
import Layout from '../components/Layout';
import Products from '../components/Products';
import datas from '../services/data';
import axios from "axios";
import Whatsapp from '../components/Whatsapp';

export default function AllProducts({datas}) {
    return (
        <>
        <HeaderBar/>
        <Layout>
        <div className="mb-8">
            <Products title="All Collections" datas={datas} />
            </div>
            <Whatsapp/>
        </Layout>
        </>
    )
}
export const getServerSideProps = async () => {
    const res = await axios.get("http://localhost:3000/api/products/all");
    const {data} = res
    return {
      props: {
        datas: data,
      },
    };
  };