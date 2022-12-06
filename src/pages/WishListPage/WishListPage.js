
import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Product from "../../components/Product";
import { apiCallerWithToken } from "../../config/configAxios";
import { useTitle } from "../../hooks/useTitle";
import { authSelector } from "../../redux/slices/authSlice";
import {
  wishlistActions,
  wishlistSelector,
} from "../../redux/slices/wishlistSlice";
import "./index.scss";
const PAGE_SIZE = 8;
const WishListPage = () => {
  useTitle("Wish list");

  const { itemsLimit, count } = useSelector(wishlistSelector);
  const { accessToken, user } = useSelector(authSelector);
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  const handleLoadMore = () => {
    setPageSize((prev) => prev + PAGE_SIZE);
  };

  const handleCollapse = () => {
    setPageSize(PAGE_SIZE);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await apiCallerWithToken(accessToken, dispatch).get(
          "wishlist/account",
          { params: { limit: pageSize } }
        );
        const { code, message, data } = res.data;
        if (code === 200 && message === "Success") {
          dispatch(wishlistActions.setWishListLimit(data));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [accessToken, dispatch, pageSize]);
  if (!user) return <Navigate to="/login" />;
  return (
    <main className="wish-list-page">
      <div className="content">
        <h3>Sản phẩm yêu thích của tôi</h3>
        <div
          style={{
            padding: "0 20px 0 0",
          }}
        >
          <Row gutter={[16, 16]} className="list-product">

          </Row>
        </div>
      </div>
    </main>
  );
};

export default WishListPage;
