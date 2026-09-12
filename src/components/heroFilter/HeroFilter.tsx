import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeroFilter() {
  const [active, setActive] = useState(false);

  const panelItems = [
    { id: 1, title: "فروش", href: "/adv_category/sale", activeName: "sale" },
    {
      id: 2,
      title: "رهن و اجاره",
      href: "/adv_category/rent",
      activeName: "rent",
    },
    {
      id: 3,
      title: "مشارکت",
      href: "/adv_category/participation",
      activeName: "participation",
    },
    {
      id: 4,
      title: "پیش فروش",
      href: "/adv_category/pre_sell",
      activeName: "pre_sell",
    },
    {
      id: 5,
      title: "معاوضه",
      href: "/adv_category/exchange",
      activeName: "exchange",
    },
    { id: 6, title: "ویلا", href: "/adv_category/villa", activeName: "villa" },
    {
      id: 7,
      title: "محله ها",
      href: "/adv_category/places",
      activeName: "places",
    },
    {
      id: 8,
      title: "زیر قیمت",
      href: "/adv_category/discounts",
      activeName: "discounts",
    },
  ];
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
    <div
      ref={ref}
      className="relative size-13 bg-[#5D5FEF] flex items-center justify-center rounded-full shadow cursor-pointer hover:bg-[#5456E4]"
      onClick={() => setActive((prev) => !prev)}
    >
      <FaFilter color="white" size={20} />
      {active && (
        <div className="absolute w-27 right-0 bg-white rounded shadow">
          {panelItems.map((item) => {
            return (
              <Link
                key={item.id}
                to={item.href}
                className="block p-2.5 hover:bg-[#f5f5f5]"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HeroFilter;
