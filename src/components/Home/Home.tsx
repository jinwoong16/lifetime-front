import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Posts from "../Posts/Posts";

import PetsIcon from '@material-ui/icons/Pets';

import "./Home.css";

type loginProps = {
  token: string;
  userId: string;
};

const Home = ({ token, userId }: loginProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="Home">
      <header>
        <PetsIcon fontSize="large" />
        <span>LifeTime</span>
      </header>
      <button className="create" onClick={() => setIsOpen(!isOpen)}>
        Create
      </button>
      <Posts token={token} userId={userId} />
      {isOpen && <Modal token={token} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Home;
