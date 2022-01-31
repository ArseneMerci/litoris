import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useStyles from "../services/styles";

const Layout = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Litoris Design</title>
        <link rel="stylesheet" href="#" />
      </Head>
      <Navbar />
      <div className={classes.main}>{props.children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
