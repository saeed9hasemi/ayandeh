import { useEffect } from "react";
import { createPortal } from "react-dom";
import Logo from "../logo/Logo";
import { PulseLoader } from "react-spinners";

function Loading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 bg-black/50 z-99999 flex items-center justify-center">
      <div className="bg-white py-4 rounded-xl flex flex-col items-center gap-2">
        <div className="w-60 h-20">
          <Logo />
        </div>
        <PulseLoader color="#5D5FEF" />
      </div>
    </div>,
    document.body,
  );
}

export default Loading;
