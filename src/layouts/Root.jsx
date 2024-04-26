import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="font-poppins">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Root;
