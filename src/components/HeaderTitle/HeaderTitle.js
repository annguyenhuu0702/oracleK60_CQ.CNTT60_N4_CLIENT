import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const HeaderTitle = ({ title }) => {
  return (
    <section className="header">
      <span>{title}</span>
      <div className="account">
        <h3>
          Hi, <b>Nguyễn Hữu An</b>
        </h3>
        <div className="profile">
          <Link to="/admin/profile">My Account</Link>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderTitle;
