import * as api from "../api";

export const login = async (id: string, password: string) => {
  try {
    const { data } = await api.login(id, password);
    return data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const { data } = await api.createUser(email, username, password);
    return data;
  } catch (error) {
    throw error;
  }
};

export const verifyToken = async (token: string) => {
  try {
    const { data } = await api.verifyToken(token);
    console.log(data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getPosts = () => async (dispatch: any) => {
  const { data } = await api.fetchPosts();
  dispatch({ type: "FETCH_ALL", payload: data });
};

export const createPost =
  (token: string, post: any) => async (dispatch: any) => {
    try {
      const { data } = await api.createPost(token, post);
      dispatch({ type: "CREATE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const deletePost =
  (id: string, token: string) => async (dispatch: any) => {
    try {
      const { data } = await api.deletePost(id, token);
      console.log(data);
      dispatch({ type: "DELETE", payload: id });
    } catch (error) {
      throw error;
    }
  };

export const updatePost =
  (id: string, token: string, updatedPost: any) => async (dispatch: any) => {
    try {
      const { data } = await api.updatePost(id, token, updatedPost);
      console.log(data);
      dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
