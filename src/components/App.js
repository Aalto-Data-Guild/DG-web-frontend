import { Routes, Route } from "react-router-dom";

import "../App.css";

import About from "./About";
import Newstudents from "./Newstudents";
import Contact from "./Contact";
import Events from "./Events";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/newstudents" element={<Newstudents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
