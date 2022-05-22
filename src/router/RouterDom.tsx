import { Routes, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Company } from "../components/pages/Company";
import { About } from "../components/pages/About";
import { CompanyLocation } from "../components/pages/CompanyLocation";
import { CompanyRecruit } from "../components/pages/CompanyRecruit";
import { CompanyComment } from "../components/pages/CompanyComment";
import { NotFound } from "../components/pages/NotFound";

/**
 * react-router v6 対応
 * 1) <Switch>から<Route>タグへの変更
 * 2) ネストされた<Route>では親<Route>からの相対パスでpathを記載
 * 3) <Route>に対応するコンポーネントはelement propsで記述
 *
 * Element要素にレイアウトを渡す
 * <Route path="home" element={<HeaderLayout><Outlet /></HeaderLayout>} >
 *  <Route index element={<Home />} />
 *  {
 *    homeRoutes.map(route => (
 *      <Route key={route.path} path={route.path} element={route.children} />
 *    ))
 *  }
 * </Route>
 *
 * 直接遷移
 * <Route path="company" element={<Outlet />}>
 * <Route index element={<Company />} />
 * <Route path="location" element={<CompanyLocation />} />
 * <Route path="recruit" element={<CompanyRecruit />} />
 * </Route>
 */
export const RouterDom = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="company" element={<Company />}>
        <Route path="location" element={<CompanyLocation />} />
        <Route path="recruit" element={<CompanyRecruit />} />
        <Route path="comment" element={<CompanyComment />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
