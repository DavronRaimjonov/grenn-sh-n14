import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/search.svg";
import shop_img from "../../assets/icons/shop.svg";
import { Badge } from "antd";
import { BellOutlined, LoginOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelctor } from "../../hooks/useRedux";
import { setAuthorizationModalVisiblty } from "../../redux/modal-slice";

const Navbar = () => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { shop } = useReduxSelctor((state) => state.shopSlice);
  const nav_link_style = `text-[16px] cursor-pointer`;
  return (
    <header className=" w-[90%] m-auto flex items-center justify-between py-5 border-b mb-5">
      <nav onClick={() => navigate("/")} className="cursor-pointer">
        <img src={logo} alt="" />
      </nav>
      <nav className="flex items-center gap-8">
        <h3
          onClick={() => navigate("/")}
          className={`${nav_link_style} ${
            pathname === "/" && "text-[#46a358]"
          }`}
        >
          Home
        </h3>
        <h3
          onClick={() => navigate("/blog")}
          className={`${nav_link_style} ${
            pathname === "/blog" && "text-[#46a358]"
          }`}
        >
          Blog
        </h3>
      </nav>
      <nav className="flex items-center gap-8">
        <img className="cursor-pointer" src={search} alt="" />
        <BellOutlined className="text-[24px] cursor-pointer" />
        <Badge className="cursor-pointer" count={shop.length}>
          <button onClick={() => navigate("/products-shop")}>
            <img src={shop_img} alt="" />
          </button>
        </Badge>

        <button
          onClick={() =>
            dispatch(
              setAuthorizationModalVisiblty({ open: true, isLoading: false })
            )
          }
          className="w-[100px] h-[35px] bg-[#46a358] text-white rounded-md"
        >
          <p>
            <LoginOutlined /> Login
          </p>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
