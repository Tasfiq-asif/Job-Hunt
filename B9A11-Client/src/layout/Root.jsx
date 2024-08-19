import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";



const Root = () => {
  return (
    <div className=" max-w-7xl mx-auto font-Poppins">
      <Navbar />
  
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
