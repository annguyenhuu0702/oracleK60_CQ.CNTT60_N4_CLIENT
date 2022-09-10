import React from "react";
import "./index.scss";
import CartDetail from "./CartDetail/CartDetail";
import { useTitle } from "../../hooks/useTitle";

const CartPage = () => {
  useTitle("Cart");
  return (
    <main className="cart-page">
      cart page nè
      <CartDetail />
    </main>
  );
};

export default CartPage;
