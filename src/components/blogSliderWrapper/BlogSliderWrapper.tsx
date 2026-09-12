import type { IBlogMain } from "../../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../sliderStyles.css";
import { Grid, Pagination, Navigation } from "swiper/modules";
import { fullURL } from "../../services/api";
import { useNavigate } from "react-router-dom";
import BlogSliderSlide from "../blogSliderSlide/BlogSliderSlide";
import Container from "../container/Container";

interface IBlogSliderWrapper {
  title: string;
  data: IBlogMain[] | null | undefined;
  href: string;
}

function BlogSliderWrapper({ title, data, href }: IBlogSliderWrapper) {
  const navigate = useNavigate();
  return (
    <div className="pt-10">
      <Container>
        <div className="w-full text-xl border-r-4 border-r-[#427ae0] p-1 px-3 font-semibold mb-15">
          {title}
        </div>
      </Container>
      <div className="w-full relative px-10 lg:px-20 xl:px-70 pb-10 h-90 overflow-hidden! mb-5">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination, Navigation]}
          navigation
          className="latestSwiper blogSlider mb-5"
        >
          {data?.map((item) => {
            return (
              <SwiperSlide onClick={() => navigate(`/blog_details/${item.id}`)}>
                <BlogSliderSlide
                  title={item.title}
                  imgURL={fullURL(item.image.url)}
                  alt={item.image.alt}
                  description={item.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full px-15 lg:px-20 xl:px-70 text-[#7879F1] flex flex-row-reverse">
        <div
          className="cursor-pointer px-4 py-2 hover:bg-[#F7F7FD] w-fit"
          onClick={() => navigate(href)}
        >
          مشاهده همه
        </div>
      </div>
    </div>
  );
}

export default BlogSliderWrapper;
