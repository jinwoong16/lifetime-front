import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost, createPost } from "../../action/posts";

// @ts-ignore
import FileBase from "react-file-base64";

import "./Modal.css";

const Modal = ({ token, setIsOpen, oldPost }: any) => {
  const dispatch = useDispatch();

  const [out, setOut] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [postData, setPostData] = useState<any>({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleClick = (event: any) => {
    if (event.target.classList.contains("backdrop")) {
      setOut(!out);
      setEdit(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 1300);
    }
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (edit) {
      dispatch(updatePost(oldPost._id, token, postData));
    } else {
      dispatch(createPost(token, postData));
    }
    setOut(!out);
    setTimeout(() => {
      setIsOpen(false);
    }, 1300);
  };

  useEffect(() => {
    if (oldPost) {
      setPostData({
        title: oldPost.title,
        message: oldPost.message,
        tags: oldPost.tags,
        selectedFile: oldPost.selectedFile,
      });
      setEdit(true);
    }
  }, [oldPost]);

  return (
    <div className={`Modal backdrop ${out ? "out" : ""}`} onClick={handleClick}>
      <form className="box" onSubmit={onSubmit}>
        <div className="title">Write a post!</div>
        <div className="inputBox">
          <input
            type="text"
            required
            value={postData.title}
            onChange={(event) =>
              setPostData({ ...postData, title: event.target.value })
            }
          />
          <span>Title</span>
        </div>
        <div className="inputBox">
          <textarea
            value={postData.message}
            onChange={(event) =>
              setPostData({ ...postData, message: event.target.value })
            }
          />
        </div>
        <div className="inputBox">
          <input
            type="text"
            required
            value={postData.tags}
            onChange={(event) =>
              setPostData({ ...postData, tags: event.target.value })
            }
          />
          <span>tags ...</span>
        </div>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }: any) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
        <input type="submit" value={edit ? "update" : "create"} />
      </form>
    </div>
  );
};

export default Modal;
