import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Logo from "./../public/header.png";

const About = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>About InFluu</title>
      </Head>
      <Header />
      <main className="flex flex-col gap-8 p-10 md:p-5 lg:p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className="mx-auto w-6/12" src={Logo.src} />
        <p className="text-2xl">
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href={"/"}>
            <span className="cursor-pointer text-purple-400">InFluu </span>
          </Link>
          is clone of{" "}
          <a
            className="underline"
            target="_blank"
            href="https://instagram.com/"
            rel="noreferrer"
          >
            Instagram
          </a>
          , this is a Simple Social Application that is built on NextJS and uses
          Firebase for Database and Google Authentication.Built using{" "}
          <a
            className="underline"
            target="_blank"
            href="https://nextjs.org/"
            rel="noreferrer"
          >
            NextJS
          </a>{" "}
          and uses{" "}
          <a
            className="underline"
            target="_blank"
            href="https://www.firebase.google.com/"
            rel="noreferrer"
          >
            Firebase
          </a>{" "}
          for Content Management.
        </p>
        <p className="self-center text-lg capitalize">built with 🤍</p>
        <div className="flex flex-col gap-8">
          <p className="text-xl capitalize">made by</p>
          <div className="flex flex-col items-center gap-8">
            <a
              target="_blank"
              href="https://kushagra-aa.github.io/portfolio/"
              rel="noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="hover-up transition-up w-96 rounded-full border-2 border-purple-600 shadow-2xl"
                src="https://pbs.twimg.com/profile_images/1391264894192738307/YLfn-2Xk_400x400.jpg"
                alt="me"
              />
            </a>
            <p className="text-6xl capitalize tracking-widest text-purple-500">
              Kushagra Agnihotri
            </p>
            <p className="text-2xl text-gray-700">
              Creating memorable Websites and Apps.
            </p>
            <div className="lg:text-1xl mb-10 flex w-2/3 flex-col justify-between gap-4 text-lg capitalize md:flex-row md:text-xl">
              <a
                href="https://kushagra-aa.github.io/portfolio/#about"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-down rounded bg-purple-600 p-2 text-center text-purple-200 shadow-xl md:w-1/4"
              >
                more about me
              </a>
              <a
                href="https://kushagra-aa.github.io/portfolio/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-up rounded bg-purple-200 p-2 text-center text-purple-600 shadow-xl md:w-1/4"
              >
                contact me
              </a>
              <a
                href="https://kushagra-aa.github.io/portfolio/#projects"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-down rounded bg-purple-600 p-2 text-center text-purple-200 shadow-xl md:w-1/4"
              >
                more by me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
