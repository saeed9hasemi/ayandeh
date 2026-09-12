import { Link } from "react-router-dom";
import FooterBanner from "../../assets/footerBanner.webp";

function BannerFooter() {
  return (
    <Link
      to={"/adv_category/discounts"}
      className="absolute w-[90%] lg:w-[80%] left-1/2 -translate-x-1/2 top-0 -translate-y-1/2"
    >
      <img src={FooterBanner} alt="footer" className="w-full h-full" />
    </Link>
  );
}

export default BannerFooter;
