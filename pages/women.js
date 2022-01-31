
import Products from "../components/Products";
import Header from "../components/Head";
import HeaderBar from "../components/header_bar";
import Layout from "../components/Layout";
import Whatsapp from "../components/Whatsapp";
import axios from "axios";

export default function Men({datas}) {
  const womenDatas = datas.filter((data) => data.category == "women");

  return (
    <>
      <Header title="Women's collection" />
      <HeaderBar />
      <Layout>
        <div className="mb-8 h-full overflow-x-hidden">
          <Products title="Women Collection" datas={womenDatas} />
        </div>
        <Whatsapp/>
      </Layout>
    </>
  );
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