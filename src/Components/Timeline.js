import React, { Component } from "react";
import StyleCss from "../App.module.css";
import Header from "./Partials/Header";
import Sidebar from "./Partials/Sidebar";
export default class Timeline extends Component {
  render() {
    return (
      <>
      <Sidebar />
              <Header />
      <div className={StyleCss.row}>
      <div className={StyleCss.Timeline}>
        <div className={StyleCss.TableContent}>
          <div className={StyleCss.tableIcons}>
          <i style={{marginLeft:'10px',  fontSize:'30px', padding:'20px'}} class="fa-solid fa-user"></i>
            <h6 style={{  fontSize:'30px', padding:'30px 0',  fontWeight: '400'}}>Users</h6>
          </div>
          <div className={StyleCss.tableSearch}>
            <input
              className={StyleCss.search}
              type="search"
              placeholder="search"
            />
          </div>
          </div>
        <div className={StyleCss.tTable}>
          <table className={StyleCss.tdTable}>
            <tr className={StyleCss.tableRow}>
              <th>Name</th>
              <th>Company</th>
              <th>Role</th>
              <th>email</th>
              <th>Number</th>
              <th>Actions</th>
            </tr>
            <tr className={StyleCss.tableRow}>
              <td>Name</td>
              <td>Company</td>
              <td>Role</td>
              <td>email</td>
              <td>Number</td>
              <td><i style={{marginRight:'20px', color:'lightGreen'}} class="fa-solid fa-pen"></i><i style={{color:'red',marginRight:'10px'}} class="fa-solid fa-trash-can"></i></td>
            </tr>
            <tr className={StyleCss.tableRow}>
              <td>Name</td>
              <td>Company</td>
              <td>Role</td>
              <td>email</td>
              <td>Number</td>
              <td><i style={{marginRight:'20px', color:'lightGreen'}} class="fa-solid fa-pen"></i><i style={{color:'red',marginRight:'10px'}} class="fa-solid fa-trash-can"></i></td>
            </tr>
            <tr className={StyleCss.tableRow}>
              <td>Name</td>
              <td>Company</td>
              <td>Role</td>
              <td>email</td>
              <td>Number</td>
              <td><i style={{marginRight:'20px', color:'lightGreen'}} class="fa-solid fa-pen"></i><i style={{color:'red',marginRight:'10px'}} class="fa-solid fa-trash-can"></i></td>
            </tr>
            <tr className={StyleCss.tableRow}>
              <td>Name</td>
              <td>Company</td>
              <td>Role</td>
              <td>email</td>
              <td>Number</td>
              <td><i style={{marginRight:'20px', color:'lightGreen'}} class="fa-solid fa-pen"></i><i style={{color:'red',marginRight:'10px'}} class="fa-solid fa-trash-can"></i></td>
            </tr>
            <tr className={StyleCss.tableRow}>
              <td>Name</td>
              <td>Company</td>
              <td>Role</td>
              <td>email</td>
              <td>Number</td>
              <td><i style={{marginRight:'20px', color:'lightGreen'}} class="fa-solid fa-pen"></i><i style={{color:'red',marginRight:'10px'}} class="fa-solid fa-trash-can"></i></td>
            </tr>
          </table>
        </div>
      </div>
       </div>
       </>
    );
  }
}
