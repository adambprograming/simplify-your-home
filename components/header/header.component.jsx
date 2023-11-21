"use client";
// Styles
import "./header.styles.scss";
// Public & Assets
import Logo from "../../public/logo.svg";
// React/Next Functions
import Image from "next/image";
// Context

// Componenets
import MenuDropdown from "../menu-dropdown/menu-dropdown.component";

const Header = () => {
  const handleLogoClick = () => {
    window.location.href = '/'
  }
  return (
    <header className="article-header">
      <div className="container-left">
        <MenuDropdown></MenuDropdown>
      </div>
      <div className="container-logo">
        <Image className="logo" src={Logo} alt="logo" onClick={handleLogoClick} />
      </div>
      <div className="container-right">
      </div>
    </header>
  );
};

export default Header;