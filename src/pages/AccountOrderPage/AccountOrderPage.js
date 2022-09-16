import React from "react";
import { useTitle } from "../../hooks/useTitle";
import "./index.scss";
const AccountOrderPage = () => {
  useTitle("Accout order");

  return (
    <main className="my-order">
      <div className="content">
        <h3>Đơn hàng của tôi</h3>
        <div className="order-list">
          <table className="table-order-items">
            <thead>
              <tr>
                <th className="common-th id">Đơn hàng</th>
                <th className="common-th date">Ngày mua</th>
                <th className="common-th qty">Số lượng</th>
                <th className="common-th total">Tổng tiền</th>
                <th className="common-th status">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="common-th id">100001</th>
                <th className="common-th date">9/13/2022</th>
                <th className="common-th qty">3</th>
                <th className="common-th total">1000000đ</th>
                <th className="common-th status">Pending</th>
              </tr>
              <tr>
                <th className="common-th id">100001</th>
                <th className="common-th date">9/13/2022</th>
                <th className="common-th qty">3</th>
                <th className="common-th total">1000000đ</th>
                <th className="common-th status">Pending</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default AccountOrderPage;