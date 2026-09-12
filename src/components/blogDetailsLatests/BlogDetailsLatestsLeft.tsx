import type { IBlogMain } from "../../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "../../sliderStyles.css";
import { Navigation } from "swiper/modules";
import BlogDetailsLatestsLeftSlides from "./BlogDetailsLatestsLeftSlides";
import { useNavigate } from "react-router-dom";

interface IBlogDetailsLatestsLeft {
  latestsBlogs: IBlogMain[] | null | undefined;
  setActive: any;
}

function BlogDetailsLatestsLeft({
  latestsBlogs,
  setActive,
}: IBlogDetailsLatestsLeft) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-140 pt-15 lg:pt-20 relative! overflow-hidden!">
      <div className="absolute top-0 lg:hidden w-full text-lg border-r-4 border-r-[#427AE0] py-1 px-3 font-semibold">
        تازه ترین وبلاگ ها
      </div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
            direction: "horizontal",
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
            direction: "horizontal",
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            direction: "horizontal",
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            direction: "vertical",
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 0,
            direction: "vertical",
          },
        }}
        modules={[Navigation]}
        navigation
        className="latestBlogSwiper"
      >
        {latestsBlogs?.map((item) => {
          return (
            <SwiperSlide
              onMouseEnter={() => setActive(item.id)}
              onClick={() => navigate(`/blog_details/${item.id}`)}
            >
              {<BlogDetailsLatestsLeftSlides key={item.id} blog={item} />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default BlogDetailsLatestsLeft;
