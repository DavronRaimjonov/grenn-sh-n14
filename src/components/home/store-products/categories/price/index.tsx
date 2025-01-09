import { Slider } from "antd";
import { useState } from "react";

const PriceParam = () => {
  const [price, setPrice] = useState<number[]>([0, 1000]);

  return (
    <div className="mt-10">
      <Slider
        range
        max={1000}
        min={0}
        value={price}
        onChange={(e) => setPrice(e)}
      />
      <div className="text-[#3D3D3D] text-[16px] font-[500] flex items-center gap-2">
        Price
        <span className="text-[#46A358] text-[15px] font-bold">
          {price[0]}$ - ${price[1]}$
        </span>
      </div>
      <button className="w-[90px] h-[40px] bg-[#46A358] text-white rounded-md my-3 max-lg:hidden">
        Filter
      </button>
    </div>
  );
};

export default PriceParam;
