import React, { useEffect, useState } from "react";
import Header from "../../layouts/header/Header";
import { useHistory } from "react-router-dom";

import "./style.css";

const MainPage = () => {
  const history = useHistory();

  const [isNextPage, setIsNextPage] = useState(false);
  useEffect(() => {
    if (isNextPage) {
      history.push("/first_question");
    }
  });

  const handleCkick = () => {
    setIsNextPage(true);
  };
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__container">
        <h1 className="main-page__title"> Онлайн квест </h1>
        <div className="main-page__congratulation">
          <p>Дорогой Сашечка, поздравляю тебя С Днем Рождения!!!</p>
          <p>
            Я для тебя приготовила очень вкусный тортик, но он надежно спрятан. Пройди
            онлайн-квест, и тогда ты его найдешь. Удачи!
          </p>
        </div>

        <div className="main-page__button-container">
          <button className="main-page__button" onClick={handleCkick}> Начать </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
