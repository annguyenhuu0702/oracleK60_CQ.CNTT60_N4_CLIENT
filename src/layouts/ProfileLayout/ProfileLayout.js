import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar/SideBar";

const ProfileLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBar />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProfileLayout;
