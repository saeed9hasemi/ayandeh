import EmptyImage from "../../assets/emptyImage.webp";

interface IBlogSliderSlide {
  title: string;
  description: string;
  imgURL: string;
  alt: string;
}

function BlogSliderSlide({
  title,
  imgURL,
  alt,
  description,
}: IBlogSliderSlide) {
  return (
    <div className="relative w-full h-full aspect-square rounded-2xl overflow-hidden cursor-pointer group">
      {imgURL ? (
        <img
          src={imgURL}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-125 rounded-2xl transition-all duration-300"
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

      <div className="absolute inset-0 bg-linear-to-t from-[#656566] via-transparent to-transparent p-3 flex flex-col items-start gap-5 text-white font-semibold justify-end">
        <p className="font-semibold line-clamp-1 text-sm">{title}</p>
        <p
          className="text-sm line-clamp-3 text-right"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
}

export default BlogSliderSlide;
