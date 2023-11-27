"use client";
// Styles
import "./header.styles.scss";
// Public & Assets
import Logo from "../../public/logo.svg";
// React/Next Functions
import Image from "next/image";
// Context

// Componenets
import Menu from "../r-menu/menu.component";

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
    },
    {
      "content": 'Contact',
      "itsScroll": false,
      "href": "",
      "sublinksId": 2,
      "sublinks": [
        {
          "content": "Instagram",
          "itsScroll": false,
          "href": "/shop?cat=kitchen",
        },
        {
          "content": "Facebook",
          "itsScroll": false,
          "href": "/shop?cat=bathroom",
        },
        {
          "content": "Twitter",
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
    <header id="article-header">
      <div className="container-left">
        <Menu links={menuDropDown} menuInLine={true} fontSize="24px" fontFamily="var(--font-primary), sans-serif" borderSize="1px" />
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