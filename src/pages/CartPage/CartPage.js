import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import React from "react";
import { useTitle } from "../../hooks/useTitle";
import "./index.scss";

const CartPage = () => {
  useTitle("Cart");
  return <section className="cart-page"></section>;
};

export default CartPage;
