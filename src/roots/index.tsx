import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../components/main-layout";
import Shop from "../pages/shop";
import ProductsShop from "../pages/products-shop";
import ProductCheckout from "../pages/product-checkout";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:category/:id",
        element: <Shop />,
      },
      {
        path: "/products-shop",
        element: <ProductsShop />,
      },
      {
        path: "/product-checkout",
        element: <ProductCheckout />,
      },
    ],
  },
]);
