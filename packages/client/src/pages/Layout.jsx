import { Outlet } from "react-router-dom";
import Header from "../components/widgets/Header";
import Footer from "../components/widgets/Footer";

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
