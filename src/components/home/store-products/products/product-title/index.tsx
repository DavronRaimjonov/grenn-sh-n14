import { Select } from "antd";
import { title_category } from "../../../../../utils";
import { searchParams } from "../../../../../generic/searchParams";

const ProductsTitle = () => {
  const { setParam, getParam } = searchParams();
  const typeParam: string = getParam("type") || "all-plants";
  const categoryPath: string = getParam("category") || "house-plants";
  const setTitle = (type: string) => {
    setParam({
      category: categoryPath,
      type,
    });
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {title_category.map((value) => (
          <h3
            onClick={() => setTitle(value.label)}
            className={`cursor-pointer ${
              value.label === typeParam &&
              "text-[#45A358] font-semibold underline"
            }`}
          >
            {value.title}
          </h3>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <p>Sort By:</p>
        <Select
          defaultValue="Default Sorting"
          options={[
            { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Chepaest" },
            { value: "most-expansive", label: "Most Expensive" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductsTitle;
