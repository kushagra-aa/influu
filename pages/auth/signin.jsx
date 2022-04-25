import Logo from "./../../public/header.png";
import { getProviders, signIn as nextSignIn } from "next-auth/react";
import Header from "../../components/Header";

const signIn = ({ providers }) => {
  console.log("providers:>>", providers);
  return (
    <>
      <Header />
      <main className="w-screen overflow-y-hidden mt-10 space-y-32 flex flex-col items-center justify-center">
        <div className="">
          {/* logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={Logo.src} alt="logo" className="w-80" />
          {/* sub */}
          <p className="text-lg text-gray-900 capitalize italic text-center">
            providing happiness
          </p>
        </div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="p-3 bg-purple-500 rounded-lg text-gray-900"
              onClick={() => nextSignIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const providers = await getProviders();
  console.log("providers :>> ", providers);
  return {
    props: {
      providers,
    },
  };
};
export default signIn;
