import React, { useEffect, useState } from "react";
import Header from "../../layouts/header/Header";
import puzzle9 from "../../../assets/puzzle9.jpg";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import InputMask from "react-input-mask";
import "./style.css";

const NinthQuestion = () => {
  const history = useHistory();
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [isVisibleHint, setIsVisibleHint] = useState(false);
  const handleClick = () => {
    setIsVisibleHint(true);
  };
  useEffect(() => {
    if (isAnswerRight) {
      history.push("/10_question");
    }
  });
  return (
    <div className="first-question">
      <Header />
      <div className="first-question__container">
        <p className="first-question__title"> Задание №9 </p>
        <p>Угадай название песни по фото:</p>
        <div className="fifth-page__hint-container">
          <img className="ninth-page_img" src={puzzle9} alt="puzle" />
          <div className="fifth-hint-container">
            <div className="hint-button">
              <button onClick={handleClick}>Подсказка</button>
            </div>
            {isVisibleHint && <p>На фоне Эйфелевой башни С айфона селфи ...</p>}
          </div>
        </div>

        <Formik
          initialValues={{ answer: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.answer) {
              errors.answer = "Обязательное поле для ввода";
            } else if (values.answer.toUpperCase() !== "ВОЯЖ") {
              errors.answer = "Неправильно";
            }
            return errors;
          }}
          onSubmit={(values) => {
            if (values.answer.toUpperCase() === "ВОЯЖ") {
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
                <InputMask
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

export default NinthQuestion;
