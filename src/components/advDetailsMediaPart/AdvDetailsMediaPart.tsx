import { FaPlay } from "react-icons/fa";
import type { IAdvNumeric } from "../../types/types";
import { fullURL } from "../../services/api";
import { useHomePage } from "../../contexts/HomePageContext";
import { IoMdEye } from "react-icons/io";
import AdvDetailsMediaImage from "../advDetailsMediaImage/AdvDetailsMediaImage";

interface IAdvDetailsMediaPart {
  adv: IAdvNumeric | null | undefined;
}

function AdvDetailsMediaPart({ adv }: IAdvDetailsMediaPart) {
  const { openModal } = useHomePage();

  return (
    <div className="w-full px-4">
      {adv?.video && (
        <div className="w-full rounded-2xl mb-4">
          <div className="w-full h-full cursor-pointer relative">
            <img
              src={fullURL(adv?.img_video.url) ?? undefined}
              alt={adv?.img_video.alt ?? ""}
              className="w-full h-full max-h-100 overflow-hidden object-fill rounded-2xl"
            />
            <div className="absolute size-18 rounded-full bg-white/50 hover:bg-white/70 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-300">
              <FaPlay color="#427AE0" size={30} className="pl-1" />
            </div>
            <div
              className="absolute rounded-2xl inset-0 hover:bg-black/40 z-999 transition-all duration-300 flex items-center justify-center group"
              onClick={() => {
                openModal({
                  type: "video",
                  video: adv?.video,
                  image_video: adv?.img_video,
                });
              }}
            >
              <div className="hidden group-hover:flex items-center gap-2 text-sm text-white">
                <p>ویدیو</p>
                <IoMdEye size={20} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
        {adv?.image_1.url && <AdvDetailsMediaImage image={adv?.image_1} />}
        {adv?.image_2.url && <AdvDetailsMediaImage image={adv?.image_2} />}
        {adv?.image_3.url && <AdvDetailsMediaImage image={adv?.image_3} />}
      </div>
    </div>
  );
}

export default AdvDetailsMediaPart;
