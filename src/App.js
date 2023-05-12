import "./style/styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

import Contact from "./pages/Contact.js";

export default function App() {
  return (
    <div className="nav">
      <div className="nav1">
        <nav>
          <ul>
            <li>
              <h className="linkxer">LinkXr.</h>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
