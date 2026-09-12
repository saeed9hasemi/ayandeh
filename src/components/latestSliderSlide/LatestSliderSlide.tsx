import EmptyImage from "../../assets/emptyImage.webp";

interface ILatestSliderSlide {
  title: string;
  imgURL: string;
  alt: string;
  categoryTitle: string;
  dealTypeTitle: string;
}

function LatestSliderSlide({
  title,
  imgURL,
  alt,
  categoryTitle,
  dealTypeTitle,
}: ILatestSliderSlide) {
  return (
    <div className="relative w-full h-full aspect-square rounded-2xl overflow-hidden cursor-pointer group">
      {imgURL ? (
        <img
          src={imgURL}
          alt={alt}
          className="w-full h-full object-fill group-hover:scale-125 rounded-2xl transition-all duration-300"
        />
      ) : (
        <>
          <img
            src={EmptyImage}
            alt={alt}
            className="w-full h-full object-fill rounded-2xl transition-all duration-300 "
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#656566] to-transparent"></div>
        </>
      )}

      <div className="absolute inset-0 bg-linear-to-t from-[#656566] via-transparent to-transparent w-full p-3 flex items-end gap-1 justify-between">
        <div className="w-3/5 text-white flex flex-col items-start">
          <p className="font-semibold">{categoryTitle}</p>
          <p className="text-sm line-clamp-1">{title}</p>
        </div>
        <div className="w-fit py-1.5 px-3 rounded-[999px] bg-white text-sm group-hover:bg-[#8283f0] hover:text-white transition-all duration-300">
          {dealTypeTitle}
        </div>
      </div>
    </div>
  );
}

export default LatestSliderSlide;
