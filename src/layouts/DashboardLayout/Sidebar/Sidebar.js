import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { memo } from "react";
import { GiChart, GiConverseShoe } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const keys = [
  "/admin",
  "/admin/statistical",
  "/admin/user",
  "/admin/product-category",
  "/admin/product",
  "/admin/inventory",
  "/admin/order",
];
const items = [
  getItem(
    "Bảng điều khiển",
    "/admin",
    <RiDashboardLine style={{ fontSize: 20, transform: "translateY(-2px)" }} />
  ),
  getItem(
    "Tài khoản",
    "/admin/user",
    <UserOutlined style={{ fontSize: 20, transform: "translateY(-2px)" }} />
  ),
  getItem(
    "Danh mục",
    "/admin/product-category",
    <MdOutlineCategory
      style={{ fontSize: 20, transform: "translateY(-2px)" }}
    />
  ),
  getItem(
    "Sản phẩm",
    "/admin/product",
    <GiConverseShoe style={{ fontSize: 20, transform: "translateY(-2px)" }} />
  ),
  // getItem(
  //   "Inventory",
  //   "/admin/inventory",
  //   <GiConverseShoe style={{ fontSize: 20, transform: "translateY(-2px)" }} />
  // ),
  getItem(
    "Đơn hàng",
    "/admin/order",
    <TbTruckDelivery style={{ fontSize: 20, transform: "translateY(-2px)" }} />
  ),
  getItem(
    "Thống kê",
    "/admin/statistical",
    <GiChart style={{ fontSize: 20, transform: "translateY(-2px)" }} />
  ),
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContent = (item) => {
    navigate(item.key);
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
        <Link to="/">
          <span
            style={{
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            <img
              src="https://res.cloudinary.com/dwhjftwvw/image/upload/v1667812984/xshop/running-shoe-symbol-on-white-backdrop_lyeqr9.jpg"
              alt=""
              style={{
                width: 42,
                height: 42,
                marginRight: 6,
              }}
            />
            Shoes
          </span>
        </Link>
      </div>
      <Menu
        className="menu"
        // style={collapsed ? { width: "80px" } : { width: "256px" }}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={handleContent}
        selectedKeys={keys.filter((key) => location.pathname === key)}
      />
    </section>
  );
};

export default memo(Sidebar);
