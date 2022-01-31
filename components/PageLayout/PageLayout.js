import Head from "next/head";
import React from "react";
import useStyles from "../../services/styles";
import Footer from "../Footer";
import NavPage from "./NavPage";

export default function PageLayout(props) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Lito Ris Design</title>
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
            />
      </Head>
      <NavPage />
      <div className={classes.main}>{props.children}</div>
      <Footer />
    </>
  );
}
