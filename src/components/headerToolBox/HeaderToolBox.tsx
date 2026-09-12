import { FaPhoneAlt } from "react-icons/fa";
import Button from "../button/Button";
import SearchIconBox from "../searchIconBox/SearchIconBox";
import { useNavigate } from "react-router-dom";
import { useHomePage } from "../../contexts/HomePageContext";

function HeaderToolBox() {
  const navigate = useNavigate();

  const { openModalSearch } = useHomePage();

  return (
    <div className="flex items-center gap-3">
      <div className="hidden sm:flex flex-col text-sm lg:text-base">
        <div className="flex items-center gap-1">
          <p>02126808901</p>
          <FaPhoneAlt />
        </div>
        <p>باما در تماس باشید</p>
      </div>
      <div onClick={() => openModalSearch()} className="cursor-pointer">
        <SearchIconBox />
      </div>
      <Button
        color="blue"
        classNameText="hidden lg:block"
        onClick={() => {
          navigate("/advice");
        }}
      >
        درخواست مشاوره
      </Button>
    </div>
  );
}

export default HeaderToolBox;
