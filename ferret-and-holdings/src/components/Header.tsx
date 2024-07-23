import "../styles/Header.css";

import HamburgerSVG from "../assets/hamburger-md-svgrepo-com";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="header__logo raleway-regular">Ferret & Holdings</h1>
        <HamburgerSVG className="header__hamburger-menu"></HamburgerSVG>
        <Search></Search>
      </div>
    </>
  );
};

export default Header;
