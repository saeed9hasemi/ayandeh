import { createContext, useContext, useState } from "react";
import { useAPI } from "../hooks/useAPI";
import type { IHomePage, IModal } from "../types/types";

export const homePageContext = createContext<IhomePageContext>(
  {} as IhomePageContext,
);

interface IhomePageContext {
  data: IHomePage | null;
  loading: boolean;
  modal: null | IModal;
  closeModal: () => void;
  openModal: (modal: IModal) => void;
  modalSearch: boolean;
  closeModalSearch: () => void;
  openModalSearch: () => void;
}

interface IHomePageContext {
  children: React.ReactNode;
}

function HomePageContext({ children }: IHomePageContext) {
  const { data, loading } = useAPI<IHomePage>("api/home_page/", {
    method: "GET",
  });

  //////////////////////////////////

  const [modal, setModal] = useState<null | IModal>(null);
  const closeModal = () => setModal(null);
  const openModal = (modal: IModal) => {
    setModal(modal);
  };

  ////////////////////////////////////

  const [modalSearch, setModalSearch] = useState<boolean>(false);
  const closeModalSearch = () => setModalSearch(false);
  const openModalSearch = () => {
    setModalSearch(true);
  };

  return (
    <homePageContext.Provider
      value={{
        data,
        loading,
        modal,
        openModal,
        closeModal,
        modalSearch,
        closeModalSearch,
        openModalSearch,
      }}
    >
      {children}
    </homePageContext.Provider>
  );
}

export default HomePageContext;

export const useHomePage = () => useContext(homePageContext);
