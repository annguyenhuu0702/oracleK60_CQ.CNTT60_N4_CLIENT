import { lazy } from "react";
import { DefaultLayout, ProfileLayout } from "./layouts";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const AccountOrderPage = lazy(() => import("./pages/AccountOrderPage"));
const WishListPage = lazy(() => import("./pages/WishListPage"));

export const publicRoutes = [
  {
    path: "/",
    element: HomePage,
    layout: DefaultLayout,
  },
  {
    path: "/login",
    element: LoginPage,
    layout: DefaultLayout,
  },
  {
    path: "/register",
    element: RegisterPage,
    layout: DefaultLayout,
  },
  {
    path: "/cart",
    element: CartPage,
    layout: DefaultLayout,
  },
  {
    path: "/product/:slug",
    element: ProductDetailPage,
    layout: DefaultLayout,
  },
  {
    path: "/:slug",
    element: ProductsPage,
    layout: DefaultLayout,
  },
  {
    path: "/payment",
    element: PaymentPage,
    layout: DefaultLayout,
  },
  {
    path: "/profile",
    element: ProfilePage,
    layout: ProfileLayout,
  },
  {
    path: "/profile/order",
    element: AccountOrderPage,
    layout: ProfileLayout,
  },
  {
    path: "/profile/wish-list",
    element: WishListPage,
    layout: ProfileLayout,
  },
];
