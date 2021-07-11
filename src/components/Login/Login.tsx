import React, { useState } from "react";
import { login } from "../../action/posts";

const Login = ({ setToken, setUserId }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      setToken(data.access_token);
      setUserId(data.userId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Login">
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
