import { ToastContainer } from "react-toastify";

export default Notification = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      draggable
      hideProgressBar={false}
      theme="colored"
      className={"text-black"}
    />
  );
};
