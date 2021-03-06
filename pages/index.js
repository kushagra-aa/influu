import Head from "next/head";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>InFluu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="">
        {/* modal */}
        <Modal />
        <Feed />
      </main>
    </div>
  );
}
