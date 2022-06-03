import React, { Component } from "react";
import Header from "./Components/Partials/Header";
import Sidebar from "./Components/Partials/Sidebar";
import Timeline from "./Components/Timeline";
import JobCard from "./Components/JobCard";

import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup"
// import StyleCss from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
   
    return (
      <>
        <div>
          <BrowserRouter>
          
            <div
              style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                position: "relative",
              }}
            >
              
              
             <Routes>
                  <Route path="/airpmo-website" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/Timeline" element={<Timeline />} />
                  <Route path="/JobCard" element={<JobCard />} />
                  <Route path="/JobCard" element={<Signup />} />
                  
              </Routes>
            </div>
            
          </BrowserRouter>
        </div>
      </>
    );
  }
}
