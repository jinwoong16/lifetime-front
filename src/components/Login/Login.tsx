import React, { useState } from "react";
import { createUser, login } from "../../action/posts";

import "./Login.css";

const Login = ({ setToken, setUserId }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [makeAccount, setMakeAccount] = useState(false);

  const onSubmitToSignUp = async (event: any) => {
    event.preventDefault();
    try {
      const data = await createUser(email, userName, password);
      setMakeAccount(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitToSignIn = async (event: any) => {
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
      <div className="container">
        {makeAccount ? (
          <div className="user signupBox">
            <div className="formBox">
              <form onSubmit={onSubmitToSignUp}>
                <h2>Sign In</h2>
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  type="text"
                  value={userName}
                  placeholder="User Name"
                  onChange={(event) => setUserName(event.target.value)}
                />
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <input type="submit" value="submit" />
                <div className="signup">
                  Already have an account?
                  <div onClick={() => setMakeAccount(false)}>Sign In.</div>
                </div>
              </form>
            </div>
            <div className="imgBox">
              <img src="/images/img2.jpg" alt="" />
            </div>
          </div>
        ) : (
          <div className="user loginBox">
            <div className="imgBox">
              <img src="/images/img1.jpg" alt="" />
            </div>
            <div className="formBox">
              <form onSubmit={onSubmitToSignIn}>
                <h2>Sign In</h2>
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <input type="submit" value="submit" />
                <div className="signup">
                  Don't have account?
                  <div onClick={() => setMakeAccount(true)}>Sign up.</div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
