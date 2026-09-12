import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";

type TVariant = "phone" | "tel" | "location";

interface IContactUsCart {
  title: string;
  data: any;
  variant: TVariant;
}

function ContactUsCart({ title, data, variant }: IContactUsCart) {
  const applyVariant = (value: TVariant) => {
    if (value == "phone") {
      return <MdWifiCalling3 size={40} color="white" />;
    } else if (value == "tel") {
      return <FaTelegramPlane size={40} color="white" />;
    } else if (value == "location") {
      return <FaLocationDot size={40} color="white" />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 items-center">
      <div className="size-20 xl:size-25 rounded-full bg-[#427AE0] flex items-center justify-center">
        {applyVariant(variant)}
      </div>
      <div className="w-full py-4 text-center text-xl text-[#5456E4] font-semibold border-b-3 border-b-[#5456E4]">
        {title}
      </div>
      <div>{data}</div>
    </div>
  );
}

export default ContactUsCart;
