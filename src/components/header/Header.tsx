import { Link } from "react-router-dom";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import HeaderToolBox from "../headerToolBox/HeaderToolBox";
import NavigationHamburger from "../navigation/NavigationHamburger";

function Header() {
  return (
    <div className="w-full">
      <Container>
        <div className="h-4"></div>
        <header className="h-25 flex items-center justify-between border-b border-b-[#C2C2C2]">
          <NavigationHamburger />
          <div className="right">
            <div className="flex items-center gap-2">
              <Link to={"/"} className="w-50">
                <Logo />
              </Link>
              <Navigation />
            </div>
          </div>
          <div className="left">
            <HeaderToolBox />
          </div>
        </header>
      </Container>
    </div>
  );
}

export default Header;
