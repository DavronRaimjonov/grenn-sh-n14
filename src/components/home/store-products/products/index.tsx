import { useQueryHandler } from "../../../../hooks/useQuery";
import ProductsTitle from "./product-title";
import Card from "./card";
import type { CartType } from "../../../../@types";
import { useLoader } from "../../../../generic/loading";
import { searchParams } from "../../../../generic/searchParams";

const Products = () => {
  const { getParam } = searchParams();
  const categoryPath: string = getParam("category") || "house-plants";
  const type: string = getParam("type") || "house-plants";
  const {
    data,
    isLoading,
    isError,
  }: { isLoading: boolean; isError: boolean; data?: CartType[] } =
    useQueryHandler({
      pathname: `products/${categoryPath}?type=${type}`,
      url: `/flower/category/${categoryPath}`,
      params: {
        type,
      },
    });
  console.log(data);
  const { cart_loading } = useLoader();
  return (
    <div className="w-full">
      <ProductsTitle />
      <div className="grid grid-cols-3 gap-10 mt-10">
        {isLoading || isError
          ? cart_loading()
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Products;
