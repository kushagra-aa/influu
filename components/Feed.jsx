import { useSession } from "next-auth/react";
import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  const { data: session } = useSession();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!max-w-3xl md:!grid-cols-2"
      }`}
    >
      <section className="md:col-span-2">
        {/* stories */}
        {session && <Stories />}
        {/* posts */}
        <Posts />
      </section>
      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            {/* mini profile */}
            <MiniProfile />
            <Suggestions />
          </div>
          {/* suggestions */}
        </section>
      )}
    </div>
  );
};

export default Feed;
