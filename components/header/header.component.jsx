"use client";
// Styles
import "./header.styles.scss";
// Public & Assets
import Logo from "../../public/logo.svg";
// React/Next Functions
import Image from "next/image";
import Link from "next/link"
// Context

// Componenets
import Menu from "../r-menu/menu.component";

const Header = () => {
  const menu = [
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

  return (
    <header id="article-header">
      <div className="container-left">
        <Menu links={menu} menuInLine={true} fontSize="24px" fontFamily="var(--font-primary), sans-serif" borderSize="1px" />
      </div>
      <div className="container-logo">
        <Link href='/' ><Image className="logo" src={Logo} alt="logo" /></Link>
      </div>
      <div className="container-right">
      </div>
    </header>
  );
};

export default Header;