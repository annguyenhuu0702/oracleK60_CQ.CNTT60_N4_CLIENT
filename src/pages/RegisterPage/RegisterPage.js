import React from "react";
import { useTitle } from "../../hooks/useTitle";
import "./index.scss";

const RegisterPage = () => {
  useTitle("Register");

  return <main className="register"></main>;
};

export default RegisterPage;
