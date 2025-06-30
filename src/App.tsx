import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./features/ui/navbar/Navbar.tsx";
import Footer from "./features/ui/footer/Footer.tsx";
import Home from "./pages/Home";
import Theclub from "./pages/Theclub";
import Amenities from "./pages/Amenities.tsx";
import Dining from "./pages/Dining.tsx";
import Events from "./pages/Events.tsx";

function App() {
  return (
    <main>
      <Router>
        <div className="max-w-[1800px] mx-auto px-8">
          <Navbar menuBgColor={"#931621"} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/club" element={<Theclub />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
        <div className="bg-base-content h-[100%]">
          <Footer />
        </div>
      </Router>
    </main>
  );
}

export default App;
