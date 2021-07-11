import axios from "axios";

const postUrl: string = "http://192.168.0.7:5000/posts";
const loginUrl: string = "http://192.168.0.7:5000/auth/login";
const verifyUrl: string = "http://192.168.0.7:5000/auth/verify";

export const login = (id: string, password: string) =>
  axios.post(loginUrl, { email: id, password: password });
export const verifyToken = (token: string) =>
  axios.get(verifyUrl, { headers: { Authorization: `Bearer ${token}` } });

export const fetchPosts = () => axios.get(postUrl);
export const createPost = (token: string, post: any) =>
  axios.post(postUrl, post, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const deletePost = (id: string, token: string) =>
  axios.delete(`${postUrl}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const updatePost = (id: string, token: string, updatedPost: any) =>
  axios.patch(`${postUrl}/${id}`, updatedPost, {
    headers: { Authorization: `Bearer ${token}` },
  });
