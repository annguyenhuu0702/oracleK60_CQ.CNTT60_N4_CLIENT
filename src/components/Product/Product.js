import React, { useState } from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
import { castToVND } from "../../utils/index";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Product = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Col xl={6} className="product">
      <div className="item">
        <div className="img">
          <Link to="">
            <img
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/9ad2a27e-d703-4604-ad5b-72686a3236d6/air-jordan-1-low-se-shoes-1dZB3K.png"
              alt=""
            />
            <div
              className="wish-list"
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              {!isActive && <AiOutlineHeart className="icon-heart" />}
              {isActive && <AiFillHeart className="icon-heart active" />}
            </div>
          </Link>
        </div>
        <div className="info">
          <div className="name">
            <Link to="">
              <span>Giày nike 30000 tỏi</span>
            </Link>
          </div>
          <div className="price">
            <span>{castToVND(3000000000)}</span>
            <span className="root-price">{castToVND(300000)}</span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Product;
