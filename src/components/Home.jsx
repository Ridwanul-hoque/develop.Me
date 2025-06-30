// Home.jsx
import Head from "next/head";
import Navbar from "./Navbar";
import Banner from "./Banner";
import img from "../../public/banner.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>DEVLOP.ME</title>
      </Head>
      <div
        className="mx-56 min-h-screen bg-no-repeat bg-center bg-cover md:bg-[length:90%] px-4 sm:px-6 pt-16 -mt-16"
        style={{ backgroundImage: `url(${img.src})` }}
      >
        <Navbar />
        <Banner />
      </div>
    </>
  );
}
