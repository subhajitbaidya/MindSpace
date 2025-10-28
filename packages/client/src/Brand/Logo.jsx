import { ImBook } from "react-icons/im";
const Logo = () => {
  return (
    <>
      <div className="logo">
        <div className="logo-bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <ImBook style={{ fontSize: "20px" }} />
        </div>
        <span className="logo-text">MindSpace</span>
      </div>
    </>
  );
};

export default Logo;
