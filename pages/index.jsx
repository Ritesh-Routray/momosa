import Head from "next/head";
import Input from "../components/form/Input";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Home from "./home";
import axios from "axios";

export default function Index({ categoryList, productList }) {
  return (
    <div className="">
      <Head>
        <title>momoSA</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Home categoryList={categoryList} productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);

    return {
      props: {
        categoryList: res.data || [],
        productList: product.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        categoryList: [],
        productList: [],
      },
    };
  }
};

