import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
// import { verifyToken } from "../../action/posts";
import Post from "./Post/Post";

import "./Posts.css";

type loginProps = {
  token: string;
  userId: string;
};

const Posts = ({ token, userId }: loginProps) => {
  const posts = useSelector((state: RootState) => state.posts);

  return (
    <div className="Posts">
      {posts.map((post: any, index: any) => (
        <Post key={index} post={post} token={token} userId={userId} />
      ))}
      {/* <button onClick={() => verifyToken(token)}>check</button> */}
    </div>
  );
};

export default Posts;
