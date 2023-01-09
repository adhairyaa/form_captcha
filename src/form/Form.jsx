import React, { useEffect, useState } from "react";
import "./Form.css";

function Form() {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");

  const [isCaptchaValid, setIsCaptchaValid] = useState(null);

  const generateCaptcha = () => {
    setCaptcha((Math.random() + 1).toString(36).substring(7));
    setUserInput(" ");
  };

  const validateCaptcha = () => {
    userInput === captcha ? setIsCaptchaValid(true) : setIsCaptchaValid(false);
  };
  useEffect(() => {
    generateCaptcha();
  }, []);
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
            <input
              id="type-captcha"
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
            ></input>
            <button onClick={() => validateCaptcha()}>check</button>
          </div>
          {isCaptchaValid !== null && isCaptchaValid ? (
            <p>congrats- you are not a bot </p>
          ) : (
            <p>sorry- you are a bot</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
