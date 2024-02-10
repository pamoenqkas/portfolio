import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Avatar,
  Divider,
} from "@nextui-org/react";

import { MdOutlineArrowOutward } from "react-icons/md";

const ModalPopup = ({
  title,
  projectImage,
  avatar1,
  avatar2,
  description,
  contributor1,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("blur");
  const [mode, setMode] = useState(true);

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Button
        variant="bordered"
        color={mode ? "default" : "primary"}
        onPress={() => handleOpen("blur")}
        // onClick={() => setShowModal(true)}
        className="hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all ease-in duration-300 hover:text-white text-xl "
      >
        View <MdOutlineArrowOutward />
      </Button>
      <>
        <div className="flex  xl:flex-wrap gap-3">
          <Modal
            backdrop={backdrop}
            isOpen={isOpen}
            onClose={onClose}
            size={"sm"}
            scrollBehavior={"inside"}
          >
            <ModalContent>
              <>
                <ModalHeader className="flex flex-col text-3xl ml-1 gap-1">
                  {title}
                </ModalHeader>
                <ModalBody>
                  <Divider />
                  <div className="flex flex-col justify-center items-center">
                    {/* <img
                      // src="./public/assets/project/gofit-1.png"
                      src={projectImage}
                      alt="..."
                      className=" w-96 h-96 object-fill overflow-hidden"
                    /> */}
                    <p className="py-4 text-justify p-2">{description}</p>
                    <Divider />
                    <p className="mt-3 font-semibold ">Contributor</p>
                    <div className="flex justify-center text-center items-center p-3 hover:backdrop-blur">
                      <div className="group p-1 m-1 rounded-full bg-white relative hover:transform hover:scale-110 transition-transform duration-300">
                        <Avatar
                          src={avatar1}
                          className="w-20 h-20 text-large hover:backdrop-blur"
                        />
                        <span className="absolute font-bold text-black text-xs lg:text-sm inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          {contributor1}
                        </span>
                      </div>
                      {/* <div className="group p-1 m-1 rounded-full bg-white relative hover:transform hover:scale-110 transition-transform duration-300">
                        <Avatar
                          // src="./public/assets/project/gofit-1.png"
                          src={avatar2}
                          className="w-20 h-20 text-large"
                        />
                        <span className="absolute font-extrabold text-black text-xs lg:text-sm inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          {language2}
                        </span>
                      </div> */}
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color={mode ? "default" : "primary"}
                    variant="bordered"
                    onPress={() => handleClose()}
                    className="hover:bg-black transition-all  ease-in duration-300 hover:text-white text-lg"
                  >
                    Close
                  </Button>
                </ModalFooter>
              </>
            </ModalContent>
          </Modal>
        </div>
      </>
    </>
  );
};

export default ModalPopup;
