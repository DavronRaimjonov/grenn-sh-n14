import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useReduxSelctor } from "../../../hooks/useRedux";
import { useRef } from "react";
import { notificationApi } from "../../../generic/notification";
import { useGetCoupon } from "../../../hooks/useQuery/useQueryAction";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";

const CardTotal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const notify = notificationApi();
  const navigate = useNavigate();
  const { shop } = useReduxSelctor((state) => state.shopSlice);
  const total_price = shop.reduce(
    (acc, value) => (acc += Number(value.userPrice)),
    0
  );
  const { mutate } = useGetCoupon();
  const { isLaoding, coupon } = useReduxSelctor((state) => state.couponSlice);

  const getCoupon = () => {
    const coupon_code: string = inputRef.current?.value as string;
    if (coupon_code.trim() === "") {
      return notify("coupon");
    }
    let newDataCoupon = { coupon_code };
    mutate(newDataCoupon);
  };
  const cupon_title_style = "text-[#3D3D3D] text-[15px] font-normal";
  let discount_price: number = (total_price * coupon) / 100;

  return (
    <div>
      <h3 className="pb-5 text-[#3D3D3D] border-b border-[#46A358] font-bold text-[18px]">
        Card Total
      </h3>
      <Form onFinish={getCoupon} className="flex h-[40px] mt-[35px]">
        <input
          disabled={coupon ? true : false}
          ref={inputRef}
          name="coupon"
          placeholder="Enter coupon code here..."
          className="border w-4/5  border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg rounded-r-none outline-none text-[18px] text-black font-normal"
        />
        <button
          disabled={coupon ? true : false}
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none "
        >
          {isLaoding ? (
            <LoadingOutlined />
          ) : coupon ? (
            <CheckOutlined />
          ) : (
            <span>Apply</span>
          )}
        </button>
      </Form>
      <div className="mt-[20px]">
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Subtotal</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">
            ${total_price.toFixed(2)}
          </h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Coupon Discount</h3>
          <h2 className="text-[#3D3D3D] text-[15px]">
            {" "}
            {discount_price.toFixed(2)}$
          </h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Shiping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-[20px]">
          <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
          <div>
            <h1
              className={`text-[#46A358] text-[18px] font-bold ${
                coupon && "line-through"
              }`}
            >
              ${total_price.toFixed(2)}
            </h1>
            {Boolean(coupon) && (
              <h1
                className={`text-[#46A358] text-[18px] font-bold
            `}
              >
                ${(total_price - discount_price).toFixed(2)}
              </h1>
            )}
          </div>
        </div>
        <button
          onClick={() =>
            shop.length ? navigate("/product-checkout") : notify("shop_not")
          }
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-[30px]"
        >
          Proceed To Checkout
        </button>
        <Link to={"/"} className="flex justify-center">
          <button className="mt-[14px] text-[#46A358] cursor-pointer">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardTotal;
