import { Button, Col, Input, notification, Row, Steps } from "antd";
import "antd/dist/antd.min.css"; // or 'antd/dist/antd.less'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../../components/Cart";
import { apiCallerWithToken } from "../../config/configAxios";
import { useTitle } from "../../hooks/useTitle";
import provinces from "../../province.json";
import { authSelector } from "../../redux/slices/authSlice";
import { cartActions, cartSelector } from "../../redux/slices/cartSlice";
import { castToVND } from "../../utils";
import "./index.scss";
const PaymentPage = () => {
  useTitle("Payment");

  const { cart } = useSelector(cartSelector);
  const { accessToken, user } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    provinces,
    districts: [],
    wards: [],
    province: cart && cart.province ? cart.province : "",
    district: cart && cart.district ? cart.district : "",
    ward: cart && cart.ward ? cart.ward : "",
    coupon: null,
    form: {
      code: "",
      address: cart && cart.address ? cart.address : "",
      fullName: user && user.fullName ? user.fullName : "",
      phone: user && user.phone ? user.phone : "",
    },
    msgCoupon: "",
  });

  const handleChangeProvince = (e) => {
    const name = e.target.value;
    if (name) {
      dispatch(cartActions.setCart({ ...cart, province: name }));
      setState((prev) => ({
        ...prev,
        districts: prev.provinces.find((province) => province.name === name)
          .districts,
        province: name,
      }));
    }
  };

  const handleChangeDistrict = (e) => {
    const name = e.target.value;
    if (name) {
      dispatch(cartActions.setCart({ ...cart, district: name }));
      setState((prev) => ({
        ...prev,
        wards: prev.districts.find((district) => district.name === name).wards,
        district: name,
      }));
    }
  };

  const handleChangeWard = (e) => {
    const name = e.target.value;
    if (name) {
      dispatch(cartActions.setCart({ ...cart, ward: name }));
      setState((prev) => ({
        ...prev,
        ward: name,
      }));
    }
  };

  const handleCheckCoupon = async () => {
    try {
      const res = await apiCallerWithToken(accessToken, dispatch).get(
        "coupon/check",
        {
          params: {
            code: state.form.code,
            // price: cart.items.reduce(
            //   (p, cartItem) =>
            //     p +
            //     cartItem.quantity * cartItem.productVariant.product.salePrice,
            //   0
            // ),
          },
        }
      );
      const { data } = res.data;
      if (data) {
        setState((prev) => ({
          ...prev,
          msgCoupon: "",
          coupon: data,
          form: { ...prev.form, code: "" },
        }));
      } else {
        setState((prev) => ({
          ...prev,
          msgCoupon: `M?? gi???m gi?? kh??ng h???p l???`,
        }));
      }
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        const res = await apiCallerWithToken(accessToken, dispatch).patch(
          "order/account/payment",
          {
            address: `${state.form.address} ${state.ward}, ${state.district}, ${state.province}`,
            fullName: state.form.fullName,
            phone: state.form.phone,
            paymentMethod: "Thanh to??n khi nh???n ???????c h??ng (COD)",
            ...(state.coupon ? { couponId: state.coupon.id } : {}),
          }
        );
        const { code, message, data } = res.data;
        if (code === 201 || message === "Success") {
          dispatch(cartActions.setCart({ items: [] }));
          navigate("/payment/success", {
            state: {
              current: new Date().getTime(),
              expiredIn: 5 * 60 * 1000,
              data,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      notification.info({
        message: "B???n c???n ph???i ????ng nh???p ????? ho??n t???t ?????t h??ng",
      });
    }
  };

  const getTotalPrice = () => {
    const firstPrice = cart.items.reduce(
      (p, cartItem) =>
        p + cartItem.quantity * cartItem.productVariant.product.salePrice,
      0
    );

    return state.coupon ? firstPrice - state.coupon.priceDiscount : firstPrice;
  };
  if (!cart) return <>OK</>;

  return (
    <section className="payment-page">
      <Row justify="center">
        <Col xl={8} md={16} xs={24}>
          <Steps
            items={[
              { title: "Gi??? h??ng" },
              { title: "?????t h??ng" },
              { title: "Ho??n t???t" },
            ]}
            size="large"
            current={1}
          />
        </Col>
      </Row>
      <section className="payment-detail">
        <form onSubmit={handleSubmit}>
          <Row
            style={{
              padding: "0 100px",
            }}
          >
            <Col xl={18} className="left">
              <div className="payment-title">
                <div>
                  <h2>Th??ng tin giao h??ng</h2>
                </div>
                <div>
                  <Link to="/cart">
                    <span>Quay l???i gi??? h??ng</span>
                  </Link>
                </div>
              </div>
              <div className="check-form">
                <div className="check-form-input">
                  <input
                    type="text"
                    value={state.form.fullName}
                    onChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        form: { ...prev.form, fullName: e.target.value },
                      }))
                    }
                    placeholder="Nh???p h??? t??n"
                    required
                  />
                </div>
                <div className="check-form-input">
                  <input
                    type="text"
                    value={state.form.phone}
                    onChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        form: { ...prev.form, phone: e.target.value },
                      }))
                    }
                    placeholder="Nh???p s??? ??i???n tho???i"
                    required
                  />
                </div>
                <div className="check-form-input">
                  <select
                    required
                    value={state.province}
                    onChange={handleChangeProvince}
                  >
                    <option value="" disabled>
                      T???nh/ Th??nh ph???
                    </option>
                    {state.provinces.map((province) => {
                      return (
                        <option key={province.name} value={province.name}>
                          {province.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="check-form-input">
                  <select
                    required
                    disabled={state.districts.length === 0}
                    value={state.district}
                    onChange={handleChangeDistrict}
                  >
                    <option value="">Qu???n/ Huy???n</option>
                    {state.districts.map((district) => {
                      return (
                        <option key={district.name} value={district.name}>
                          {district.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="check-form-input">
                  <select
                    required
                    value={state.ward}
                    disabled={state.wards.length === 0}
                    onChange={handleChangeWard}
                  >
                    <option value="">Ph?????ng/ X??</option>
                    {state.wards.map((ward) => {
                      return (
                        <option key={ward.name} value={ward.name}>
                          {ward.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="check-form-input">
                  <input
                    type="text"
                    value={state.form.address}
                    onChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        form: { ...prev.form, address: e.target.value },
                      }))
                    }
                    placeholder="Nh???p ?????a ch???"
                    required
                  />
                </div>
              </div>
              <div className="checkout-pay">
                <div className="checkout-pay-title">Ph????ng th???c thanh to??n</div>
                <div className="checkout-pay-content">
                  <div>
                    <input
                      type="radio"
                      value="1"
                      checked={true}
                      onChange={() => {}}
                      name="pay-check"
                    />
                    <label>Thanh to??n khi nh???n ???????c h??ng (COD)</label>
                  </div>
                </div>
              </div>
              <div className="checkout-cart">
                <div className="qtt-product">Gi??? h??ng</div>
                <Cart />
              </div>
            </Col>
            <Col xl={6} className="right">
              <div className="title">
                <h2>????n h??ng</h2>
              </div>
              <div className="info">
                <div className="root-price">
                  <span>Gi?? g???c</span>
                  <span>
                    {castToVND(
                      cart.items.reduce(
                        (p, cartItem) =>
                          p +
                          cartItem.quantity *
                            cartItem.productVariant.product.price,
                        0
                      )
                    )}
                  </span>
                </div>
                <div className="sale">
                  <span>Gi???m gi??</span>
                  <span className="sale-price">
                    -
                    {castToVND(
                      cart.items.reduce(
                        (p, cartItem) =>
                          p +
                          cartItem.quantity *
                            (cartItem.productVariant.product.price -
                              cartItem.productVariant.product.salePrice),
                        0
                      )
                    )}
                  </span>
                </div>
                {state.coupon ? (
                  <div className="sale">
                    <span>Gi???m gi??</span>
                    <span className="sale-price">
                      -{castToVND(state.coupon.priceDiscount)}
                    </span>
                  </div>
                ) : null}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  <div className="check-form-input" style={{ flex: 1 }}>
                    <input
                      type="text"
                      value={state.form.code}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          form: { ...prev.form, code: e.target.value },
                        }))
                      }
                      placeholder="M?? gi???m gi??"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleCheckCoupon}
                    style={{ height: 56, marginBottom: 16, cursor: "pointer" }}
                  >
                    S??? d???ng
                  </button>
                </div>
                {state.msgCoupon && (
                  <div className="" style={{ color: "red", fontSize: 12 }}>
                    {state.msgCoupon}
                  </div>
                )}
                <div className="total-price">
                  <span>
                    <b>T???ng ti???n thanh to??n</b>
                  </span>
                  <span>
                    <b>{castToVND(getTotalPrice())}</b>
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#77757f",
                    }}
                  >
                    (*) ???? bao g???m thu??? GTGT.
                  </p>
                </div>
              </div>
              <div className="btn-order">
                <Button type="primary" htmlType="submit">
                  Thanh To??n
                </Button>
              </div>
            </Col>
          </Row>
        </form>
      </section>
    </section>
  );
};

export default PaymentPage;
