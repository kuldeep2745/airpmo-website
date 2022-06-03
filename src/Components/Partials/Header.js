import React, { Component } from "react";
import StyleCss from "../../App.module.css";


export default class Header extends Component {
  render() {
    return (
      <>
        <div className={StyleCss.header}>
          <h1 style={{marginLeft:'20px'}} >Activities</h1>
          <div className={StyleCss.Searchbarbx}>
          <input
            className={StyleCss.search}
            type="search"
            placeholder="search"
          />

          <i style={{ fontSize:'30px'}} class="fa-solid fa-bell"></i>
          <i style={{  fontSize:'30px'}} class="fa-solid fa-user"></i>
         
          </div>
          
        </div>
       
       
        
      </>
    );
  }
}
