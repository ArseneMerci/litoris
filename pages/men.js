import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Header from '../components/Head'
// import datas from "../services/data";
import Layout from '../components/Layout';
import HeaderBar from '../components/header_bar';
import Whatsapp from '../components/Whatsapp';
import axios from "axios";

export default function Men({datas}){
  const menDatas = datas.filter((data) => data.category == "men");

    return(
        <>
        <HeaderBar/>
        <Header title="Men's collection" />
        <Layout>
        <div className="mb-8 h-full overflow-x-hidden">
            
            <Products title="Men Collection" datas={menDatas} />
            
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