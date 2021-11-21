import React from 'react';

import './Login.css';
import {NavLink} from "react-router-dom";
import logo from "../../images/logo.svg";
import Form from "../Form/Form";
import Input from "../Input/Input";
import {Validator} from "../../utils/Validator";

function Login(props){

const { values, handleChange, isFormValid, errors, setValues } = Validator()

function handleLogin(evt) {
  evt.preventDefault();
  props.onLogin(values.password, values.email);
  props.onClear();
}
  

  return(
    <div className="login register">
      <NavLink to="/"><img src={logo} alt="логотип Movie" className="header__logo register__header"/></NavLink>
      <h2 className="register__title">Рады видеть!</h2>
      <Form
        buttonText={props.isSaving ? "Загружаемся" : "Войти"}
        text="Еще не зарегистрированы?"
        url="/signup"
        linkText="Регистрация"
        onSubmit={handleLogin}
        disabled={isFormValid}
        onClear={props.onClear}
        errorMsg={props.errorMessage}
      >
        <Input
         type="email"
         name="email"
         inputTitle="E-mail"
         minLength="7"
         maxLength="200"
         errorText={errors.email}
         value={values.email || ""}
         onChange={handleChange}
         isValid={isFormValid}
         required
        />
        <Input
          type="password"
          name="password"
          inputTitle="Пароль"
          minLength="8"
          maxLength="200"
          errorText={errors.password}
          value={values.password || ""}
          onChange={handleChange}
          isValid={isFormValid}
          required
        />
      </Form>
    </div>
  );
}

export default Login;
