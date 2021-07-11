import "./App.css";
import Login from "./Login/Login";
import Home from "./Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import useToken from "./hooks/useToken";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../action/posts";

function App() {
  const dispatch = useDispatch();
  const { token, setToken } = useToken();
  const [userId, setUserId] = useState<any>("");

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("userId", userId);
  }, [userId]);

  if (!token) {
    return <Login setToken={setToken} setUserId={setUserId} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home token={token} userId={userId} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
