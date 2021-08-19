import axios from "axios";

const baseUrl: string = "https://lifetime01.herokuapp.com/";
const postUrl: string = "https://lifetime01.herokuapp.com//posts";
const loginUrl: string = "https://lifetime01.herokuapp.com//auth/login";
const verifyUrl: string = "https://lifetime01.herokuapp.com//auth/verify";

export const login = (id: string, password: string) =>
  axios.post(loginUrl, { email: id, password: password });
export const createUser = (email: string, username: string, password: string) =>
  axios.post(`${baseUrl}/user/signup`, {
    email: email,
    username: username,
    password: password,
  });
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
