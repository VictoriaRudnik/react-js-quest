import React, { useEffect, useState } from "react";
import Header from "../../layouts/header/Header";
import puzzle3 from "../../../assets/puzzle3.PNG";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

import "./style.css";

const ThirdQuestion = () => {
  const history = useHistory();
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  useEffect(() => {
    if (isAnswerRight) {
      history.push("/4_question");
    }
  });
  return (
    <div className="first-question">
      <Header />
      <div className="first-question__container">
        <p className="first-question__title"> Задание №3 </p>
        <p>Реши задачу:</p>
        <img className="second__img" src={puzzle3} alt="puzle" />

        <Formik
          initialValues={{ answer: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.answer) {
              errors.answer = "Обязательное поле для ввода";
            } else if (values.answer !== "2") {
              errors.answer = "Неправильно";
            }
            return errors;
          }}
          onSubmit={(values) => {
            if (values.answer === "2") {
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
              <div className="first-page__answer-container">
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

export default ThirdQuestion;
