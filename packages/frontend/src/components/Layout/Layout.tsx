import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

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
