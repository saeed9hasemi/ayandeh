import HeroImage from "../../assets/mainBanner.webp";
import HeroFilter from "../heroFilter/HeroFilter";
import HeroPanel from "../heroPanel/HeroPanel";

function Hero() {
  return (
    <div className="w-full mb-20 sm:25 md:mb-35">
      <div className="w-full h-135 relative">
        <img
          src={HeroImage}
          className="w-full h-full object-cover"
          alt="banner"
        />
        <div className="absolute inset-0 bg-white/35 flex flex-col justify-center items-center gap-5">
          <div className="w-88 h-4 sm:w-108 sm:h-5 md:w-126 md:h-10 bg-[#5D5FEF] relative mb-4">
            <p className="absolute right-0 top-0 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl font-bold">
              آینده ی ملکی خود را با ما بسازید...
            </p>
          </div>
          <h3 className="text-sm sm:text-base md:text-xl">
            کارگزاری املاک آینده ولنجک real state company
          </h3>
          <button className="p-2 px-3 hover:scale-110 transition-all duration-300 bg-[#427AE0] text-sm text-white rounded-xl cursor-pointer">
            پیشنهاد ویژه ما
          </button>
        </div>
        <div className="absolute hidden md:block bottom-0 translate-y-1/2 w-full px-15">
          <HeroPanel />
        </div>
      </div>
      <div className="filter md:hidden p-5">
        <HeroFilter />
      </div>
    </div>
  );
}

export default Hero;
