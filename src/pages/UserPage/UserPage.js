import { Layout, Pagination } from "antd";
import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import "./index.scss";
import TableUser from "./TableUser/TableUser";

const { Content } = Layout;

const UserPage = () => {
  return (
    <main className="section-common">
      <HeaderTitle title="User" />
      <Content className="common-layout-content-cus">
        <div className="common-content-wrap">
          <div className="common-content">
            <TableUser />
          </div>
        </div>
      </Content>
      <div className="common-pagination-cus">
        <Pagination
          pageSize={7}
          current={1}
          showSizeChanger={true}
          pageSizeOptions={[7, 20, 100, 200]}
        />
      </div>
    </main>
  );
};

export default UserPage;
