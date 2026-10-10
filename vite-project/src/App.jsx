import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import Footer from "./Components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <Footer />

      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
      /> */}
    </>
  );
}

export default App;