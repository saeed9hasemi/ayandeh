import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LuArrowUpFromLine } from "react-icons/lu";
import { useHomePage } from "../../contexts/HomePageContext";

function GoUpButton() {
  const { modal, modalSearch } = useHomePage();

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleEvent = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleEvent);
    return () => window.removeEventListener("scroll", handleEvent);
  }, []);

  return createPortal(
    <button
      className={`fixed size-10  bg-white hover:bg-gray-300 cursor-pointer transition-all duration-300 rounded-full flex items-center justify-center shadow left-1/2 -translate-x-1/2 z-9999 ${scroll && !modal && !modalSearch && scroll > 400 ? "bottom-8" : "-bottom-20"}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <LuArrowUpFromLine />
    </button>,
    document.body,
  );
}

export default GoUpButton;
