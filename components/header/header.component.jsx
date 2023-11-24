"use client";
// Styles
import "./header.styles.scss";
// Public & Assets
import Logo from "../../public/logo.svg";
// React/Next Functions
import Image from "next/image";
// Context

// Componenets
import MenuDropdown from "../r-menu-dropdown/menu-dropdown.component";

const Header = () => {
  const menuDropDown = [
    {
      "content": "Home",
      "itsScroll": false,
      "href": "/",
      "sublinksId": 0,
      "sublinks": []
    },
    {
      "content": "Shop",
      "itsScroll": false,
      "href": "/shop",
      "sublinksId": 0,
      "sublinks": []
    },
    {
      "content": "Categories",
      "itsScroll": false,
      "href": "",
      "sublinksId": 1,
      "sublinks": [
        {
          "content": "Kitchen",
          "itsScroll": false,
          "href": "/shop?cat=kitchen",
        },
        {
          "content": "Bathroom",
          "itsScroll": false,
          "href": "/shop?cat=bathroom",
        },
        {
          "content": "Livingroom",
          "itsScroll": false,
          "href": "/shop?cat=livingroom",
        }
      ]
    }
  ]

  const handleLogoClick = () => {
    window.location.href = '/'
  }
  return (
    <header className="article-header">
      <div className="container-left">
        <MenuDropdown links={menuDropDown} fontSize="24px" fontFamily="var(--font-primary), sans-serif" borderSize="1px" />
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