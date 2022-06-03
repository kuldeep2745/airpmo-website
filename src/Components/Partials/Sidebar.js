import React, { Component } from 'react'
import StyleCss from "../../App.module.css";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BadgeIcon from "@mui/icons-material/Badge";
import LayersIcon from "@mui/icons-material/Layers";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VaccinesIcon from "@mui/icons-material/Vaccines";
export default class Sidebar extends Component {
  render() {
    return (
        <div className={StyleCss.Sidebar}>
        <div className={StyleCss.logo}>
        <h2 className={StyleCss.text} >airpmo</h2>
        </div>
        
      <ul className={StyleCss.listContainer}>
     
          <li className={StyleCss.list}>
            <DashboardIcon style={{margin:'0 15px'}} /> Dashboard
          </li>
       
        <Link to="/JobCard" style={{ textDecoration: "none",color:'#000' }}>
            <li className={StyleCss.list}>
              <BadgeIcon style={{margin:'0 15px'}} />Job Card
            </li>
        </Link>
        
          <li className={StyleCss.list}>
            <LayersIcon style={{margin:'0 15px'}} />Master
          </li>
        
        <Link to="/Timeline" style={{ textDecoration: "none",color:'#000' }}>
            <li className={StyleCss.list}>
              <CalendarMonthIcon style={{margin:'0 15px'}} />Timeline
            </li>
        </Link>

        
          <li className={StyleCss.list}>
            <VaccinesIcon style={{margin:'0 15px'}} />Data Ingestion
          </li>
       
        
          <li style={{margin:'0 15px'}} className={StyleCss.list} > QA/QC</li>
       
        
          <li style={{margin:'0 15px'}} className={StyleCss.list}> User Management</li>
          <Link to="/Login" style={{ textDecoration: "none",color:'#000' }}><li>Login</li></Link>
        
      </ul>
    </div>
    )
  }
}
