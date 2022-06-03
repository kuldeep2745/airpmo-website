import React, { Component } from "react";
import AuthCss from "./Auth.module.css";

export default class Signup extends Component {
  render() {
    return (
      <>
        <div className={AuthCss.signup}>
          {/* <h2>airpmo</h2> */}
          <div className={AuthCss.signupcontent}>
          <div className={AuthCss.topContent}>
          <div className={AuthCss.signupIcon}><i class="fa-solid fa-user"></i></div>
          <h2 className={AuthCss.topText}>Create new <br /> account</h2>
          </div>
          <div className={AuthCss.inputBox}>
            <div className={AuthCss.inputdiv}>
              <div className={AuthCss.input1}>
                <input type="text" placeholder="First Name" className={AuthCss.signupinput}/>
                <input type="text" placeholder="Phone Number" className={AuthCss.signupinput} />
                <input type="text" placeholder="Job Title" className={AuthCss.signupinput} />
              </div>
              <div className={AuthCss.input2}>
                <input type="text" placeholder="Last Name" className={AuthCss.signupinput} />
                <input type="text" placeholder="Email" className={AuthCss.signupinput} />
                <input type="text" placeholder="Company Name" className={AuthCss.signupinput} />
              </div>
            </div>
            <div>
              <input type="text" placeholder="Comment" className={AuthCss.input3}/>
            </div>
          </div>
          <div className={AuthCss.signupbutton}>
            <button className={AuthCss.cancelbuttons}>Cancel</button>
            <button className={AuthCss.createbuttons}>Create Account</button>
          </div>
          </div>
        </div>
      </>
    );
  }
}
