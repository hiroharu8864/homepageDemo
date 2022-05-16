import { Routes, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Company } from "../components/pages/Company";
import { About } from "../components/pages/About";
import { CompanyLocation } from "../components/pages/CompanyLocation";
import { CompanyRecruit } from "../components/pages/CompanyRecruit";
import { NotFound } from "../components/pages/NotFound";

export const RouterDom = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<Company />} />
      <Route path="location" element={<CompanyLocation />} />
      <Route path="recruit" element={<CompanyRecruit />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
