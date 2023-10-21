import React from 'react'
import { GitHub, Linkedin, Grid, Instagram, Mail } from 'react-feather';
// import { FaEnvelope, FaFolderOpen } from 'react-icons/fa';


import ThemeSwitcher from './ThemeSwitcher';
import IconButton from './IconButton';

const Main = () => {
  return (
    <section>
      <div className='bg-slate-50 dark:bg-slate-600'>
        {/* <div className='bg-slate-50 dark:bg-slate-600 max-w-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4'> */}
        <div className='bg-slate-50 dark:bg-slate-600 max-w-full p-5 m-2 mb-1'>
          <div className='flex justify-between items-center space-x-4'>
            <img src='./assets/icon-navbar.svg' alt='Icon' className='w-10 h-10'></img>
            <div className='space-x-4'>
              {/* Your other content here */}
            </div>
            <div className='bg-slate dark:bg-slate-600 h-12 w-12 flex items-center justify-center rounded-full'>
              <ThemeSwitcher/>
            </div>
          </div>
        </div>
        {/* nav */}
        <div className="bg-slate-50 dark:bg-slate-600 flex flex-col-reverse md:flex-row">
          <div className="md:w-1/2 rounded-lg bg-slate-50 dark:bg-slate-600 p-4 px-4 py-5 lg:p-6 m-6 dark:from-black dark:to-slate-600 text-gray-200">
            <p className='text-lg text-slate-800 dark:text-white m-2 mt-1 p-2 text-center'>
            G'day, I'm
            </p>
            <p className='text-5xl font-bold text-slate-800 dark:text-white m-2 p-2 text-center'>
              Wahyu Sutanto Pamungkas
            </p>
              <p className='text-lg font-mono text-slate-600 dark:text-gray-300 m-2 p-2 text-center'>
              Web Developer
              </p>
              <p className='font-mono text-lg m-2 p-2 text-justify text-slate-400 dark:text-gray-400 xl:text-justify'>
              I'm an Informatics at Atma Jaya Yogyakarta University with a high interest learner and ambitious. Currently learning and exploring Web Development.
              Experienced in managing organizational members and ensuring all members carry out tasks according to the division that has been given in order to 
              achieve the organization's vision and mission by became vice-chairman for Himpunan Mahasiswa Informatika UAJY.
            </p>
            <div>
              <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center">
                <div className='md:w-1/2'>
                <h1 className="text-lg font-mono text-slate-600 dark:text-gray-300 font-medium text-center mt-4 xl:text-xl">My Social Media</h1>
                    {/* Konten Sebelah Kiri (align left) */}
                    <div className="text-center items-center m-2 ">
                      <IconButton text="Github">
                        <GitHub size={20} />
                      </IconButton>
                      <IconButton text="Linkedin" color="bg-blue-500">
                        <Linkedin size={20} />
                      </IconButton>
                      <IconButton
                        text="/pamoenqkas_"
                        color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
                      >
                        <Instagram size={20} />
                      </IconButton>
                    </div>
                  </div>
                <div className='md:w-1/2'>
                  <h1 className="text-lg font-mono text-slate-600 dark:text-gray-300 font-medium text-center mt-4 xl:text-xl">Contact or View Portfolio</h1>
                  <div className="text-center items-center m-2">
                    {/* <button className='p-5 m-2 text-2xl xl:p-3 bg-pink-500 dark:bg-gray-500 text-white dark:text-gray-100 rounded-xl'>
                    <FaEnvelope className="m-2" /> P
                    </button>
                    <button className='p-5 m-2 text-2xl xl:p-3 bg-pink-500 dark:bg-gray-500 text-white dark:text-gray-100 rounded-xl'>
                    <FaFolderOpen className="mr-2" /> CV                 
                    </button> */}
                    <IconButton text="CV" color="bg-pink-500 dark:bg-gray-700 text-white dark:text-gray-100 ">
                      <Mail size={20} />
                    </IconButton>
                    <IconButton text="Contact" color="bg-pink-500 dark:bg-gray-700 text-white dark:text-gray-100 ">
                      <Grid size={20} />
                    </IconButton>
                  </div>
                </div>
              </div>
              {/* Konten Sebelah Kanan (align right) */}
          </div> 
        </div>


          <div className="flex md:w-1/2">
            {/* Kiri */}
            <div className="hidden md:flex justify-center items-center px-4 py-4 mx-4 my-4">
              <div className='my-8 bg-gradient-to-bl rounded-full dark:from-slate-600 dark:to-black from-blue-200 to-pink-500 w-24 h-24 justify-center items-center animate-bounce'>
                {/* Konten elemen di sini */}
              </div>
            </div>
              {/* Tengah */}
              <div className='bg-slate-50 dark:bg-slate-600 flex-grow flex justify-center items-center'>
              <div className="px-2 py-2 mx-2 my-4 bg-gradient-to-br from-white to-pink-200 rounded-full md:w-auto h-auto justify-center dark:bg-gradient-to-br dark:from-black dark:to-slate-600">
              <div className="rounded-full w-50 h-50 overflow-hidden bg-gradient-to-bl from-blue-200 to-pink-500 dark:from-slate-600 dark:to-black">
                  <div className="flex justify-center relative">
                    <img
                      src="./assets/wsp.png"
                      alt="Your Image Alt Text"
                      className="w-100 h-100 rounded-full overflow-hidden"
                    />
                  </div>
                </div>
                </div>
              </div>
              {/* Kanan */}
              <div className="hidden md:flex justify-center items-center px-4 py-4 mx-4 my-4">
              <div className='my-8 bg-gradient-to-bl rounded-full from-blue-200 to-pink-500 dark:from-slate-600 dark:to-black w-24 h-24 justify-center items-center animate-bounce-reverse  '>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* nav */}
    </section>
  );
};

export default Main