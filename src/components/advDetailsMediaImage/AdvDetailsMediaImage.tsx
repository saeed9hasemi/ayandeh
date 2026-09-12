import { IoMdEye } from "react-icons/io";
import { fullURL } from "@/services/api";
import { useHomePage } from "@/contexts/HomePageContext";
import type { IImage } from "@/types/types";

interface IAdvDetailsMediaImage {
  image: IImage | undefined | null;
}

function AdvDetailsMediaImage({ image }: IAdvDetailsMediaImage) {
  const { openModal } = useHomePage();
  return (
    <div className="w-full h-full cursor-pointer overflow-hidden relative">
      <img
        src={fullURL(image?.url) ?? undefined}
        alt={image?.alt ?? ""}
        className="w-full h-full max-h-100  object-fill rounded-2xl"
      />
      <div
        className="absolute rounded-2xl inset-0 hover:bg-black/40 z-999 transition-all duration-300 flex items-center justify-center group"
        onClick={() => {
          openModal({
            type: "image",
            image: image,
          });
        }}
      >
        <div className="hidden group-hover:flex items-center gap-2 text-sm text-white">
          <IoMdEye size={20} />
        </div>
      </div>
    </div>
  );
}

export default AdvDetailsMediaImage;
