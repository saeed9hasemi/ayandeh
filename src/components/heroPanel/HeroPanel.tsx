import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "../../sliderStyles.css";

import { FreeMode } from "swiper/modules";

function HeroPanel() {
  const { category } = useParams();

  const panelItems = [
    { id: 1, title: "فروش", href: "/adv_category/sale", activeName: "sale" },
    {
      id: 2,
      title: "رهن و اجاره",
      href: "/adv_category/rent",
      activeName: "rent",
    },
    {
      id: 3,
      title: "مشارکت",
      href: "/adv_category/participation",
      activeName: "participation",
    },
    {
      id: 4,
      title: "پیش فروش",
      href: "/adv_category/pre_sell",
      activeName: "pre_sell",
    },
    {
      id: 5,
      title: "معاوضه",
      href: "/adv_category/exchange",
      activeName: "exchange",
    },
    { id: 6, title: "ویلا", href: "/adv_category/villa", activeName: "villa" },
    {
      id: 7,
      title: "محله ها",
      href: "/adv_category/places",
      activeName: "places",
    },
    {
      id: 8,
      title: "زیر قیمت",
      href: "/adv_category/discounts",
      activeName: "discounts",
    },
  ];

  return (
    <>
      <div className=" md:px-5 lg:px-20 h-24 w-full py-6 rounded-2xl shadow-xl bg-white overflow-hidden">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
            970: {
              slidesPerView: 7,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 0,
            },
          }}
          slidesPerView={6}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper heroPanelSwiper"
        >
          {panelItems.map((item, index) => {
            return (
              <SwiperSlide>
                <div
                  className={`flex items-center justify-center ${index != panelItems.length - 1 ? "border-l border-l-[#E0E0E0]" : ""}`}
                >
                  <div key={item.id} className="h-full flex items-center">
                    <Link
                      to={item.href}
                      className={`py-3 px-1  lg:px-2 ${category == item.activeName ? "text-[#9E9FF5] border-b-3 border-[#9E9FF5]" : "text-[#666666]"}`}
                    >
                      {item.title}
                    </Link>
                  </div>
                  {/* {index != panelItems.length - 1 && (
                  <div className="w-10 h-full bg-[#E0E0E0]"></div>
                )} */}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default HeroPanel;
