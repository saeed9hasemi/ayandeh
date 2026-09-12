import { Link } from "react-router-dom";
import FooterImage from "../../assets/footer.webp";
import { useHomePage } from "../../contexts/HomePageContext";
import { FaInstagram, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

function UpperFooter() {
  const { data } = useHomePage();
  return (
    <div className=" w-full flex flex-col items-center lg:items-start gap-6 bg-[#0B2040] text-white px-4 lg:px-40 pb-15 pt-20 sm:pt-25 md:pt-30 lg:pt-70">
      <div className="hidden lg:block text-xl font-semibold">
        {data?.footer.title}
      </div>
      <div className="w-full text-sm md:text-base flex flex-col-reverse items-center  lg:flex-row gap-10 lg:gap-15 justify-between lg:items-start border-b-2 border-b-[#979797] pb-6">
        <div className="w-[80%] text-center lg:text-start  lg:w-1/4 leading-10">
          ما اولین نیستیم ولی با شما بهترینیم آینده ملکی خود را با ما بسازید عضو
          رسمی اتحادیه املاک شمیرانات
        </div>
        <div className="w-[80%] text-center lg:text-start lg:w-1/4 leading-10">
          خرید و فروش،رهن،اجاره،مشارکت پیش فروش،معاوضه،ویلایی در منطقه یک
          تهران،شمال،امارات،ترکیه
        </div>
        <div className="w-[80%] text-center lg:text-start items-center lg:items-start lg:w-1/4 flex flex-col gap-4">
          <div>{data?.footer.address}</div>
          <div>داخلی های کارشناسان فروش:</div>
          <div className="flex items-center  gap-2">
            <div>{data?.footer.phone_1}</div>
            <div>{data?.footer.phone_2}</div>
            <div>{data?.footer.telegram}</div>
          </div>
        </div>
        <div className="w-34 overflow-hidden">
          <img
            src={FooterImage}
            alt="footer"
            className="w-full h-full object-cover scale-140"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 flex-row-reverse">
        <Link to={data?.footer.tel_link ?? ""}>
          <FaTelegramPlane size={25} />
        </Link>
        <Link to={data?.footer.insta_link ?? ""}>
          <FaInstagram size={25} />
        </Link>
        <Link to={data?.footer.linkedin ?? ""}>
          <FaLinkedin size={25} />
        </Link>
        <p className="text-sm sm:text-base">
          ما را در شبکه های اجتماعی دنبال کنید:
        </p>
      </div>
    </div>
  );
}

export default UpperFooter;
