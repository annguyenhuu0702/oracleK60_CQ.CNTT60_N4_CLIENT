import React from "react";
import "./index.scss";
import { useTitle } from "../../hooks/useTitle";
import Product from "../../components/Product";
import { Row } from "antd";

const WishListPage = () => {
  useTitle("Wish list");
  return (
    <main className="wish-list">
      <div className="content">
        <h3>Sản phẩm yêu thích của tôi</h3>
        <Row gutter={[16, 16]} className="list-product">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Row>
      </div>
    </main>
  );
};

export default WishListPage;