import React from "react";
import Header from "../../layouts/header/Header";

import "./style.css";

const EndPage = () => {
  
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__container">
        <h1 className="main-page__title"> Онлайн квест </h1>
        <div className="main-page__congratulation">
          <p>Поздравляю, ты справился!!!</p>
          <p>Быстрее беги в чердак, на лестнице найдешь свой тортик!!!</p>
        </div>
      </div>
    </div>
  );
};

export default EndPage;
