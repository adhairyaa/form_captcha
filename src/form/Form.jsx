import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form-container">
      <div className="form">
        <h2>Enter your Details</h2>
        <input id="firstName" placeholder="firstname"></input>
        <input id="lastName" placeholder="lastname"></input>
        <div className="captcha">
          <div className="cpatcha-image">
            <input id="captcha-background" value="hi" disabled="true"></input>
            <button>re</button>
          </div>
          <div className="captcha">
            <input id="type-captcha"></input>
            <button>check</button>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Form;
