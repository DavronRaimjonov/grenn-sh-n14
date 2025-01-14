import Navbar from "../navbar";
import Hero from "./hero";
import StoreProducts from "./store-products";

const HomeComponent = () => {
  return (
    <div className="w-[90%] m-auto">
      <Hero />
      <StoreProducts />
    </div>
  );
};

export default HomeComponent;
