import type { ComponentProps } from "react";

type TButton = ComponentProps<"button"> & IButton;

interface IButton {
  children: React.ReactNode;
  color: "blue" | "black";
  classNameText?: string;
}

function Button({ children, color, classNameText, ...rest }: TButton) {
  const colorApply = (value: string) => {
    if (value == "blue") {
      return "bg-[#5D5FEF] hover:bg-[#5456E4]";
    } else if (value == "black") {
      return "bg-[black]";
    }
  };

  return (
    <button
      className={`${colorApply(color)} ${classNameText ?? ""} text-white px-4 py-2 rounded cursor-pointer transition-all duration-300`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
