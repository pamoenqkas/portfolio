import React, { useState } from "react";
import { CiChat1 } from "react-icons/ci";
import emailjs from "@emailjs/browser";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Textarea,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import EmailForm from "./EmailForm";
import { Toaster, toast } from "sonner";

const ContactMe = () => {
  const [toastMessage, setToastMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("blur");

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

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
        onClose();
        toast.success("Berhasil mengirim pesan");
        setToastMessage("Berhasil mengirim pesan");
        //toast
      })
      .catch((error) => {
        console.error("error reading email", error);
      });
  };

  return (
    <>
      <div className="relative">
        {/* <div className="fixed z-20 w-full px-4 xl:px-5 py-3 md:px-1 md:w-11/12 lg:w-2/5 xl:w-full rounded-b-3xl xl:rounded-none top-0 max-w-full xl:p-1"> */}
        <div className="fixed right-0 xl:right-4 bottom-4 mr-6 py-3">
          <button onClick={handleOpen}>
            <CiChat1 className="w-8 h-8" />
          </button>
        </div>
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h1 className="font-bold text-2xl">Kontak</h1>
            </ModalHeader>
            <Divider />
            <ModalBody>
              <p className="text-justify">
                Saya sangat menikmati berkomunikasi dan berbagi informasi. Jika
                Anda memiliki pertanyaan, permintaan, atau ingin mendiskusikan
                proyek ini, jangan ragu untuk menghubungi saya melalui salah
                satu media sosial yang terdaftar
              </p>
              <div className="w-full h-auto flex">
                <form
                  onSubmit={handleSubmit}
                  className="emailForm w-full flex flex-col gap-6 justify-center "
                >
                  {/* <div className="relative my-3">
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
                  </div> */}
                  <div className="w-full">
                    <Input
                      type="text"
                      variant="underlined"
                      label="Name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  {/* <div className="relative my-3">
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
                  </div> */}
                  <div className="w-full flex flex-col gap-4">
                    <Input
                      type="email"
                      variant="underlined"
                      label="Email"
                      placeholder="youremail@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/* <div className="relative my-3">
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
                  </div> */}
                  <div className="flex place-items-center justify-center">
                    <Textarea
                      variant="underlined"
                      label="Description"
                      labelPlacement="outside"
                      placeholder="Description"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                    />
                  </div>
                  <div className="flex items-end justify-end">
                    <button
                      type="submit"
                      className="w-auto p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300"
                    >
                      Send Email
                    </button>
                  </div>
                </form>
              </div>
            </ModalBody>
            {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
          </>
        </ModalContent>
      </Modal>
      <Toaster position="bottom-right" />
    </>
  );
};

export default ContactMe;
