import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="font-poppins">
        <Outlet />
      </div>
    </>
  );
};
export default Root;
