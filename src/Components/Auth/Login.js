import React, { Component } from "react";
import AuthCss from "./Auth.module.css";
import images from "../../assets/loginsvg.png";
import { Link } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <>
        <div className={AuthCss.Container}>
          <div className={AuthCss.Left}>
            <h2 className={AuthCss.logo}>airpmo</h2>
            <h1 style={{ fontSize: "3rem", marginTop: "20px" }}>
              Promote PMO/ <br />
              PMC Globally
            </h1>

            <img className={AuthCss.loginsvg} src={images} alt={images} />
          </div>
          <div className={AuthCss.Right}>
            <div className={AuthCss.LoginBx}>
              <h2>Login</h2>
              <form className={AuthCss.form}>
                <span style={{ color: "#4D627A", fontSize: "13px" }}>
                  Email Or Mobile
                </span>
                <input type="text" className={AuthCss.input}
                placeholder="Enter your email or phone numer"
                />
                <span style={{ color: "#4D627A", fontSize: "13px" }}>
                  Password
                </span>
                <input type="password" className={AuthCss.input}
                placeholder="Password"
                />
                <div className={AuthCss.btnbx}>
                  <Link to="/signup">
                    <button className={AuthCss.btn} style={{backgroundColor:'#fff'}}>Sign Up</button>
                  </Link>
                  <Link to="/JobCard"><button className={AuthCss.btn} style={{backgroundColor:'#0FCC7C'}} type="submit">Login</button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
