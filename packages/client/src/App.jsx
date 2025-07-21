// import { useState } from "react";
// import LoginPage from "./components/LoginPage";
import LandingPage from "./pages/LandingPage.jsx";

// import ProductCard from "./components/ProductCard";
function App() {
  // const [currentPage, setCurrentPage] = useState("landing");

  return (
    // <div className="App">
    //   <nav className="app-nav">
    //     <button
    //       onClick={() => setCurrentPage("landing")}
    //       className={currentPage === "landing" ? "active" : ""}
    //     >
    //       Landing
    //     </button>
    //     <button
    //       onClick={() => setCurrentPage("login")}
    //       className={currentPage === "login" ? "active" : ""}
    //     >
    //       Login
    //     </button>
    //   </nav>

    //   {currentPage === "landing" && <LandingPage />}
    //   {currentPage === "login" && <LoginPage />}
    // </div>
    <LandingPage />
    // <Hero />
  );
}

export default App;
