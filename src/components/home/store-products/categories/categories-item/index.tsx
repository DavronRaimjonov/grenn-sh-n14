import type { FC } from "react";
import { CategoryType } from "../../../../../@types";

const CategoriesItem: FC<CategoryType> = (props) => {
  //    text-[#46A358] font-bold
  return (
    <div className="flex items-center justify-between pt-2 cursor-pointer">
      <h2>{props.title}</h2>
      <h3>({Math.abs(props.count)})</h3>
    </div>
  );
};

export default CategoriesItem;
