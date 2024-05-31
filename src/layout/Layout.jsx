import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollUpdate from "../components/ScrollUpdate/ScrollUpdate";

const Layout = () => {
  return (
    <div className="cont">
      <ScrollUpdate />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
