import Head from "next/head";

const Header = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
            />
        </Head>
    );
};

export default Header;