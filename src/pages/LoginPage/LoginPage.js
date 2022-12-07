import { Button, Form, Input, notification } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../config/configAxios";
import { useTitle } from "../../hooks/useTitle";
import { authActions } from "../../redux/slices/authSlice";
import "./index.scss";

const LoginPage = () => {
  useTitle("Login");

  return <main className="login"></main>;
};
export default LoginPage;
