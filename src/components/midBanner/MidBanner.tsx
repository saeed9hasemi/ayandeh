import MidBannerImage from "../../assets/midBanner.webp";
import { Link } from "react-router-dom";

function MidBanner() {
  return (
    <div className="mb-35 w-full">
      <Link to={"/advice"}>
        <img
          src={MidBannerImage}
          alt="midBanner"
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
}

export default MidBanner;
