import Cards from "./Cards/Cards";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from "../../assets/banner.jpeg"
import banner2 from "../../assets/banner-2.jpeg"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
              <h1 className="text-3xl font-semibold lg:text-4xl">
                Find Your Dream Job Today
              </h1>
              <p className="mt-6 ">
                Browse our job listings and start your career journey now.
              </p>
              <Link to={"/alljobs"}>
                <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center rounded-xl capitalize bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff]lg:mx-0 lg:w-auto focus:outline-none">
                  See All Jobs
                </button>
              </Link>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src={banner}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
              <h1 className="text-3xl font-semibold lg:text-4xl">
                Post your jobs
              </h1>
              <p className="mt-6 ">
                Start reaching
                potential candidates by posting job openings. 
              </p>
              { user && user.email ?
              (<Link to={"/addjob"}>
                <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center rounded-xl capitalize bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff]lg:mx-0 lg:w-auto focus:outline-none">
                  Add jobs
                </button>
              </Link>):(
                <Link to={"/register"}>
                <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center rounded-xl capitalize bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff]lg:mx-0 lg:w-auto focus:outline-none">
                  Register to add jobs
                </button>
              </Link>
              )}
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src={banner2}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Cards />
      <ToastContainer />
    </div>
  );
};

export default Home;
