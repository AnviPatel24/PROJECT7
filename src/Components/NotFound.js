// import Navbar from "./Components/Navbar";
// import Header from "./Components/Header";
// import Row1 from "./Components/Row1";
// import Stud from "./Components/Stud";
// import { BrowserRouter as Router, Routes, Route,Switch } from 'react-router-dom';
// import Login from "./Components/Login";
// //import Regotp from "./Components/Regotp";
// import Addmenu from "./Components/Addmenu";
// import { useEffect } from "react";
import React from "react";
function App() {
       return(
              <>
              <div style={{ scrollY: "hidden", scrollbarWidth:"none" }}>
              <img src="../assets/images/logos/404.png" alt="Error Page" width="100%" style={{position:"relative"}}></img>
              <div style={{position:"absolute",color:"white", top:"77%", paddingLeft:"30%", fontSize:22}}><p>We tried really hard but couldn't find the page you were looking for.<br></br>You may find what you were looking for on our <a href="/Login" style={{color:"green"}}> homepage.</a></p></div>
              </div>
              </>
       );
}

export default App;

