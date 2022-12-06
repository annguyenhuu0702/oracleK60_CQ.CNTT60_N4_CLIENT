import React from "react";
import "./index.scss";
import HeaderTitle from "../../components/HeaderTitle";
import { Layout } from "antd";

const { Content } = Layout;

const StatisticalPage = () => {
  return (
    <main className="section-common">
      <HeaderTitle title="Statistical" />
      <Content className="common-layout-content-cus">
        <div className="common-content-wrap">
          <div className="common-content"></div>
        </div>
      </Content>
    </main>
  );
};

export default StatisticalPage;
