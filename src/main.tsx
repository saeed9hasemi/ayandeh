import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import HomePageContext from "./contexts/HomePageContext.tsx";
import ModalComp from "./components/modal/Modal.tsx";
import ModalSearch from "./components/modalSearch/ModalSearch.tsx";
import GoUpButton from "./components/goUpButton/GoUpButton.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePageContext>
      <HashRouter>
        <Layout>
          <App />
        </Layout>
        <GoUpButton />
        <ModalComp />
        <ModalSearch />
      </HashRouter>
    </HomePageContext>
  </StrictMode>,
);
