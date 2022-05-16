import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { Company } from "./Company";
import { About } from "./About";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/company">Company</Link>
        <br />
        <Link to="/about">About</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
