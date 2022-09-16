import React from "react";
import "./index.scss";
import CartDetail from "./CartDetail/CartDetail";
import { useTitle } from "../../hooks/useTitle";
import { Col, Row } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Steps } from "antd";

const CartPage = () => {
  useTitle("Cart");
  const { Step } = Steps;
  return (
    <section className="cart-page">
      <Row justify="center">
        <Col xl={8} md={16} xs={24}>
          <Steps size="large" current={0}>
            <Step title="Giỏ hàng" />
            <Step title="Đặt hàng" />
            <Step title="Hoàn tất" />
          </Steps>
        </Col>
      </Row>
      <CartDetail />
    </section>
  );
};

export default CartPage;
