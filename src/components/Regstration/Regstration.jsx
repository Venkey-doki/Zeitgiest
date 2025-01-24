import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <form className="form vh-100" autoComplete="off" >
      <div className="control">
        <h1>Sign In</h1>
      </div>
      <div className="control block-cube block-input">
        <input name="username" type="text" placeholder="Username" />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <div className="control block-cube block-input">
        <input name="password" type="password" placeholder="Password" />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <div className="control block-cube block-input">
        <input name="password" type="password" placeholder="Password" />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <div className="control block-cube block-input">
        <input name="password" type="password" placeholder="Password" />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <div className="control block-cube block-input">
        <input name="password" type="password" placeholder="Password" />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <div className="control block-cube block-input">
        <input name="password" type="password" placeholder="Password" />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <div className="control block-cube block-input">
        <input name="password" type="password" placeholder="Password" />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <button className="btn block-cube block-cube-hover" type="button">
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
        <div className="text">Log In</div>
      </button>
      <div className="credits">
        <a href="https://codepen.io/marko-zub/" target="_blank" rel="noopener noreferrer">
          My other codepens
        </a>
      </div>
    </form>
  );
};

export default Login;
