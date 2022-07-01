import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../components/templates/DefaultLayout";

import { Home } from "../components/pages/Home";
import { Company } from "../components/pages/Company";
import { About } from "../components/pages/About";
import { SampleProgram } from "../components/pages/SampleProgram";
import { TestPage } from "../components/pages/TestPage";

import { NotFound } from "../components/pages/NotFound";
import { CompanyRoutes } from "./CompanyRoutes";
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
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="company"
            element={
              <DefaultLayout>
                <Company />
              </DefaultLayout>
            }
          >
            {CompanyRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.children}
              />
            ))}
          </Route>

          <Route
            path="about"
            element={
              <DefaultLayout>
                <About />
              </DefaultLayout>
            }
          />
          <Route
            path="sample"
            element={
              <DefaultLayout>
                <SampleProgram />
              </DefaultLayout>
            }
          />
          <Route
            path="test"
            element={
              <DefaultLayout>
                <TestPage />
              </DefaultLayout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
