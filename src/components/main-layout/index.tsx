import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
