import { IoMdClose } from "react-icons/io";
import { fullURL } from "../../services/api";
import { useHomePage } from "../../contexts/HomePageContext";
import { createPortal } from "react-dom";
import { useEffect } from "react";

function ModalComp() {
  const { modal, closeModal } = useHomePage();

  useEffect(() => {
    if (modal == null) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  if (modal == null) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-9999 bg-black/30 backdrop-blur-xs p-5">
      <div className="w-full">
        <button
          className="size-10 rounded-full flex items-center justify-center text-white bg-gray-300 hover:bg-gray-400 cursor-pointer mb-5"
          onClick={() => closeModal()}
        >
          <IoMdClose size={30} />
        </button>
        <div className="w-full h-full overflow-hidden flex items-center justify-center ">
          {modal.type == "video" ? (
            <video
              src={fullURL(modal.video)}
              controls
              className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xxl:w-[30%] object-cover! aspect-video"
            />
          ) : (
            <img
              src={fullURL(modal.image?.url)}
              alt={modal.image?.alt}
              className="w-full sm:w-[80%] md:w-[40%] lg:w-[30%] xxl:w-[20%] object-cover!"
            />
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ModalComp;
