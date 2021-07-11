import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("accessToken");
    return tokenString;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: string) => {
    localStorage.setItem("accessToken", userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
