import { CartType } from "../../../@types";
import { useReduxSelctor } from "../../../hooks/useRedux";
import Card from "./card";

const Shopping = () => {
  const { shop } = useReduxSelctor((state) => state.shopSlice);
  return (
    <div>
      <div className="flex item-center justify-between text-start border-b border-[#46A358] pb-3">
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[40%]">
          Products
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Price
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Quantity
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Total
        </h2>
        <h3>Total</h3>
      </div>
      {shop.map((value: CartType) => (
        <Card key={value._id} {...value} />
      ))}
    </div>
  );
};

export default Shopping;
