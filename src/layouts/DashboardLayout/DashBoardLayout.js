import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const DashBoardLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      {children}
    </div>
  );
};

export default DashBoardLayout;
