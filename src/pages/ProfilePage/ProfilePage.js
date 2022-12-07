import React from "react";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useTitle } from "../../hooks/useTitle";
import "./index.scss";

const ProfilePage = () => {
  useTitle("Account");
  return <main className="profile"></main>;
};

export default ProfilePage;
