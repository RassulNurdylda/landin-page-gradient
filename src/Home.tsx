import React from "react";
import { Card } from "./component/Card";
import { Feedback } from "./component/Feedback";
import Info from "./component/Info";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import Tables from "./component/Tables";

const Home = () => {
  return (
    <main>
      <Main />
      <Tables />
      <Info />
      <Card />
      <Feedback />
    </main>
  );
};

export default Home;
