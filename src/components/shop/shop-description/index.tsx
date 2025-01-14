import type { FC } from "react";
import type { DataType } from "../../../@types";
import { Rate } from "antd";
import { useQueryHandler } from "../../../hooks/useQuery";
import AvatarItem from "../avatar";

const ShopDescription: FC<DataType> = ({ data, isLoading, isError }) => {
  return (
    <section>
      <div className="border-b-2 pb-5  border-[#A6D1AC] flex items-end justify-between">
        {isLoading || isError ? (
          "loading"
        ) : (
          <div className="flex items-center gap-5">
            <AvatarItem created_by={data?.created_by as string} />
            <div>
              <h3 className="text-[#3D3D3D] text-[28px] font-bold">
                {data?.title}
              </h3>
              <p className="font-bold text-[#46A358] text-[22px]">
                ${data?.price}
              </p>
            </div>
          </div>
        )}
        <div>
          <Rate />
          <p>{data?.comments.length} Customer Review</p>
        </div>
      </div>
      <div>
        <h3>Short Description:</h3>
        <p
          dangerouslySetInnerHTML={{ __html: data?.description as string }}
        ></p>
      </div>
    </section>
  );
};

export default ShopDescription;
