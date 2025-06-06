import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import Barbers from "./Pages/Barbers";
import EsmairyProfile from "./Pages/EsmairyProfile";
import ElisaulProfile from "./Pages/ElisaulProfile";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/barbers" element={<Barbers/>} />
        <Route path="/barbers/esmairy" element={<EsmairyProfile/>} />
        <Route path="/barbers/elisaul" element={<ElisaulProfile/>} />
      </Routes>
    </>
  );
}

export default App;