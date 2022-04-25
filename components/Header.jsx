import Logo from "./../public/header.png";
import Logo2 from "./../public/logo.png";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtoms";
import { useEffect } from "react";

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  useEffect(() => {
    console.log("open::>", open);
  }, [open]);

  return (
    <nav className="shadow-sm border-b sticky z-50 top-0 bg-gray-900">
      <div className="flex p-2 lg:p-3 justify-between bg-gray-900 max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div
          onClick={() => {
            router.push("/");
          }}
          className="relative w-24 hidden lg:inline-grid cursor-pointer"
        >
          <Image src={Logo} alt="logo" layout="fill" objectFit="contain" />
        </div>
        <div
          onClick={() => {
            router.push("/");
          }}
          className="relative w-9 mr-8 lg:hidden cursor-pointer"
        >
          <Image src={Logo2} alt="logo" layout="fill" objectFit="contain" />
        </div>
        {/* center */}
        <div className="max-w-xs flex items-center justify-center">
          <div className="flex bg-gray-700 rounded-md items-center justify-center text-gray-9000">
            <form className="flex space-x-4 items-center justify-center">
              <div className="ml-2">
                <SearchIcon className="h-5 w-5" />
              </div>
              <input
                className="form-input bg-gray-700 block w-full sm:text-sm border-gray-300 rounded-md focus:ring-0 focus:border-0 focus:outline-none p-1"
                type="text"
                placeholder="search"
              />
            </form>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon
            onClick={() => {
              router.push("/");
            }}
            className="nav-icons"
          />
          <MenuIcon className="nav-icons grid w-16 md:hidden" />
          {session ? (
            <>
              <div className="nav-icons relative">
                <PaperAirplaneIcon className="nav-icons rotate-90" />
                <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-purple-500 opacity-95 rounded-full flex items-center justify-center animate-pulse">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => {
                  setOpen(true);
                }}
                className="nav-icons"
              />
              <UserGroupIcon className="nav-icons" />
              <HeartIcon className="nav-icons" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                referrerPolicy="no-referrer"
                onClick={signOut}
                src={session?.user?.image}
                alt="user"
                className="h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button
              onClick={signIn}
              className="capitalize text-gray-800 text-m gray-900space-nowrap"
            >
              sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
