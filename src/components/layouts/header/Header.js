import React from "react";
import "./style.css";
import logo from "../../../assets/logo.svg";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="header__container">
      <div>
        <img
          onClick={handleClick}
          className="header__logo"
          src={logo}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
