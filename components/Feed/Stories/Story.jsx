import React from "react";

const Story = ({ img, username }) => {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="h-14 w-14 bg-gray-900 rounded-full p-[1.5px] border-red-500 border object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out scrollbar-thin scrollbar-thumb-black scrollbar"
        src={img}
        alt={username}
      />
      <p className="text-xs w-14 truncate text-center !text-gray-200">
        {username}
      </p>
    </div>
  );
};

export default Story;
