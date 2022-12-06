import React from "react";
import { useTitle } from "../../hooks/useTitle";
import "./index.scss";
import { Col, Row, Button, Input } from "antd";
import { castToVND } from "../../utils";
import { Link } from "react-router-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Steps } from "antd";

const PaymentPage = () => {
  useTitle("Payment");
  const { Step } = Steps;
  return (
    <section className="payment-page">
      <Row justify="center">
        <Col xl={8} md={16} xs={24}>
          <Steps size="large" current={1}>
            <Step title="Giỏ hàng" />
            <Step title="Đặt hàng" />
            <Step title="Hoàn tất" />
          </Steps>
        </Col>
      </Row>
      <section className="payment-detail">
        <Row
          style={{
            padding: "0 100px",
          }}
        >
          <Col xl={18} className="left">
            <div className="payment-title">
              <div>
                <h2>Thông tin giao hàng</h2>
              </div>
              <div>
                <Link to="/cart">
                  <span>Quay lại giỏ hàng</span>
                </Link>
              </div>
            </div>
            <div className="check-form">
              <div className="check-form-input">
                <input type="text" placeholder="Họ và tên" required />
              </div>
              <div className="check-form-input">
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  pattern="[0]{1} [0-9]{9}"
                  required
                />
              </div>
              <div className="check-form-input">
                <select required>
                  <option value="" disabled selected>
                    Tỉnh/ Thành phố
                  </option>
                  <option value="test">Test</option>
                  <option value="test1">Test 1</option>
                  <option value="test2">Test 2</option>
                </select>
              </div>
              <div className="check-form-input">
                <select required>
                  <option value="" disabled selected>
                    Quận/ Huyện
                  </option>
                  <option value="test">Test</option>
                  <option value="test1">Test 1</option>
                  <option value="test2">Test 2</option>
                </select>
              </div>
              <div className="check-form-input">
                <select required>
                  <option value="" disabled selected>
                    Phường/ Xã
                  </option>
                  <option value="test">Test</option>
                  <option value="test1">Test 1</option>
                  <option value="test2">Test 2</option>
                </select>
              </div>
              <div className="check-form-input">
                <input type="text" placeholder="Nhập địa chỉ" required />
              </div>
            </div>
            <div className="checkout-pay">
              <div className="checkout-pay-title">Phương thức thanh toán</div>
              <div className="checkout-pay-content">
                <div>
                  <input type="radio" value="1" name="pay-check" />
                  <label>Thanh toán khi nhận được hàng (COD)</label>
                </div>
                <div>
                  <input type="radio" value="2" name="pay-check"/>
                  <label>Thanh toán qua tài khoản ngân hàng</label>
                </div>
                <div style={{marginBottom: "36px"}}>
                  <input type="radio" value="3" name="pay-check"/>
                  <label>Thanh toán bằng VNPAY</label>
                </div>
              </div>
            </div>
            <div className="checkout-cart">
              <div className="qtt-product">Giỏ hàng</div>
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
                    <Input value={1} className="input-qtt" />
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
              <div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#77757f",
                  }}
                >
                  (*) Đã bao gồm thuế GTGT.
                </p>
              </div>
            </div>
            <div className="btn-order">
              <Button type="primary">Thanh Toán</Button>
            </div>
          </Col>
        </Row>
      </section>
    </section>
  );
};

export default PaymentPage;
