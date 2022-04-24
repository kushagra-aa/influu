import { randUser } from "@ngneat/falso";
import { useState, useEffect } from "react";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState();

  useEffect(() => {
    const res = [...Array(5)].map((_, i) => ({
      ...randUser(),
      u_id: i,
    }));
    console.log("res :>> ", res);
    setSuggestions(res);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5 capitalize">
        <h3 className="text-sm text-gray-400 font-medium">
          suggestions for you
        </h3>
        <button className="text-gray-900 font-semibold capitalize">
          see all
        </button>
      </div>
      {suggestions?.map((suggestion) => (
        <div
          className="flex items-center justify-between mt-3"
          key={suggestion?.id}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={suggestion?.img}
            alt={suggestion?.username}
            className="w-10 h-10 rounded-full border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <p className="font-semibold text-sm">
              {suggestion?.username.toLowerCase()}
            </p>
            <p className="text-gray-400 text-xs">
              {suggestion?.firstName} {suggestion?.lastName}
            </p>
          </div>
          <button className="text-xs font-bold text-purple-400 capitalize">
            folow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
