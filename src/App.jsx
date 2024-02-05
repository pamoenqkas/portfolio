import { useState } from "react";
import reactLogo from "/public/assets/react.svg";
import viteLogo from "/vite.svg";

import EmailForm from "./Components/EmailForm";
import ProjectCard from "./Components/ProjectCard";

import React from "react";
import { GitHub, Linkedin, Grid, Instagram, Mail, File } from "react-feather";
import { CiCircleCheck } from "react-icons/ci";

import ThemeSwitcher from "./Components/ThemeSwitcher";
import IconButton from "./Components/IconButton";
import { Route, Routes } from "react-router-dom";
import Slides from "./Components/Slides";
import Modal from "./Components/Modal";

import { TypeAnimation } from "react-type-animation";
import { Divider } from "@nextui-org/react";

const Main = () => {
  return (
    <div className="font-grotesque">
      <div className="bg-white scroll-smooth focus:scroll-auto dark:bg-black ">
        <section>
          <div className="w-full flex items-center justify-center">
            <div className="fixed z-20 w-full px-4 xl:px-5 py-3 md:px-1 md:w-11/12 lg:w-2/5 xl:w-full rounded-b-3xl xl:rounded-none top-0 max-w-full xl:p-1">
              <div className="flex justify-between ">
                {/* untuk dark */}
                <div className="my-4 xl:m-7">
                  {/* <div className="hidden dark:block dark:text-white">
                    <p className="text-8xl dark:text-2xl">Tanto</p>
                  </div> */}
                  <div className="relative">
                    <div className="absolute left-2 top-5 ">
                      <p className="text-xl dark:text-white absolute -mx-2 md:text-2xl xl:text-4xl font-bold">
                        T
                      </p>
                      <p className="text-xl dark:text-white absolute left-2 -rotate-45 -mx-2 md:text-2xl xl:text-4xl font-bold">
                        A
                      </p>
                      <p className="text-xl dark:text-white absolute left-6 rotate-45 -mx-2 md:text-2xl xl:text-4xl font-bold">
                        N
                      </p>
                      <p className="text-xl dark:text-white absolute left-9 rotate-90 -mx-2 md:text-2xl xl:text-4xl font-bold">
                        T
                      </p>
                      <p className="text-xl dark:text-white absolute left-11 -rotate-180 -mx-2 md:text-2xl xl:text-4xl font-bold">
                        O
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-4 xl:m-7">
                  <div className=" h-12 w-12 -mx-2 flex items-center justify-start rounded-full animate-pulse ">
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* nav */}
        {/* bg-gradient-to-b from-[#EDF5E1] to-[#8EE4AF] */}
        <section>
          {/* <div className="mt-16 dark:bg-[#072E33] p-6 max-w-full"> */}
          <div class="xl:mt-24 mt-20 flex flex-col md:items-center md:justify-center bg-white dark:bg-black">
            <div className="container dark:from-black dark:to-slate-600 text-gray-200">
              <div className="flex flex-col items-center justify-center ">
                <div className="border-2 border-black bg-black dark:bg-white w-8/12 h-auto my-6 ">
                  <div className="flex items-start justify-center ">
                    <div className="w-full h-full xl:h-96 flex justify-center xl:justify-start items-center rounded-2xl border bg-white dark:bg-black dark:border-white border-black">
                      <div className="h-auto w-auto xl:w-96">
                        <p className="text-xl text-center xl:text-2xl md:text-7xl text-black dark:text-white xl:ml-4">
                          G'day, I'm
                        </p>
                        <p className="text-4xl text-center md:text-7xl text-black dark:text-white font-bold xl:ml-7">
                          Wahyu Sutanto P.
                        </p>
                        <div className="flex justify-center text-center items-center mt-5 xl:ml-2 xl:mt-4">
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
                            href="https://drive.google.com/file/d/1jomqspO0c1-_x0Af2ijGrJvp7YcaANgC/view"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconButton text="CV">
                              <Grid size={20} />
                            </IconButton>
                          </a>
                          <a
                            href="https://drive.google.com/file/d/1CCYFrNFdY7lUSR3rWjW0mnBAjXSjfN0y/view"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconButton text="Portfolio">
                              <File size={20} />
                            </IconButton>
                          </a>
                        </div>
                        <div className="relative flex justify-center xl:justify-end items-center xl:hidden ">
                          <div className="flex-col">
                            <div className="flex">
                              <div className="relative">
                                <div className="absolute z-10 xl:top-28 top-32 left-1 xl:-left-12">
                                  {/* TypeAnimation in the background */}
                                  <TypeAnimation
                                    sequence={[
                                      "Front-end ",
                                      500,
                                      "Back-end ",
                                      500,
                                    ]}
                                    className="text-black dark:text-white text-2xl text-center font-bold"
                                    repeat={Infinity}
                                  />
                                </div>

                                <div className="z-20">
                                  {/* Image in the middle */}
                                  <img
                                    src="./assets/wsp.png"
                                    alt="Your Image Alt Text"
                                    className="w-100 h-80 overflow-hidden"
                                  />
                                </div>

                                <div className="absolute z-30 bottom-10 -right-2 xl:bottom-12 xl:-right-28">
                                  {/* Developer text in the foreground */}
                                  <p className="text-black dark:text-white text-2xl xl:text-5xl font-bold">
                                    Developer
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-2/7 h-96 hidden rounded-2xl border xl:flex justify-center items-center bg-white dark:bg-black border-black dark:border-white">
                      <div className="flex-col">
                        <div className="relative z-0">
                          <img
                            src="./assets/wsp.png"
                            alt="Your Image Alt Text"
                            className="w-100 h-80 overflow-hidden z-0"
                          />
                          <div className="w-full flex justify-center items-center">
                            <div className="bg-white dark:bg-black border-black dark:border-white text-center border rounded-2xl w-full absolute p-4">
                              {/* <p className="text-black dark:text-white text-xl text-center font-semibold">
                                Front e
                              </p> */}
                              <TypeAnimation
                                sequence={[
                                  "Front-end Developer",
                                  500,
                                  "Back-end Developer",
                                  500,
                                ]}
                                className="text-black dark:text-white text-lg text-center font-semibold"
                                repeat={Infinity}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-full h-auto p-1 rounded-t-2xl border bg-white border-black "></div> */}
                  <div className="flex">
                    <div className="w-1/3 h-80 rounded-l-2xl border bg-white dark:bg-black border-black dark:border-white flex items-center justify-center">
                      <p className="text-center font-bold text-black dark:text-white md:text-4xl text-xl">
                        About me
                      </p>
                    </div>
                    <div className="w-2/3 h-80 rounded-r-2xl border bg-white dark:bg-black border-black dark:border-white flex items-center justify-center">
                      <p className="text-center px-5 font-medium text-black dark:text-white md:text-xl text-xs xl:text-2xl">
                        Saya seorang Mahasiswa Informatika Universitas Atma Jaya
                        Yogyakarta dengan minat belajar dan ambisi yang tinggi.
                        Saat ini sedang mempelajari dan mendalami Pengembangan
                        Web. Berpengalaman dalam mengelola anggota organisasi
                        dan memastikan seluruh anggota menjalankan tugasnya
                        dengan menjadi wakil ketua Himpunan Mahasiswa
                        Informatika UAJY.
                      </p>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="w-2/3 xl:h-80 h-96 rounded-l-2xl border bg-white dark:bg-black border-black dark:border-white p-7">
                      <div className="flex xl:flex-row xl:flex flex-col w-full h-full ">
                        <div className="w-full flex-row">
                          <div className="relative">
                            <div class="absolute xl:top-1/2 -top-3 xl:left-1/2 transform xl:-translate-x-1/2 xl:-translate-y-1/2 mt-3">
                              <span className="text-3xl text-black dark:text-white font-semibold ">
                                Front-end
                              </span>
                            </div>
                            <div className="absolute -left-5 xl:left-2 xl:top-9 top-6 w-1/2">
                              <div className="flex flex-col items-start justify-center mt-6 gap-3">
                                <div className="flex items-center justify-center gap-2 ">
                                  <CiCircleCheck className="text-green-400 " />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    HTML
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 ">
                                  <CiCircleCheck className="text-green-400" />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    Tailwind
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 ">
                                  <CiCircleCheck className="text-yellow-400" />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    css
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 ">
                                  <CiCircleCheck className="text-yellow-400" />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    Bootstrap
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-6 xl:right-2 right-2 xl:top-9 w-1/2">
                              <div className="flex flex-col items-start ml-4 justify-center mt-6 gap-3">
                                <div className="flex items-center gap-2 ">
                                  <CiCircleCheck className="text-yellow-400" />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    Vue
                                  </span>
                                </div>
                                <div className="flex items-center  ">
                                  <CiCircleCheck className="text-yellow-400 " />
                                  <span className="text-center font-medium ml-[0.10rem] text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    Javascript
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 ">
                                  <CiCircleCheck className="text-red-400" />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    Jquery
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 ">
                                  <CiCircleCheck className="text-red-400" />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    react
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex-row">
                          <div className="relative">
                            <div class="absolute -bottom-52  xl:-bottom-12 xl:left-1/2 transform xl:-translate-x-1/2 xl:-translate-y-1/2 mt-3">
                              <span className="text-3xl text-black dark:text-white font-semibold ">
                                Back-end
                              </span>
                            </div>
                            <div className="absolute -left-5 xl:left-2 xl:top-9 -bottom-80 w-1/2">
                            {/* <div className="absolute left-0 xl:top-9 -bottom-80 w-1/2"> */}
                              <div className="flex flex-col items-start justify-center mt-6 gap-3">
                                <div className="flex items-center justify-center gap-2 ">
                                  <CiCircleCheck className="text-green-400 " />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    MSSQL
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 ">
                                  <CiCircleCheck className="text-yellow-400" />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    Laravel
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 ">
                                  <CiCircleCheck className="text-yellow-400" />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    mysql
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 ">
                                  <CiCircleCheck className="text-yellow-400" />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    Bootstrap
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/* <div className="absolute top-6 xl:right-2 right-2 xl:top-9 w-1/2"> */}
                            <div className="absolute -bottom-[14.8rem] xl:right-2 right-2 xl:top-9 w-1/2">
                              <div className="flex flex-col items-start ml-4 justify-center mt-6 gap-3">
                                <div className="flex items-center justify-center gap-2 ">
                                  <CiCircleCheck className="text-red-400" />
                                  <span className="text-center font-medium text-black dark:text-white md:text-xl text-xs xl:text-xl uppercase">
                                    Php
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden xl:flex xl:flex-row justify-around items-center ">
                        <div className="flex flex-row items-center xl:gap-2 gap-1">
                          <CiCircleCheck className="text-green-400" />
                          <span className="text-black dark:text-white text-sm xl:text-lg">
                            Advanced
                          </span>
                        </div>
                        <div className="flex flex-row items-center xl:gap-2 gap-1">
                          <CiCircleCheck className="text-yellow-400" />
                          <span className="text-black dark:text-white text-sm xl:text-lg">
                            Intermediate
                          </span>
                        </div>
                        <div className="flex flex-row items-center xl:gap-2 gap-1">
                          <CiCircleCheck className="text-red-400" />
                          <span className="text-black dark:text-white text-sm xl:text-lg">
                            Beginner
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 xl:h-80 h-96 rounded-r-2xl border bg-white dark:bg-black border-black dark:border-white flex items-center justify-center relative">
                      <p className="text-center font-bold text-black dark:text-white md:text-4xl xl:text-4xl text-lg">
                        My Experience
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex">
                    <div className="w-1/3 h-80 rounded-l-2xl border bg-white dark:bg-black border-black dark:border-white flex items-center justify-center relative">
                      <p className="text-center font-bold text-black dark:text-white md:text-4xl text-xl ">
                        My Experience
                      </p>
                    </div>
                    <div className="w-2/3 h-80  rounded-r-2xl border bg-white dark:bg-black border-black dark:border-white flex items-center justify-start"></div>
                  </div> */}
                </div>
                {/* <div className="md:w-2/3 ">
                  <p
                    data-aos="fade-down"
                    className="text-2xl text-black dark:text-white m-1 p-2 pt-1 text-center"
                  >
                    G'day, I'm
                  </p>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="600"
                    className="text-6xl font-bold dark:text-[#EDF5E1] text-black m-2 mt-1 p-2 text-center"
                  >
                    Wahyu Sutanto Pamungkas
                  </p>
                  <div
                    data-aos="fade-left"
                    data-aos-delay="700"
                    className="flex items-center justify-center"
                  >
                    <div className="mt-3 bg-gradient-to-b from-[#EDF5E1] to-[#5CDB95] dark:from-[#05386B] dark:to-[#379683] rounded-full w-1/2  ">
                      <div className="flex justify-center">
                        <img
                          src="./assets/wsp.png"
                          alt="Your Image Alt Text"
                          className="w-100 h-100 rounded-full overflow-hidden"
                        />
                      </div>
                    </div>
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
                    </div>
                  </div>
                </div> */}
                {/* <div className="hidden md:w-1/2 xl:flex flex-row justify-center items-center">
                  <div
                    data-aos="fade-left"
                    data-aos-delay="1600"
                    className="bg-transparent dark:bg-transparent dark:bg-slate-600 flex-grow flex justify-center items-center lg:w-48"
                  >
                    <div className="flex flex-col">
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <div className="flex items-center justify-center m-2">
          <Slides />
        </div>
      </div>
      {/* nav */}

      {/* <section>
        <div className="flex flex-col md:items-center md:justify-center bg-[#EDF5E1] dark:bg-[#05161A]">
          <div className="xl:m-24 pt-3 pb-2 bg-[#EDF5E1] dark:bg-[#05161A]">
            <div
              data-aos="flip-up"
              data-aos-delay=""
              className="shadow-md shadow-[#05161A] dark:shadow-md dark:shadow-[#05386B] max-w-2xl xl:max-w-6xl flex items-center justify-center mx-6 mt-3 mb-3 xl:mx-auto xl:h-auto bg-[#8EE4AF] dark:bg-gradient-to-r dark:bg-[#072E33] "
            >
              <div className="flex items-center justify-center p-2">
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
              imageSrc1="./assets/project/gofit-1.png"
              imageSrc2="./assets/project/gofit-2.png"
              imageSrc3="./assets/project/gofit-1.png"
              imageSrc4="./assets/project/gofit-2.png"
              imageSrc5="./assets/project/gofit-1.png"
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
              imageSrc1="./assets/project/ksi-1.png"
              imageSrc2="./assets/project/ksi-2.png"
              imageSrc3="./assets/project/ksi-1.png"
              imageSrc4="./assets/project/ksi-2.png"
              imageSrc5="./assets/project/ksi-1.png"
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
              imageSrc1="./assets/project/produk-1.png"
              imageSrc2="./assets/project/produk-2.png"
              imageSrc3="./assets/project/produk-1.png"
              imageSrc4="./assets/project/produk-2.png"
              imageSrc5="./assets/project/produk-2.png"
              description="This project focuses on providing products. There are 2 roles, namely admin and user. 
              Admin can perform CRUD actions on a product and users can view product details. This project exists for the purpose of taking tests and adding to the portfolio"
              Image1="./assets/project/Laravel.png"
              Image2="./assets/project/tailwindcss-logo.jpg"
              hoverText1="Laravel"
              hoverText2="Tailwind.css"
              id="2"
            />
            <ProjectCard
              title="CRUD Story Website"
              isDisabled={true}
              titleButton="Private Repository"
              imageSrc1="./assets/project/story-liststory.png"
              imageSrc2="./assets/project/story-detailstory.png"
              imageSrc3="./assets/project/story-addstory.png"
              imageSrc4="./assets/project/story-editstory.png"
              imageSrc5="./assets/project/story-addchapter.png"
              description="This project is a Take Home Challenge with a processing time of approximately 30+ hours. Project development using React JS as Front-end and Express JS as Back-end."
              Image1="./assets/project/expressjs.png"
              Image2="./assets/project/react.png"
              hoverText1="Express"
              hoverText2="React"
              id="3"
            />
          </div>
        </div>
      </section> */}

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
    </div>
  );
};

export default Main;
