import { Skeleton } from "antd";

const useLoader = () => {
  const category_loader = () => {
    return Array.from({ length: 8 }).map((_, idx) => (
      <div className="mb-2" key={idx}>
        <Skeleton.Input className="!w-full" active />
      </div>
    ));
  };
  const cart_loading = () => {
    return Array.from({ length: 6 }).map((_, idx) => {
      return (
        <div key={idx}>
          <div className="w-full">
            <Skeleton.Image className="!w-full !h-[250px]" active />
          </div>
          <Skeleton.Input active />
          <Skeleton.Input active />
        </div>
      );
    });
  };
  return { category_loader, cart_loading };
};

export { useLoader };
