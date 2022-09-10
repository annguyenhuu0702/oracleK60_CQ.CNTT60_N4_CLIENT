import React from "react";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./index.scss";
import { useTitle } from "../../hooks/useTitle";

const ProfilePage = () => {
  useTitle("Account");
  return <main className="profile">đây là accout</main>;
};

export default ProfilePage;
