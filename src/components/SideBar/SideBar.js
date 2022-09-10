import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleContent = (item) => {
    navigate(item.key);
  };
  return (
    <Sider trigger={null} collapsible>
      <div className="logo" />
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={handleContent}
        items={[
          {
            key: "/profile",
            icon: <UserOutlined />,
            label: "Tài khoản",
          },
          {
            key: "/profile/wish-list",
            icon: <VideoCameraOutlined />,
            label: "Yêu thích",
          },
          {
            key: "/profile/order",
            icon: <UploadOutlined />,
            label: "Đơn hàng của tôi",
          },
          {
            key: "logout",
            icon: <UploadOutlined />,
            label: "Đăng xuất",
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;
