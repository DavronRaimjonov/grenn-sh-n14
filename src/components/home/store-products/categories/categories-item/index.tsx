import type { FC } from "react";
import { CategoryType } from "../../../../../@types";
import { searchParams } from "../../../../../generic/searchParams";

const CategoriesItem: FC<CategoryType> = (props) => {
  //    text-[#46A358] font-bold
  const { setParam, getParam } = searchParams();
  const typeParam: string = getParam("type") || "all-plants";
  const setCatogry = () => {
    setParam({ category: props.route_path, type: typeParam });
  };

  return (
    <div
      onClick={setCatogry}
      className={`flex items-center justify-between pt-2 cursor-pointer ${
        getParam("category") === props.route_path &&
        "text-[#46A358]  font-semibold"
      }  hover:text-[#46A358] transition-all`}
    >
      <h2>{props.title}</h2>
      <h3>({Math.abs(props.count)})</h3>
    </div>
  );
};

export default CategoriesItem;
