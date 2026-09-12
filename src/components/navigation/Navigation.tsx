import { Link } from "react-router-dom";

function Navigation() {
  const navs = [
    { id: 1, title: "آگهی ها", href: "/advs/all" },
    { id: 2, title: "درباره ما", href: "/about_us" },
    { id: 3, title: "تماس باما", href: "/contact_us" },
    { id: 4, title: "وبلاگ ها", href: "/blogs" },
  ];

  return (
    <nav className="hidden md:flex items-center gap-5 lg:gap-12">
      {navs.map((item) => {
        return (
          <Link
            key={item.id}
            to={item.href}
            className="w-fit flex flex-col gap-2 items-start group"
          >
            <p>{item.title}</p>
            <div className="w-0 group-hover:w-[60%] h-1 bg-[#5456E4] transition-all duration-500"></div>
          </Link>
        );
      })}
    </nav>
  );
}

export default Navigation;
