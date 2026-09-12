import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../sliderStyles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useHomePage } from "../../contexts/HomePageContext";
import { fullURL } from "../../services/api";

function HomeBlog() {
  const navigate = useNavigate();

  const { data } = useHomePage();

  return (
    <div className="w-full px-8 md:px-10 lg:px-20 overflow-hidden! flex flex-col gap-1 items-center mb-40 sm:mb-50 md:mb-60 lg:mb-70 xl:mb-80">
      <h4 className="text-2xl font-semibold">وبلاگ</h4>
      <p className="mb-6">حوزه املاک و ساختمان</p>
      <div className="w-full h-75 sm:h-105  rounded-3xl relative">
        {data && (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper homeBlogSwiper"
            slidesPerView={1}
            spaceBetween={100}
            loop
          >
            {data?.blogs.map((blog) => {
              return (
                <SwiperSlide
                  key={blog.id}
                  onClick={() => navigate(`/blog_details/${blog.id}`)}
                >
                  <div className="right absolute lg:relative text-white  lg:text-black  w-4/5 h-1/2 rounded-2xl lg:rounded-none lg:rounded-r-2xl lg:w-1/2 bg-black/20 lg:bg-[#EAF2F5] backdrop-blur-xs lg:h-full p-4 lg:p-20 flex flex-col justify-between">
                    <p className="md:text-lg lg:text-2xl font-semibold">
                      {blog.title}
                    </p>
                    <p
                      className="lg:text-[#979797] text-sm md:text-base lg:text-xl md:leading-8 line-clamp-3 md:line-clamp-4 lg:line-clamp-5"
                      dangerouslySetInnerHTML={{
                        __html: blog.description ?? "",
                      }}
                    ></p>
                  </div>
                  <div className="left w-full lg:w-1/2 h-full rounded-l-3xl">
                    <img
                      src={fullURL(blog.image.url)}
                      alt="alt"
                      className="w-full h-full object-cover rounded-3xl lg:rounded-none lg:rounded-l-3xl"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default HomeBlog;
