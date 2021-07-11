import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../action/posts";
import moment from "moment";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';

import "./Post.css";
import Modal from "../../Modal/Modal";

const Post = ({ post, token, userId }: any) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <div className="Post">
      <div
        className="img"
        style={{ backgroundImage: `url(${post.selectedFile})` }}
      ></div>
      <div className="top-left">
        <div className="creator">{post.creator}</div>
        {post.updatedAt ? (
          <div className="createdAt">{moment(post.updatedAt).fromNow()}</div>
        ) : (
          <div className="createdAt">{moment(post.createdAt).fromNow()}</div>
        )}
      </div>
      <div className="tags">#{post.tags}</div>
      <div className="title">{post.title}</div>
      <div className="message">{post.message}</div>

      <div className="bottom">
        <div className="like"><ThumbUpAltIcon style={{ color: "#3ee5d6"}} /> Like {post.likeCount}</div>
        {post.userId === userId ? (
          <div className="modify">
            <button onClick={() => dispatch(deletePost(post._id, token))}>
              <DeleteForeverIcon />
            </button>
            <button onClick={() => setEdit(!edit)}><UpdateIcon /></button>
          </div>
        ) : <span></span>}
      </div>

      {edit && <Modal token={token} setIsOpen={setEdit} oldPost={post} />}
    </div>
  );
};

export default Post;
