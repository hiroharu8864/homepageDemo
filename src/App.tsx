import { BrowserRouter, Link } from "react-router-dom";
import { RouterDom } from "./router/RouterDom";

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
      <RouterDom />
    </BrowserRouter>
  );
}
