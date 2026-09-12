import type { IAdvNumeric } from "../../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../sliderStyles.css";
import { Grid, Pagination, Navigation } from "swiper/modules";
import {
  categoryTranslator,
  dealTypeTranslator,
  fullURL,
} from "../../services/api";
import { useNavigate } from "react-router-dom";
import Container from "../container/Container";
import LatestSliderSlide from "../latestSliderSlide/LatestSliderSlide";
import { RiInformationLine } from "react-icons/ri";

interface ISimilarAdvsSliderWrapper {
  title: string;
  data: IAdvNumeric[] | null | undefined;
  href?: string;
}

function SimilarAdvsSliderWrapper({
  title,
  data,
  href,
}: ISimilarAdvsSliderWrapper) {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <div className="w-full text-xl border-r-4 border-r-[#427ae0] p-1 px-3 font-semibold mb-15">
          {title}
        </div>
      </Container>
      {(data?.length ?? 0 > 0) ? (
        <div className="w-full relative px-15 lg:px-20 xl:px-70 pb-10 h-90 overflow-hidden! mb-5">
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
                <SwiperSlide
                  onClick={() => navigate(`/adv_details/${item.id}`)}
                >
                  <LatestSliderSlide
                    key={item.id}
                    alt={item.image_1.alt}
                    categoryTitle={categoryTranslator(item.category)}
                    dealTypeTitle={dealTypeTranslator(item.deal_type)}
                    imgURL={fullURL(item.image_1.url)}
                    title={item.title}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center mb-10">
          <RiInformationLine size={80} color="#1677FF" />
          <p className="text-xl lg:text-2xl">آگهی برای این زیردسته یافت نشد</p>
        </div>
      )}
      {href && (
        <div className="w-full px-15 lg:px-20 xl:px-70 text-[#7879F1] flex flex-row-reverse">
          <div
            className="cursor-pointer px-4 py-2 hover:bg-[#F7F7FD] w-fit"
            onClick={() => navigate(href ?? "")}
          >
            مشاهده همه
          </div>
        </div>
      )}
    </div>
  );
}

export default SimilarAdvsSliderWrapper;
