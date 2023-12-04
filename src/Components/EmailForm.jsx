import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Import Font Awesome icons\

import { Linkedin } from "react-feather";

export const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_beg9ktf";
    const templateId = "template_3i644bo";
    const publicKey = "_rnKkK5sWOEDNiGIZ";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Wahyu Sutanto Pamungkas",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent succesfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("error reading email", error);
      });
  };

  return (
    <section>
          <div  data-aos="flip-up" data-aos-delay="400 xl:1100" className="shadow-lg shadow-[#05161A] dark:shadow-lg dark:shadow-[#8EE4AF] max-w-2xl xl:max-w-6xl flex items-center justify-center mx-6 xl:mx-auto xl:h-auto rounded-2xl bg-[#8EE4AF] dark:bg-[#072E33] m-5  ">
      {/* <div className=" bg-slate-50 dark:bg-slate-600 flex flex-col-reverse md:flex-row"> */}
          <div className="container bg-gradient-to-bl from-[#EDF5E1] to-[#8EE4AF] dark:from-black dark:to-slate-600 xl:rounded-bl-3xl rounded-bl-3xl rounded-tr-3xl pt-4 max-w-full">
            <div className="m-4">
              <h1 className="font-bold text-2xl pt-4 text-center text-gray-600 dark:text-gray-400 xl:text-center">
                Contact Me
              </h1>
              <div className="flex flex-col">
                <div className="w-full p-4">
                  {/* kiri */}
                  <p className="font-mono text-lg mb-1 mx-4 p-4 text-center text-slate-800 dark:text-gray-400 xl:text-center">
                    I really enjoy communicating and sharing information. If you
                    have any questions, requests, or want to discuss the
                    project, do not hesitate to contact me via one of the social
                    media listed
                  </p>
                  <p className="font-mono text-lg mb-2 my-1 mx-4 p-4 text-center text-slate-800 dark:text-gray-400 xl:text-center">
                    Thank you for your interest and I hope to hear from you
                    soon!
                  </p>
                  <div className="flex">
                    <div className="md:w-1/2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/wahyusutantop/"
                        className="block rounded-lg  p-4 relative transition-all"
                      >
                        <div className="bg-white hover:bg-gradient-to-bl from-pink-500 to-blue-200 dark:hover:bg-gray-600 dark:bg-gray-800 rounded-lg shadow-md p-4 relative">
                          <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                            LinkedIn
                          </h2>
                          <p className="align-middle text-gray-600 dark:text-gray-400">
                            Wahyu Sutanto P
                          </p>
                          <div className="absolute top-2 right-2">
                            <Linkedin size={20} />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="md:w-1/2"> 
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://wa.me/6282172375366"
                        className="block dark:hover:bg-gray-600 rounded-lg  p-4 relative transition-all"
                      >
                        <div className="bg-white hover:bg-gradient-to-bl from-pink-500 to-blue-200 dark:hover:bg-gray-600 dark:bg-gray-800 rounded-lg shadow-md p-4 relative">
                          <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                            Whatsapp
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400">
                            +62821 7237 5366
                          </p>
                          <div className="absolute top-2 right-2">
                            <FaWhatsapp className="text-green-500 text-2xl" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
                  {/* kanan */}
                  <form
                    onSubmit={handleSubmit}
                    className="emailForm max-w-md m-auto justify-center pt-2 p-3 rounded-lg dark:bg-slate-600 "
                  >
                    <div className="relative my-3">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <AiOutlineUser />
                      </span>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full block my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></input>
                    </div>
                    <div className="relative my-3">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <AiOutlineMail />
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full block my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your Email"
                      ></input>
                    </div>
                    <div className="relative my-3">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <AiOutlineMessage />
                      </span>
                      <textarea
                        type="text"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full block xl:w-full xl:block my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300"
                    >
                      Send Email
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default EmailForm;
