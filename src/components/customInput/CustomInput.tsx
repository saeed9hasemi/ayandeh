import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ICustomInput {
  type: "text" | "select" | string;
  placeHolder: string;
  selectOptions: { id: number | string; value: string }[];
  value: any;
  setter: any;
}

function CustomInput({
  placeHolder,
  selectOptions,
  setter,
  type,
  value,
}: ICustomInput) {
  const [active, setActive] = useState(false);
  const selectedValueName = selectOptions.find((item) => item.id == value);

  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref && !ref?.current?.contains(e.target as Node)) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div ref={ref}>
      {type == "text" ? (
        <input
          value={value}
          onChange={(e) => {
            setter(e.target.value);
          }}
          type={type}
          placeholder={placeHolder}
          className="w-full bg-white rounded-lg border border-[#BFBFC9] hover:border-[#8B91FC] p-2 focus:outline-0 placeholder:text-[#BFBFC9]"
        />
      ) : (
        <div
          className="relative"
          onClick={() => {
            setActive((current) => !current);
          }}
        >
          <button
            className={`w-full p-2 text-right bg-white rounded-lg border border-[#BFBFC9] hover:border-[#8B91FC] cursor-pointer flex items-center justify-between ${value ? "text-black" : "text-[#BFBFC9]"}`}
          >
            {value ? selectedValueName?.value : placeHolder}
            <IoIosArrowDown />
          </button>

          {active && (
            <div className="absolute top-full left-0 mt-2 w-full rounded-lg bg-white max-h-60 overflow-y-scroll shadow-lg p-1 z-50">
              {selectOptions.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="cursor-pointer p-2 text-sm rounded w-full hover:bg-[#F8F9F9]"
                    onClick={() => setter(item.id)}
                  >
                    {item.value}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CustomInput;
