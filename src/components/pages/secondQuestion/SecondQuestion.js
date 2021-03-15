import React, { useEffect, useState } from "react";
import Header from "../../layouts/header/Header";
import puzzle2 from "../../../assets/puzzle2.PNG";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

import "./style.css";

const SecondQuestion = () => {
  const history = useHistory();
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  useEffect(() => {
    if (isAnswerRight) {
      history.push("/third_question");
      console.log("11111111111111111");
    }
  });
  return (
    <div className="first-question">
      <Header />
      <div className="first-question__container">
        <p className="first-question__title"> Задание №2 </p>
        <p>Реши задачу:</p>
        <img className="second__img" src={puzzle2} alt="puzle" />

        <Formik
          initialValues={{ answer: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.answer) {
              errors.answer = "Обязательное поле для ввода";
            } else if (values.answer !== "90.5") {
              errors.answer = "Неправильно";
            }
            return errors;
          }}
          onSubmit={(values) => {
            if (values.answer === "90.5") {
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

            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="first-page__answer-container">
                <p>Ответ:</p>
                <input
                  autocomplete="off"
                  pattern="\d+(\.\d{1})?"
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
                  // disabled={isSubmitting}
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

export default SecondQuestion;
