import React, { Component } from "react";
import StyleCss from "../App.module.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Header from "./Partials/Header";
import Sidebar from "./Partials/Sidebar";

export default class Timeline extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <Header />
        <div className={StyleCss.row}>
          <div className={StyleCss.JobCard}>
            <div className={StyleCss.Timelinesrch}>
              <input
                type="search"
                className={StyleCss.search}
                placeholder="Choose Client"
              />
              <input
                type="search"
                className={StyleCss.search}
                placeholder="Choose Project"
              />
            </div>
            <div className={StyleCss.JCard}>
              <div className={StyleCss.JCA}>
                <div className={StyleCss.JCAicon}>
                  <AssignmentTurnedInIcon />
                </div>
                <div>
                  <p style={{ marginBottom: "-20px", marginTop: "20px" }}>
                    Job Card Assigned
                  </p>{" "}
                  <br /> <p style={{ fontSize: "30px" }}>800</p>
                </div>
              </div>
              <div className={StyleCss.myJC}>
                <div className={StyleCss.myJCicon}>
                  <TrendingUpIcon />
                </div>
                <div>
                  <p style={{ marginBottom: "-20px", marginTop: "20px" }}>
                    My Job Cards
                  </p>{" "}
                  <br /> <p style={{ fontSize: "30px" }}>400</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
