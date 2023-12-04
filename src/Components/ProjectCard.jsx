import React from "react";
import IconButton from "./IconButton";
import { GitHub, Lock } from "react-feather";
const ProjectCard = ({
  title,
  titleButton,
  imageSrc,
  description,
  Image1,
  Image2,
  Image3,
  Image4,
  isDisabled,
}) => {
  const handleClick = () => {
    // Handle button click logic
    if (!isDisabled) {
      window.open("https://github.com/pamoenqkas", "_blank");
    }
  };

  return (
    // <div class="flex items-center justify-center h-screen">
    // <div class="w-1/2 bg-blue-500 p-4">
    // <div className="max-w-2xl  xl:max-w-6xl flex items-center justify-center mx-6 mt-3 mb-3 bg-slate-500"> 
    <div  data-aos="flip-up" data-aos-delay="400 xl:1100" className="shadow-lg shadow-[#05161A] dark:shadow-lg dark:shadow-[#8EE4AF] max-w-2xl xl:max-w-6xl flex items-center justify-center mx-6 xl:mx-auto xl:h-auto rounded-2xl bg-[#8EE4AF] dark:bg-[#072E33] m-5  ">
      <div className="flex flex-col md:flex-row ">
        <div data-aos="fade-left" data-aos-delay="1200 xl:1300" className="md:w-2/3 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={`${title} Image`}
            className="w-full h-full rounded-t-2xl xl:rounded-bl-2xl xl:rounded-tr-none "
          />
        </div>
        <div className="md:w-1/2 p-2">
          <div data-aos="fade-down-left" data-aos-delay="800 xl:1500" className="text-center dark:text-[#EDF5E1] text-[#05386B] font-bold text-3xl align-middle xl:p-4 xl:m-2 p-2 m-2">
            {title}
          </div>
          <div data-aos="fade-left" data-aos-delay="800 xl:1700"  className=" text-xl dark:text-[#EDF5E1] text-[#05386B] align-middle xl:p-4 xl:m-5 p-2 m-2 text-justify">
            {description}
          </div>
          <div class="flex flex-row items-center justify-center">
            <div data-aos="fade-up-left" data-aos-delay="800 xl:1900"  class="w-full">
              <div className="text-center dark:text-[#EDF5E1] text-[#05386B] font-bold text-xl">What I used</div>
              <div className="flex justify-center text-center items-center p-3 m-2">
                <div className="p-1 m-1 rounded-full bg-white">
                  <img
                    src={Image1}
                    alt={`${title} Image`}
                    className="w-10 h-10 xl:w-16 xl:h-16 p-1 m-1  "
                  />
                </div>
                <div className="p-1 m-1 rounded-full bg-white">
                  <img
                    src={Image2}
                    alt={`${title} Image`}
                    className="w-10 h-10 xl:w-16 xl:h-16 p-1 m-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// The rest of your code remains the same

export default ProjectCard;
