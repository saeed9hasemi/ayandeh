import { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

function NavigationHamburger() {
  const [active, setActive] = useState(false);

  const navs = [
    { id: 1, title: "آگهی ها", href: "/advs/all" },
    { id: 2, title: "درباره ما", href: "/about_us" },
    { id: 3, title: "تماس باما", href: "/contact_us" },
    { id: 4, title: "وبلاگ ها", href: "/blogs" },
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
      className="relative cursor-pointer block md:hidden"
      onClick={() => setActive((prev) => !prev)}
    >
      <IoMdMenu color="#427AE0" size={30} />
      {active && (
        <div className="absolute w-27 right-0 bg-white z-9999 rounded-lg shadow-lg p-1 text-sm">
          {navs.map((item) => {
            return (
              <Link
                key={item.id}
                to={item.href}
                className="block p-2.5 hover:bg-[#f5f5f5] rounded-lg"
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

export default NavigationHamburger;
