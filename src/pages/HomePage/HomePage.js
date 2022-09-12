import { Row } from "antd";
import React from "react";
import Product from "../../components/Product/Product";
import { useTitle } from "../../hooks/useTitle";
import "./index.scss";
const HomePage = () => {
  useTitle("Trang chủ");
  return (
    <main
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "0 100px",
      }}
    >
      <Row gutter={[16, 16]}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Row>
    </main>
  );
};

export default HomePage;
