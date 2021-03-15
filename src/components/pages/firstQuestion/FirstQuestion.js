import React, { useEffect, useState } from "react";
import Header from "../../layouts/header/Header";
import puzzle from "../../../assets/slovo_na_penale.jpg";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

import "./style.css";

const FirstQuestion = () => {
  const history = useHistory();
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  useEffect(() => {
    if (isAnswerRight) {
      history.push("/second_question");
    }
  });
  return (
    <div className="first-question">
      <Header />
      <div className="first-question__container">
        <p className="first-question__title"> Задание №1 </p>
        <p>Мысленно закрой пенал и прочитай слово, которое на нем написано.</p>
        <img src={puzzle} alt="puzle" />

        <Formik
          initialValues={{ answer: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.answer) {
              errors.answer = "Обязательное поле для ввода";
            } else if (values.answer.toUpperCase() !== "САША") {
              errors.answer = "Неправильно";
            }
            return errors;
          }}
          onSubmit={(values) => {
            if (values.answer.toUpperCase() === "САША") {
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

export default FirstQuestion;
