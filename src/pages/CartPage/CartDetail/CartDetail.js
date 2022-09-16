import { Button, Col, Input, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { castToVND } from "../../../utils";
import "./index.scss";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
const CartDetail = () => {
  return (
    <section className="cart-detail">
      <Row
        style={{
          padding: "0 100px",
        }}
      >
        <Col xl={18} className="left">
          <div className="qtt-product">(1) sản phẩm</div>
          <div className="list-product">
            <div className="title">
              <div
                className="text-title"
                style={{
                  width: "40%",
                }}
              >
                Sản phẩm
              </div>
              <div
                className="text-title"
                style={{
                  width: "20%",
                }}
              >
                Giá tiền
              </div>
              <div
                className="text-title"
                style={{
                  width: "20%",
                }}
              >
                Số lượng
              </div>
              <div
                className="text-title"
                style={{
                  width: "20%",
                }}
              >
                Tổng tiền
              </div>
            </div>
            <div className="product-item">
              <div
                className="info"
                style={{
                  width: "40%",
                  padding: "0 20px 0 0",
                }}
              >
                <img
                  src="https://canifa.com/img/210/300/resize/6/l/6ls22s011-sm123-2-thumb.jpg"
                  alt=""
                />
                <div className="wrap-info">
                  <a href=" ">Giày adidas</a>
                  <span>42 / Trắng</span>
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    Xóa
                  </span>
                </div>
              </div>
              <div
                className="price"
                style={{
                  width: "20%",
                  padding: "0 20px 0 0",
                }}
              >
                <span className="current-price">{castToVND(3000000)}</span>
                <span className="root-price">{castToVND(5000000)}</span>
              </div>
              <div
                className="qtt"
                style={{
                  width: "20%",
                  padding: "0 20px 0 0",
                }}
              >
                <AiOutlineMinusCircle />
                <Input value={1} className="input-qtt" />
                <AiOutlinePlusCircle />
              </div>
              <div
                className="total-price"
                style={{
                  width: "20%",
                  padding: "0 20px 0 0",
                }}
              >
                <span>{castToVND(1000000000)}</span>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={6} className="right">
          <div className="title">
            <h2>Đơn hàng</h2>
          </div>
          <div className="info">
            <div className="root-price">
              <span>Giá gốc</span>
              <span>{castToVND(3333333)}</span>
            </div>
            <div className="sale">
              <span>Giảm giá</span>
              <span className="sale-price">-{castToVND(3333333)}</span>
            </div>
            <div className="total-price">
              <span>
                <b>Tổng tiền thanh toán</b>
              </span>
              <span>
                <b>{castToVND(3333333)}</b>
              </span>
            </div>
          </div>
          <div className="btn-order">
            <Link to="/payment">
              <Button type="primary">Đặt hàng</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default CartDetail;
