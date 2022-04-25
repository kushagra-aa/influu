import { HeartIcon as HeartFilledIcon } from "@heroicons/react/solid";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import Moment from "react-moment";

const Post = ({ id, username, userImg, img, caption, timestamp }) => {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);

  return (
    <div className="bg-gray-900 my-7 border border-gray-800 rounded-sm">
      {/* header */}
      <div className="flex items-center p-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          referrerPolicy="no-referrer"
          src={userImg}
          alt={""}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-semibold !text-purple-400">{username}</p>
        <DotsHorizontalIcon className="h-5 text-purple-200" />
      </div>
      {/* img */}
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={caption} className="object-cover w-full" />
      {/* buttons */}
      {session && (
        <div className="flex flex-col">
          <div className="flex justify-between p-4 ">
            <div className="flex space-x-4">
              {hasLiked ? (
                <HeartFilledIcon
                  onClick={likePost}
                  className="post-btn text-red-600"
                />
              ) : (
                <HeartIcon onClick={likePost} className="post-btn" />
              )}
              <ChatIcon className="post-btn" />
              <PaperAirplaneIcon className="post-btn rotate-90" />
            </div>
            <BookmarkIcon className="post-btn" />
          </div>
          {/* likes */}
          {likes.length > 0 && (
            <p className="ml-4 font-semibold mb-1 !text-gray-500">
              {likes.length} like{likes.length > 1 && "s"}
            </p>
          )}
        </div>
      )}
      {/* caption */}
      <div className="flex items-center">
        <p className="flex-1 p-5 truncate !text-gray-300">
          <span className="font-bold mr-1 text-purple-400">{username}</span>
          {caption}
        </p>
        <Moment className="pr-5 text-xs !text-gray-400" fromNow>
          {timestamp?.toDate()}
        </Moment>
      </div>
      {/* comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((com) => (
            <div className="flex items-center space-x-2 mb-3" key={com.id}>
              <p className="text-sm flex-1 !text-gray-200">
                <span className="font-bold !text-gray-400">
                  {com.data().username}
                </span>{" "}
                {com.data().comment}
              </p>
              <Moment className="pr-5 text-xs !text-gray-400" fromNow>
                {com.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/* input box */}
      {session && (
        <form className="flex items-center p-4 space-x-1">
          <EmojiHappyIcon className="h-7 text-purple-300" />
          <input
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            type="text"
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none bg-transparent"
          />
          <button
            disabled={!comment?.trim()}
            onClick={sendComment}
            type="submit"
            className="text-purple-400 cursor-pointer disabled:cursor-not-allowed disabled:text-purple-700"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
