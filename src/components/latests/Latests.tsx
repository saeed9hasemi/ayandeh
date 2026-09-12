import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../sliderStyles.css";
import { Grid, Pagination, Navigation } from "swiper/modules";
import { useHomePage } from "../../contexts/HomePageContext";
import LatestSliderSlide from "../latestSliderSlide/LatestSliderSlide";
import { fullURL } from "../../services/api";
import { useNavigate } from "react-router-dom";

function Latests() {
  const { data } = useHomePage();
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-20 items-center mb-35">
      <h4 className="text-2xl font-semibold">آخرین آگهی های درج شده ملکی</h4>
      <div className="w-full relative px-5 sm:px-15 lg:px-20 xl:px-70 pb-10 h-90 sm:h-170 overflow-hidden!">
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
                rows: 2,
                fill: "row",
              },
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination, Navigation]}
          navigation
          className="latestSwiper"
        >
          {data?.advs.map((item) => {
            return (
              <SwiperSlide onClick={() => navigate(`/adv_details/${item.id}`)}>
                <LatestSliderSlide
                  key={item.id}
                  title={item.title}
                  imgURL={fullURL(item.image_1.url)}
                  alt={item.image_1.alt}
                  categoryTitle={item.category.title}
                  dealTypeTitle={item.deal_type.title}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Latests;
