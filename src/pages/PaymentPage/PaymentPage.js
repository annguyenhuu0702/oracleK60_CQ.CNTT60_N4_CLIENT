import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import React from "react";
import { useTitle } from "../../hooks/useTitle";
import "./index.scss";

const PaymentPage = () => {
  useTitle("Payment");
  return <section className="payment-page"></section>;
};

export default PaymentPage;
