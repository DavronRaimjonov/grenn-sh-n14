import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../components/main-layout";
import Shop from "../pages/shop";
import ProductsShop from "../pages/products-shop";
import ProductCheckout from "../pages/product-checkout";
import Blog from "../pages/blog";
import Rendering from "../components/blog/rendering";

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
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id/:user_id",
        element: <Rendering />,
      },
    ],
  },
]);
