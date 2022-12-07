import React from "react";
import { useTitle } from "../../hooks/useTitle";
import "./index.scss";

const WishListPage = () => {
  useTitle("Wish list");
  return <main className="wish-list"></main>;
};

export default WishListPage;
