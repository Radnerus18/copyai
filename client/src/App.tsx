import "./App.css";
import React, { useEffect, useState, lazy, Suspense } from "react";
import Routers from "./routes/index";
import axios from "axios";
const App = () => {
  useEffect(() => {
    userVerify();
  }, []);
  async function userVerify() {
    // console.log(localStorage.getItem('token'))
    try {
      await axios.get(
        `http://localhost:4000/verify/${localStorage.getItem("token")}`
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Routers />
    </div>
  );
};

export default App;
