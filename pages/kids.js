import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Header from '../components/Head'
import HeaderBar from '../components/header_bar';
import Layout from '../components/Layout';
import Whatsapp from '../components/Whatsapp';
import axios from "axios";

export default function Kids({datas}){
    const kidsDatas = datas.filter((data) => data.category == "kids");

    return(
        <>
        <Header title="Kids' Collection" />
        <HeaderBar />
        <Layout>
          <div className="mb-8 h-full overflow-x-hidden">
            <Products title="Kids Collection" datas={kidsDatas} />
          </div>
        </Layout>
        <Whatsapp/>
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