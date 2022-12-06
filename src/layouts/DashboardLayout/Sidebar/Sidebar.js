import React, { useState } from "react";
import "./index.scss";
import {
  AppstoreOutlined,
  BarChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  console.log(label, key, icon, children, type);
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Statistical", "/admin/statistical", <BarChartOutlined />),
  getItem("User", "/admin", <UserOutlined />),
  getItem("All Category", "sub-category", <UserOutlined />, [
    getItem("Category Type", "/admin/category-type"),
    getItem("Category", "/admin/category"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContent = (item) => {
    navigate(item.key);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <section
      style={
        collapsed
          ? { width: "80px", minHeight: "100vh" }
          : { width: "256px", minHeight: "100vh" }
      }
      className="wrap"
    >
      <div className="logo">
        {collapsed ? (
          <MenuUnfoldOutlined onClick={toggleCollapsed} />
        ) : (
          <MenuFoldOutlined onClick={toggleCollapsed} />
        )}
        {!collapsed && (
          <img
            src="https://res.cloudinary.com/diot4imoq/image/upload/v1661177083/canifa/logo_xju1y6.svg"
            alt=""
            style={{
              height: "35px",
            }}
          />
        )}
      </div>
      <Menu
        className="menu"
        style={collapsed ? { width: "80px" } : { width: "256px" }}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={handleContent}
        selectedKeys={[location.pathname]}
      />
    </section>
  );
};

export default Sidebar;
