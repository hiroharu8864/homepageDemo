import { BrowserRouter } from "react-router-dom";
import { RouterDom } from "./router/RouterDom";
import { DefaultLayout } from "./components/templates/DefaultLayout";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <RouterDom />
      </DefaultLayout>
    </BrowserRouter>
  );
}
