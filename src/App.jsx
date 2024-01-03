import { useState } from "react";
import reactLogo from "/public/assets/react.svg";
import viteLogo from "/vite.svg";

import EmailForm from "./Components/EmailForm";
import ProjectCard from "./Components/ProjectCard";

import React from "react";
import { GitHub, Linkedin, Grid, Instagram, Mail, File} from "react-feather";

import ThemeSwitcher from "./Components/ThemeSwitcher";
import IconButton from "./Components/IconButton";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="scroll-smooth focus:scroll-auto dark:bg-[#05161A] bg-[#EDF5E1]">
        <section>
          <div className="w-full flex items-center justify-center">
            <div className="bg-[#EDF5E1] fixed z-20 w-10/12 md:w-2/3 lg:w-2/5 xl:w-full rounded-b-3xl xl:rounded-none top-0 dark:bg-[#05161A] max-w-full p-3 xl:p-1 border-b-2 border-[#05386B] dark:border-[#0C7075]">
              <div className="flex justify-between items-center space-x-4">
                {/* untuk dark */}
                <div className="ml-3">
                  <div className="hidden dark:block">
                    <img
                      src="./assets/Logo-dark.png"
                      alt="Icon"
                      className="xl:w-24 xl:h-20 w-12 h-12 hidden dark:block"
                    ></img>
                  </div>
                  <div className="dark:hidden">
                    <img
                      src="./assets/Logo.png"
                      alt="Icon"
                      className="dark:hidden xl:w-24 xl:h-20 w-12 h-12 "
                    ></img>
                  </div>
                </div>
                <div className="bg-slate dark:bg-[#05161A] h-12 w-12 flex items-center justify-center rounded-full">
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* nav */}
        {/* bg-gradient-to-b from-[#EDF5E1] to-[#8EE4AF] */}
        <section>
          {/* <div className="mt-16 dark:bg-[#072E33] p-6 max-w-full"> */}
          <div class="xl:mt-24 mt-16 flex flex-col md:items-center md:justify-center bg-[#EDF5E1] dark:bg-[#05161A]">
            <div className="container p-3 dark:from-black dark:to-slate-600 text-gray-200">
              <div className="flex flex-col items-center justify-center ">
                <div className="md:w-2/3 ">
                  <p
                    data-aos="fade-down"
                    className="text-lg text-[#05386B] dark:text-white m-1 p-2 pt-1 text-center"
                  >
                    G'day, I'm
                  </p>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="600"
                    className="text-5xl font-bold dark:text-[#EDF5E1] text-[#05386B] m-2 mt-1 p-2 text-center"
                  >
                    Wahyu Sutanto Pamungkas
                  </p>
                  <div
                    data-aos="fade-left"
                    data-aos-delay="700"
                    className="flex items-center justify-center"
                  >
                    {/* <div className="px-2 py-2 mx-2 my-4 bg-gradient-to-t from-[#05386B] to-[#379683] dark:bg-gradient-to-br dark:from-[#379683] dark:to-[#5CDB95] rounded-full xl:w-auto w-auto h-auto justify-center">
                      <div className="rounded-full w-50 h-50 lg:h-30 lg:w-30 overflow-hidden bg-gradient-to-b from-[#EDF5E1] to-[#379683] dark:from-[#072E33] dark:to-[#0C7075]  "> */}
                    <div className="mt-3 bg-gradient-to-b from-[#EDF5E1] to-[#5CDB95] dark:from-[#05386B] dark:to-[#379683] rounded-full w-1/2  ">
                      <div className="flex justify-center  ">
                        <img
                          src="./assets/wsp.png"
                          alt="Your Image Alt Text"
                          className="w-100 h-100 rounded-full overflow-hidden"
                        />
                      </div>
                    </div>
                    {/* </div>
                    </div> */}
                  </div>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="800"
                    className="text-lg font-semibold text-[#05386B]  dark:text-[#EDF5E1] m-2 p-2 mt-5 text-center"
                  >
                    Web Developer
                  </p>
                  <div className="items-center">
                    <p
                      data-aos="flip-up"
                      data-aos-delay="1000"
                      className="font-mono text-lg m-2 p-2 text-center text-[#05386B] dark:text-[#EDF5E1] xl:text-center"
                    >
                      I'm an Informatics Student at Atma Jaya Yogyakarta
                      University with a high interest learner and ambitious.
                      Currently learning and exploring Web Development.
                      Experienced in managing organizational members and
                      ensuring all members carry out tasks according to the
                      division that has been given in order to achieve the
                      organization's vision and mission by became vice-chairman
                      for Himpunan Mahasiswa Informatika UAJY.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center">
                      <div
                        data-aos="fade-up-right"
                        data-aos-delay="200 xl:delay-1200"
                        className="md:w-1/2"
                      >
                        <h1 className="text-lg font-mono dark:text-[#EDF5E1] text-[#05386B] font-medium text-center mt-4 xl:text-xl">
                          My Social Media
                        </h1>
                        {/* Konten Sebelah Kiri (align left) */}
                        <div className="flex justify-center text-center items-center m-2 ">
                          <a
                            href="https://github.com/pamoenqkas"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconButton text="Github">
                              <GitHub size={20} />
                            </IconButton>
                          </a>
                          <a
                            href="https://www.instagram.com/pamoenqkas_/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconButton
                              text="Instagram"
                              color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500 dark:bg-gradient-to-tr dark:from-[#8EE4AF] dark:to-[#05386B]"
                            >
                              <Instagram size={20} />
                            </IconButton>
                          </a>
                        </div>
                      </div>
                      <div
                        data-aos="fade-up-left"
                        data-aos-delay="200 xl:delay-1200"
                        className="md:w-3/4"
                      >
                        <h1 className="text-lg font-mono dark:text-[#EDF5E1] text-[#05386B] font-medium text-center mt-4 xl:text-xl">
                          My Portfolio
                        </h1>
                        <div className="flex justify-center text-center items-center m-2 ">
                          <a
                            href="https://drive.google.com/file/d/1jomqspO0c1-_x0Af2ijGrJvp7YcaANgC/view"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconButton
                              text="CV"
                              color="  bg-[#05386B] text-white dark:text-gray-100 "
                            >
                              <Grid size={20} />
                            </IconButton>
                          </a>
                          <a
                            href="https://drive.google.com/file/d/1CCYFrNFdY7lUSR3rWjW0mnBAjXSjfN0y/view"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconButton
                              text="Portfolio"
                              color="  bg-[#8EE4AF] text-black dark:text-black "
                            >
                              <File size={20} />
                            </IconButton>
                          </a>
                        </div>
                      </div>
                      {/* container */}
                    </div>
                  </div>
                </div>
                <div className="hidden md:w-1/2 xl:flex flex-row justify-center items-center">
                  {/* Kiri Ball*/}
                  {/* <div className="hidden md:flex justify-center items-center px-4 py-4 mx-4 my-4">
                      <div className="my-8 bg-gradient-to-bl rounded-full dark:from-[#379683] dark:to-[#5CDB95] from-[#05386B] to-[#379683] w-24 h-24 justify-center items-center animate-bounce">
                      </div>
                    </div> */}
                  {/* Tengah */}
                  <div
                    data-aos="fade-left"
                    data-aos-delay="1600"
                    className="bg-transparent dark:bg-transparent dark:bg-slate-600 flex-grow flex justify-center items-center lg:w-48"
                  >
                    <div className="flex flex-col">
                      {/* <div className="px-2 py-2 mx-2 my-4 bg-gradient-to-br from-[#05386B] to-[#379683] dark:bg-gradient-to-br dark:from-[#379683] dark:to-[#5CDB95] rounded-full md:w-auto h-auto justify-center">
                        <div className="rounded-full w-50 h-50 overflow-hidden bg-gradient-to-l from-[#EDF5E1] to-[#379683] dark:from-[#072E33] dark:to-[#0C7075]  ">
                          <div className="flex justify-center">
                            <img
                              src="./assets/wsp.png"
                              alt="Your Image Alt Text"
                              className="w-100 h-100 rounded-full overflow-hidden"
                            />
                          </div>
                        </div>
                      </div> */}
                      {/* button-button */}
                    </div>
                  </div>
                  {/* Kanan Ball */}
                  {/* <div className="hidden md:flex justify-center items-center px-4 py-4 mx-4 my-4">
                      <div className="my-8 bg-gradient-to-bl rounded-full from-[#05386B] to-[#379683] dark:from-[#379683] dark:to-[#5CDB95] w-24 h-24 justify-center items-center animate-bounce-reverse  ">
                      </div>
                    </div> */}
                </div>
              </div>
            </div>
            {/* asdas */}
            {/* Konten Sebelah Kanan (align right) */}
          </div>
        </section>
      </div>
      {/* nav */}
      <section>
        <div className="flex flex-col md:items-center md:justify-center bg-[#EDF5E1] dark:bg-[#05161A]">
          <div className="xl:m-24 pt-3 pb-2 bg-[#EDF5E1] dark:bg-[#05161A]">
            <div
              data-aos="flip-up"
              data-aos-delay=""
              className="shadow-md shadow-[#05161A] dark:shadow-md dark:shadow-[#05386B] max-w-2xl xl:max-w-6xl flex items-center justify-center mx-6 mt-3 mb-3 xl:mx-auto xl:h-auto bg-[#8EE4AF] dark:bg-gradient-to-r dark:bg-[#072E33] "
            >
              <div className="flex items-center justify-center p-2">
                {/* Left Element */}
                <span
                  data-aos="fade-right"
                  data-aos-delay="200"
                  className="w-6 h-6 dark:bg-[#8EE4AF] bg-[#072E33] rounded-full"
                ></span>
              </div>
              <h1
                data-aos="flip-up"
                data-aos-delay="1000"
                className="text-lg font-mono dark:text-[#EDF5E1] text-[#05386B] font-medium text-center p-2 xl:text-2xl"
              >
                Recent Works
              </h1>
              <div className="flex items-center justify-center pl-2">
                {/* Right Element */}
                <span
                  data-aos="fade-left"
                  data-aos-delay="600"
                  className="w-6 h-6 dark:bg-[#8EE4AF] bg-[#072E33] rounded-full"
                ></span>
              </div>
            </div>
            <ProjectCard
              title="Go-Fit"
              isDisabled={false}
              imageSrc="./assets/project/GO-fit.png"
              titleButton="Gofit"
              description="GoFit is a fitness center support application that can be accessed easily via the website.This website was developed
        using Laravel 9 for the back-end, Vue 3 for the front-end, and incorporates the Bootstrap library for a responsive design.  "
              Image1="./assets/project/Laravel.png"
              Image2="./assets/project/Vue.png"
              hoverText1="Laravel"
              hoverText2="Vue"
              id="1"
            />
            <ProjectCard
              title="SIATMA for University Workforce"
              isDisabled={true}
              titleButton="Private Repository"
              imageSrc="./assets/project/Siatma.png"
              description="SIATMA (Sistem Informasi Atma Jaya Yogyakarta) used by university workforce such as admins 
                      of Information Systems Offices, Study Programs, Lecture Administration and Examination Administration using ASP.NET 6 CORE MVCs."
              Image1="./assets/project/csharp.png"
              Image2="./assets/project/mssql.png"
              hoverText1="C#"
              hoverText2="MSSQL"
              id="2"
            />
            <ProjectCard
              title="Product Provider Website"
              isDisabled={true}
              titleButton="Private Repository"
              imageSrc="./assets/project/product.png"
              description="This project focuses on providing products. There are 2 roles, namely admin and user. 
              Admin can perform CRUD actions on a product and users can view product details. This project exists for the purpose of taking tests and adding to the portfolio"
              Image1="./assets/project/Laravel.png"
              Image2="./assets/project/tailwindcss-logo.jpg"
              hoverText1="Laravel"
              hoverText2="Tailwind.css"
              id="2"
            />
          </div>
        </div>
      </section>

      <section id="contact-me">{/* <EmailForm /> */}</section>
      {/* <section id="footer">
        <div className="mt-20 bg-white border border-stone-800 w-full">
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <div>asd</div>
              <div>asd</div>
              <div>asd</div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Main;
