import React, { useEffect, useState } from "react";
import Header from "../../layouts/header/Header";
import puzzle6 from "../../../assets/puzzle6.PNG";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

import "./style.css";

const SixthQuestion = () => {
  const history = useHistory();
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [isVisibleHint, setIsVisibleHint] = useState(false);
  const handleClick = () => {
    setIsVisibleHint(true);
  };
  useEffect(() => {
    if (isAnswerRight) {
      history.push("/7_question");
    }
  });
  return (
    <div className="first-question">
      <Header />
      <div className="first-question__container">
        <p className="first-question__title"> Задание №6 </p>
        <p>Реши задачу:</p>
        <div className="fifth-page__hint-container">
          <img className="sixth-page_img" src={puzzle6} alt="puzle" />
          <div className="fifth-hint-container">
            <div className="hint-button">
              {" "}
              <button onClick={handleClick}>Подсказка</button>
            </div>
            {isVisibleHint && <p>Переверни изображение</p>}
          </div>
        </div>

        <Formik
          initialValues={{ answer: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.answer) {
              errors.answer = "Обязательное поле для ввода";
            } else if (values.answer.toUpperCase() !== "87") {
              errors.answer = "Неправильно";
            }
            return errors;
          }}
          onSubmit={(values) => {
            if (values.answer.toUpperCase() === "87") {
              console.log("true");
              setIsAnswerRight(true);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="fifth-page__answer-container">
                <p>Ответ:</p>
                <input
                  autocomplete="off"
                  className="first-page__ansmer-input"
                  type="text"
                  name="answer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.answer}
                  placeholder="Введите правильный ответ"
                />
                {errors.answer && touched.answer && errors.answer}
              </div>
              <div className="first-page__button-container">
                <button
                  className="main-page__button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Проверить
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SixthQuestion;
