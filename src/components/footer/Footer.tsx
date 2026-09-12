import BannerFooter from "./BannerFooter";
import BottomFooter from "./BottomFooter";
import UpperFooter from "./UpperFooter";

function Footer() {
  return (
    <div className="w-full relative">
      <BannerFooter />
      <UpperFooter />
      <BottomFooter />
    </div>
  );
}

export default Footer;
