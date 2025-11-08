import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification: React.FC = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      draggable
      hideProgressBar={false}
      theme="colored"
      className="text-black"
    />
  );
};

export default Notification;
