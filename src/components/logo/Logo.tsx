import LogoImage from "../../assets/logo.webp";

function Logo() {
  return (
    <img src={LogoImage} alt="logo" className="w-full h-full object-cover" />
  );
}

export default Logo;
