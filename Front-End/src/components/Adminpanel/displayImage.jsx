import React from "react";
import { CgClose } from "react-icons/cg";

const displayImage = ({ onClose, imgUrl }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded max-w-3xl  border-4 mx-auto p-4">
        <div
          className="text-2xl hover:text-red-600 cursor-pointer ml-auto w-fit"
          onClick={onClose}
        >
          <CgClose />
        </div>
        <div className="flex justify-center p-4">
          <img src={imgUrl} className="w-full h-[75vh]" />
        </div>
      </div>
    </div>
  );
};

export default displayImage;
