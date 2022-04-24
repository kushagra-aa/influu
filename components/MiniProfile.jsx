import { signOut, useSession } from "next-auth/react";
import React from "react";

const MiniProfile = () => {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={session?.user?.image}
        alt="user"
        className="rounded-full border border-purple-600 p-[2px] w-16 h-16"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold text-purple-500">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400 capitalize">welcome to inlfuu</h3>
      </div>
      <button
        onClick={signOut}
        className="capitalize text-purple-400 text-sm cursor-pointer font-semibold"
      >
        sign out
      </button>
    </div>
  );
};

export default MiniProfile;
