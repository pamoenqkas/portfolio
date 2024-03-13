import React from "react";
import IconButton from "./IconButton";
import { GitHub, Lock } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProjectCard = ({
  title,
  titleButton,
  imageSrc1,
  imageSrc2,
  imageSrc3,
  imageSrc4,
  imageSrc5,
  description,
  Image1,
  Image2,
  hoverText1,
  hoverText2,
  isDisabled,
}) => {
  return (
    // <div class="flex items-center justify-center h-screen">
    // <div class="w-1/2 bg-blue-500 p-4">
    // <div className="max-w-2xl  xl:max-w-6xl flex items-center justify-center mx-6 mt-3 mb-3 bg-slate-500">
    <div
      // data-aos="flip-up"
      // data-aos-delay="400 xl:1100"
      className="shadow-lg shadow-[#05161A] dark:shadow-lg dark:shadow-[#05386B] max-w-2xl xl:max-w-6xl 
        flex items-center justify-center dark:bg-[#072E33] mb-5  "
    >
      <div className="flex items-center justify-center flex-row md:flex-col w-screen ">
        <div
          data-aos="fade-left"
          data-aos-delay="1200 xl:1300"
          className="md:w-2/3 w-full flex items-center justify-center "
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            grabCursor={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <img
                src={imageSrc1}
                alt={`${title} Image`}
                className=" w-full h-full "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imageSrc2} alt={`${title} Image`} className="  " />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img
                src={imageSrc3}
                alt={`${title} Image`}
                className="rounded-t-2xl lg:rounded-l-2xl  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imageSrc4}
                alt={`${title} Image`}
                className="rounded-t-2xl lg:rounded-l-2xl  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imageSrc5}
                alt={`${title} Image`}
                className="rounded-t-2xl lg:rounded-l-2xl  "
              />
            </SwiperSlide> */}
          </Swiper>
        </div>
        <p>alskdjljsd </p>
        {/* <div className="md:w-1/2 p-2">
          <div
            data-aos="fade-down-left"
            data-aos-delay="800 xl:1500"
            className="text-center dark:text-[#EDF5E1] text-[#05386B] font-bold text-3xl align-middle xl:p-4 xl:m-2 p-2 m-2"
          >
            {title}
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="800 xl:1700"
            className=" text-xl dark:text-[#EDF5E1] text-[#05386B] align-middle xl:p-4 xl:m-5 p-2 m-2 text-justify"
          >
            {description}
          </div>
          <div class="flex flex-row items-center justify-center">
            <div
              data-aos="fade-up-left"
              data-aos-delay="800 xl:1900"
              class="w-full"
            >
              <div className="text-center dark:text-[#EDF5E1] text-[#05386B] font-bold text-xl">
                What I used
              </div>
              <div className="flex justify-center text-center items-center p-3 m-2">
                <div className="group p-1 m-1 rounded-full bg-white relative hover:transform hover:scale-110 transition-transform duration-300">
                  <img
                    src={Image1}
                    alt={`${title} Image`}
                    className="w-10 h-10 xl:w-16 xl:h-16 p-1 m-1"
                  />
                  <span className="absolute font-extrabold text-[#05386B] text-base inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    {hoverText1}
                  </span>
                </div>
                <div className="group p-1 m-1 rounded-full bg-white relative hover:transform hover:scale-110 transition-transform duration-300">
                  <img
                    src={Image2}
                    alt={`${title} Image`}
                    className="w-10 h-10 xl:w-16 xl:h-16 p-1 m-1"
                  />
                  <span className="absolute font-extrabold text-[#05386B] text-xs lg:text-sm inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    {hoverText2}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

// The rest of your code remains the same

export default ProjectCard;
