import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState();

  const [responseMessage, setResponseMessage] = useState();

  const generateCaptcha = () => {
    setCaptcha((Math.random() + 1).toString(36).substring(7));
  };

  const validateCaptcha = () => {};

  return (
    <div className="form-container">
      <div className="form">
        <h2>Enter your Details</h2>
        <input id="firstName" placeholder="firstname"></input>
        <input id="lastName" placeholder="lastname"></input>
        <div className="captcha">
          <div className="captcha-image">
            <input
              id="captcha-background"
              value={captcha}
              disabled="true"
            ></input>
            <button onClick={() => generateCaptcha()}>⟲</button>
          </div>
          <div className="captcha-validate">
            <input id="type-captcha" onChange={(e) => setUserInput(e)}></input>
            <button onClick={() => validateCaptcha()}>check</button>
          </div>
          <p>{responseMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
