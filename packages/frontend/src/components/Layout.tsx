import { Outlet } from "react-router";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

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
