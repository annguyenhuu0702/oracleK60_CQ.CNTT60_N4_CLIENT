import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import Product from "../../components/Product/Product";
import "./index.scss";
const ProductDetailPage = () => {
  const [placement, setPlacement] = useState(0);
  const sizes = [90, 100, 110, 120];
  console.log(placement);
  return (
    <main>
      <div className="product-detail" style={{ margin: "0 100px" }}>
        <div>
          <Row gutter={16}>
            <Col className="gutter-row" span={16}>
              <div className="image_main">
                <img
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    paddingRight: "50px",
                  }}
                  src="https://canifa.com/img/1000/1500/resize/3/t/3ts22s002-sy038-1-thumb.jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="product_infor">
                <div className="header_product-detail">
                  <h2 className="product_name">Giày Adidas 3 tỏi</h2>
                  <span className="product_code">MÃ SP:3TS22S002</span>
                  <div className="box_price" style={{ display: "flex" }}>
                    <div className="new_price" style={{ marginRight: "12px" }}>
                      3.000.000.000
                    </div>
                    <div className="old_price">2.999.999.999</div>
                  </div>
                </div>
                <div className="body_product-detail">
                  <div className="box_color">
                    <div className="code_color">
                      Màu sắc: <span>SK010</span>
                    </div>
                    <img
                      src="https://media.canifa.com/attribute/swatch/images/sy038.png"
                      alt=""
                      className="img_color"
                    />
                  </div>
                  <div className="box_size">
                    <span className="size">
                      Kích cỡ: <span></span>
                    </span>
                    <div className="option_select" value={placement}>
                      {sizes.map((size, index) => {
                        return (
                          <div
                            key={index}
                            className={
                              placement === index
                                ? "select_wrapper selected_wrapper"
                                : "select_wrapper"
                            }
                            onClick={() => {
                              setPlacement(index);
                            }}
                          >
                            {size}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="product_service">
                    <span className="service_title">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzUgMTEuOTk5OUwxMC41OCAxNC44Mjk5TDE2LjI1IDkuMTY5OTIiIHN0cm9rZT0iIzYzQjFCQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" />
                      Miễn phí giao hàng Cho đơn hàng từ{" "}
                      <span className="service_number">490.000đ</span>
                    </span>
                    <br></br>
                    <span className="service_title">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzUgMTEuOTk5OUwxMC41OCAxNC44Mjk5TDE2LjI1IDkuMTY5OTIiIHN0cm9rZT0iIzYzQjFCQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" />
                      Đổi trả miễn phí trong vòng{" "}
                      <span className="service_number">30 ngày</span> kể từ ngày
                      mua
                    </span>
                  </div>
                  <div className="box_buttons">
                    <Button className="btn btn-add-to-cart">
                      Thêm vào giỏ hàng
                    </Button>
                    <Button className="btn btn-find-to-shop">
                      Tìm tại cửa hàng
                    </Button>
                  </div>
                  <div className="box_actions">
                    <span className="action">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMzg0OTkgMTMuNzE5OUwxMy41OTU5IDguNTA5QzE0Ljg3NjMgNy4yMjg2MyAxNS4wNjUyIDUuMTIyMjQgMTMuODUzNSAzLjc3NjY3QzEzLjU1IDMuNDM4NjUgMTMuMTgwOCAzLjE2NjAyIDEyLjc2ODUgMi45NzU0QzEyLjM1NjEgMi43ODQ3OCAxMS45MDkyIDIuNjgwMTcgMTEuNDU1MSAyLjY2Nzk2QzExLjAwMSAyLjY1NTc0IDEwLjU0OTIgMi43MzYxOCAxMC4xMjcyIDIuOTA0MzdDOS43MDUxNyAzLjA3MjU1IDkuMzIxODcgMy4zMjQ5NSA5LjAwMDY0IDMuNjQ2MTdMOC4wMjEyMiA0LjYyNTU4TDcuMTc1NiAzLjc3OTk2QzUuODk1MjMgMi40OTk1OSAzLjc4ODgzIDIuMzEwNjkgMi40NDMyNiAzLjUyMjM1QzIuMTA1MjUgMy44MjU4NSAxLjgzMjYxIDQuMTk1MDQgMS42NDE5OSA0LjYwNzM5QzEuNDUxMzcgNS4wMTk3NCAxLjM0Njc2IDUuNDY2NiAxLjMzNDU1IDUuOTIwNzJDMS4zMjIzNCA2LjM3NDgzIDEuNDAyNzggNi44MjY2NyAxLjU3MDk2IDcuMjQ4NjdDMS43MzkxNSA3LjY3MDY3IDEuOTkxNTUgOC4wNTM5OCAyLjMxMjc2IDguMzc1MjFMNy42NTc0NSAxMy43MTk5QzcuNzUzOTMgMTMuODE2NCA3Ljg4NDc4IDEzLjg3MDYgOC4wMjEyMiAxMy44NzA2QzguMTU3NjYgMTMuODcwNiA4LjI4ODUxIDEzLjgxNjQgOC4zODQ5OSAxMy43MTk5WiIgc3Ryb2tlPSIjMzMzRjQ4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" />
                      Thêm vào yêu thích
                    </span>
                    <span className="action">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjk2IDUuOTMzMzVDMTMuMzYgNi4xNDAwMiAxNC4zNCA3LjM3MzM1IDE0LjM0IDEwLjA3MzNWMTAuMTZDMTQuMzQgMTMuMTQgMTMuMTQ2NyAxNC4zMzMzIDEwLjE2NjcgMTQuMzMzM0g1LjgyNjY1QzIuODQ2NjUgMTQuMzMzMyAxLjY1MzMyIDEzLjE0IDEuNjUzMzIgMTAuMTZWMTAuMDczM0MxLjY1MzMyIDcuMzkzMzUgMi42MTk5OSA2LjE2MDAyIDQuOTc5OTkgNS45NDAwMiIgc3Ryb2tlPSIjMzMzRjQ4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04IDEwLjAwMDJWMi40MTM1NyIgc3Ryb2tlPSIjMzMzRjQ4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC4yMzM2IDMuOTAwMDhMOC4wMDAyNCAxLjY2Njc1TDUuNzY2OTEgMy45MDAwOCIgc3Ryb2tlPSIjMzMzRjQ4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" />{" "}
                      Chia sẻ bạn bè
                    </span>
                  </div>
                </div>
                <div className="footer_product-detail">
                  <div className="title_description">
                    Mô tả:
                    <br></br>
                    <span className="content_description">
                      Áo phông cho bé bo cổ, chất liệu 100% cotton in hình họa
                      tiết dễ thương
                    </span>
                  </div>
                  <div className="title_description">
                    Chất liệu
                    <br></br>
                    <span className="content_description">100% cotton</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="product-related-box" style={{ padding: "0 100px" }}>
        <div className="related-box-title">Có thể bạn sẽ thích</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "16px 0 32px 0",
          }}
        >
          <Row gutter={[16, 16]}>
            <Product />
            <Product />
            <Product />
            <Product />
          </Row>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
