import { Link } from "react-router-dom";
import DadeKavLogo from "../../assets/dadeKavWebLogo.webp";

function BottomFooter() {
  return (
    <div className="w-full bg-[#D9D9D9]">
      <div className="w-full py-8 px-4 md:px-6 lg:px-40  flex flex-col md:flex-row justify-between gap-4 items-center border-b-2 border-b-white">
        <Link
          to={"https://dadekavweb.ir/"}
          target="_blank"
          className="right flex items-center gap-2"
        >
          <img src={DadeKavLogo} alt="alt" className="size-8 " />
          <p className="text-sm">
            طراحی این وبسایت توسط شرکت داده کاو وب انجام شده است.
          </p>
        </Link>
        <div className="left flex flex-col md:flex-row items-center gap-4 text-sm">
          <p>Mona Fallahi: 0912-3659-586</p>
          <p>
            <span className="text-[#737373]">User Interface Design (UI) :</span>{" "}
            Romina Bagheri 0991-8006-126{" "}
          </p>
        </div>
      </div>
      <div className="w-full p-4 flex justify-center text-sm!">
        این سایت متعلق به سایت آینده میباشد و تمام حقوق آن محفوظ است.
      </div>
    </div>
  );
}

export default BottomFooter;
