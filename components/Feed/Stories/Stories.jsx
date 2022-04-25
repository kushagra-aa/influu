import { randUser } from "@ngneat/falso";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  const [suggestions, setSuggestions] = useState();

  useEffect(() => {
    const res = [...Array(20)].map((_, i) => ({
      ...randUser(),
      u_id: i,
    }));
    setSuggestions(res);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-gray-900 mt-8 border-gray-700 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      {suggestions?.map((profile) => (
        <Story
          key={profile.id}
          img={profile.img}
          username={profile.username.toLowerCase()}
        />
      ))}
    </div>
  );
};

export default Stories;
