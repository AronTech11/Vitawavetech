

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/nav/Header";
import Footer from "./components/nav/footer";
import { Toaster } from "react-hot-toast";
import Home from "./pages/container/Home";
import Team from "./pages/container/team";
import ContactUs from "./pages/container/contactus";
// import Login from "./pages/Login"; // I will keep this route in case you want a login page in the future
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blogs from "./pages/container/Blogs"
import Application from "./pages/container/Applications"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} /> 
        <Route path="/application" element={<Application />} /> 

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

