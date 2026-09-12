import { IoMdClose } from "react-icons/io";
import { useHomePage } from "../../contexts/HomePageContext";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import CustomInput from "../customInput/CustomInput";
import { useNavigate } from "react-router-dom";

function ModalSearch() {
  const { modalSearch, closeModalSearch } = useHomePage();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(0);
  const [subCategory, setSubCategory] = useState(0);

  const categories = [
    {
      id: 1,
      value: "منطقه 1",
      subCategories: [
        {
          id: 1,
          value: "ولنجک",
        },
        {
          id: 2,
          value: "زعفرانیه",
        },
        {
          id: 3,
          value: "محمودیه",
        },
        {
          id: 4,
          value: "الهیه",
        },
        {
          id: 5,
          value: "فرشته",
        },
        {
          id: 6,
          value: "قیطریه",
        },
        {
          id: 7,
          value: "نیاوران",
        },
        {
          id: 8,
          value: "فرمانیه",
        },
        {
          id: 9,
          value: "لواسانات",
        },
      ],
    },
    { id: 2, value: "دبی", subCategories: [] },
    { id: 3, value: "استانبول", subCategories: [] },
  ];

  const findSubCategories = (categoryId: number) => {
    const cat = categories.find((item) => {
      return item.id == categoryId;
    });
    return cat?.subCategories;
  };

  const inputs = [
    {
      id: 1,
      type: "text",
      placeHolder: "جست و جو",
      selectOptions: [],
      value: search,
      setter: setSearch,
    },
    {
      id: 3,
      type: "select",
      placeHolder: "منطقه",
      selectOptions: [
        { id: "*", value: "همه" },
        {
          id: 1,
          value: "منطقه 1",
          subCategories: [
            {
              id: 1,
              value: "ولنجک",
            },
            {
              id: 2,
              value: "زعفرانیه",
            },
            {
              id: 3,
              value: "محمودیه",
            },
            {
              id: 4,
              value: "الهیه",
            },
            {
              id: 5,
              value: "فرشته",
            },
            {
              id: 6,
              value: "قیطریه",
            },
            {
              id: 7,
              value: "نیاوران",
            },
            {
              id: 8,
              value: "فرمانیه",
            },
            {
              id: 9,
              value: "لواسانات",
            },
          ],
        },
        { id: 2, value: "دبی", subCategories: [] },
        { id: 3, value: "استانبول", subCategories: [] },
      ],
      value: category,
      setter: setCategory,
    },
    {
      id: 4,
      type: "select",
      placeHolder: "محله",
      selectOptions: category == 0 ? [] : findSubCategories(category),
      value: subCategory,
      setter: setSubCategory,
    },
  ];

  useEffect(() => {
    if (modalSearch == false) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalSearch]);

  if (modalSearch == false) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-9999 bg-black/30 backdrop-blur-xs p-5">
      <div className="w-full">
        <div className="w-full h-screen overflow-hidden flex justify-center px-4 pt-30">
          <div className="w-full sm:w-[90%] md:w-[60%] lg:w-[40%] h-fit p-4 rounded-lg bg-white flex flex-col gap-3">
            <h4 className="font-semibold flex items-center justify-between gap-2">
              <p> جست و جو آگهی</p>
              <button
                className="cursor-pointer"
                onClick={() => closeModalSearch()}
              >
                <IoMdClose size={20} />
              </button>
            </h4>
            {inputs.map((input) => {
              return (
                <CustomInput
                  key={input.id}
                  placeHolder={input.placeHolder}
                  selectOptions={input.selectOptions ?? []}
                  setter={input.setter}
                  value={input.value}
                  type={input.type}
                />
              );
            })}
            <div className="flex flex-row-reverse">
              <button
                className="rounded-lg px-4 py-2 text-sm text-white bg-[#5D5FEF] hover:bg-[#8B91FC] cursor-pointer transition-all duration-300"
                onClick={() => {
                  let payload: string[] = [];
                  if (search) {
                    payload = [...payload, `search=${search}`];
                  }
                  if (category) {
                    payload = [...payload, `category=${category}`];
                  }
                  if (subCategory) {
                    payload = [...payload, `sub_category=${subCategory}`];
                  }
                  navigate(`/advs/${payload.join("&")}`);
                  setSearch("");
                  setCategory(0);
                  setSubCategory(0);
                  closeModalSearch();
                }}
              >
                جست و جو
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ModalSearch;
