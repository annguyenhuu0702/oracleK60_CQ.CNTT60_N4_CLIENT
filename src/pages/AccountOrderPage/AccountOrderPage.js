import React from "react";
import { useTitle } from "../../hooks/useTitle";
import "./index.scss";
const AccountOrderPage = () => {
  useTitle("Accout order");

  return <main className="my-order"></main>;
};

export default AccountOrderPage;
