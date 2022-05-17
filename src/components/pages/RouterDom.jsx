import { Routes, Route } from "react-router-dom";

import { Home } from "../Home";
import { Company } from "../Company";
import { About } from "../About";
import { CompanyLocation } from "../CompanyLocation";
import { CompanyRecruit } from "../CompanyRecruit";

/**
 * react-router v6 対応
 * 1) <Switch>から<Route>タグへの変更
 * 2) ネストされた<Route>では親<Route>からの相対パスでpathを記載
 * 3) <Route>に対応するコンポーネントはelement propsで記述
 */
export const RouterDom = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<Company />}>
        <Route path="location" element={<CompanyLocation />} />
        <Route path="recruit" element={<CompanyRecruit />} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
