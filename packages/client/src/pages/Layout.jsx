import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <br />
      <Outlet />
      <br />
      <Footer />
    </>
  );
};

export default Layout;
