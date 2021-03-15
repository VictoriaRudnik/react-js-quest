import React, { useEffect, useState } from "react";
import Header from "../../layouts/header/Header";
import puzzle7 from "../../../assets/puzzle7.PNG";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

import "./style.css";

const SeventhQuestion = () => {
  const history = useHistory();
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [isVisibleHint, setIsVisibleHint] = useState(false);
  const handleClick = () => {
    setIsVisibleHint(true);
  };
  useEffect(() => {
    if (isAnswerRight) {
      history.push("/8_question");
    }
  });
  return (
    <div className="first-question">
      <Header />
      <div className="first-question__container">
        <p className="first-question__title"> Задание №7 </p>
        <p>Реши задачу:</p>
        <div className="fifth-page__hint-container">
          <img className="fifth-page_img" src={puzzle7} alt="puzle" />
          <div className="fifth-hint-container">
            <div className="hint-button">
              {" "}
              <button onClick={handleClick}>Подсказка</button>
            </div>
            {isVisibleHint && <p>подумай еще, у тебя все получится</p>}
          </div>
        </div>

        <Formik
          initialValues={{ answer: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.answer) {
              errors.answer = "Обязательное поле для ввода";
            } else if (values.answer.toUpperCase() !== "48") {
              errors.answer = "Неправильно";
            }
            return errors;
          }}
          onSubmit={(values) => {
            if (values.answer.toUpperCase() === "48") {
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

export default SeventhQuestion;
