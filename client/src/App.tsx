import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState,lazy, Suspense } from "react";
import Login from './components/login';
import axios from "axios";
const Maincomp = lazy(()=>import('./components/main'))
const App = () => {
  useEffect(()=>{userVerify()},[])
  async function userVerify(){
    // console.log(localStorage.getItem('token'))
     try{
      await axios.get(`http://localhost:4000/verify/${localStorage.getItem('token')}`)
     }catch(err){
      console.log(err)
     }
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Maincomp/></Suspense>} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
