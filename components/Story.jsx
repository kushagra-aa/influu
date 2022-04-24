import React from "react";

const Story = ({ img, username }) => {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="h-14 w-14 rounded-full p-[1.5px] bg-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out scrollbar-thin scrollbar-thumb-black scrollbar"
        src={img}
        alt={username}
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
