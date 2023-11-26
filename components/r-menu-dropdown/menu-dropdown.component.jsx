"use client";
// Styles
import "./menu-dropdown.styles.scss";
// React Functions
import { useState } from "react";

/*
INSTRUCTIONS 
  links         json with data
    content       text of button
    itsScroll     false(default, link to another page)/true(link to something on page)
    href          target of button onClick (if itsScroll===true, href must be id of target element)
    sublinksId    0 for link and 1/2/3 if link used to be for sublinks (first of it must have value of 1, second value of 2 and third value of 3)
    sublinks      list of sublinks with params same as link (content, itsScroll, href)
  fontSize      fontSize in px for mobile (it will be * by multiplier for desktop) (default set to 24px for mobile)
  fontFamily    fontFamily (could be like var(--font-primary), if fonts are set in variables) (default set to var(--font-primary))
  borderSize    size of border (default set to 1px)
*/

const MenuDropdown = ({
  links,
  borderSize = "0px",
  fontSize = "24px",
  fontFamily = "var(--font-primary)",
  paddingOfEachLinkBlock = "10px 10px 5px 10px",
}) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSubMenu1, setActiveSubMenu1] = useState(false);
  const [activeSubMenu2, setActiveSubMenu2] = useState(false);
  const [activeSubMenu3, setActiveSubMenu3] = useState(false);
  const handleMenuClick = () => {
    document
      .getElementsByClassName("menu-icon")
      .item(0)
      .classList.toggle("active");
    document
      .getElementsByClassName("line-1")
      .item(0)
      .classList.remove("no-animation");
    document
      .getElementsByClassName("line-2")
      .item(0)
      .classList.remove("no-animation");
    document
      .getElementsByClassName("line-3")
      .item(0)
      .classList.remove("no-animation");
    if (activeMenu === true) {
      handleDisactiveMenu();
    } else {
      setActiveMenu(true);
    }
  };
  const handleSubMenu = (index) => {
    if (index === 1) {
      if (activeMenu === false && activeSubMenu1 === false) {
        handleMenuClick();
      }
      setActiveSubMenu1(!activeSubMenu1);
      setActiveSubMenu2(false);
      setActiveSubMenu3(false);
    } else if (index === 2) {
      if (activeMenu === false && activeSubMenu2 === false) {
        handleMenuClick();
      }
      setActiveSubMenu2(!activeSubMenu2);
      setActiveSubMenu1(false);
      setActiveSubMenu3(false);
    } else if (index === 3) {
      if (activeMenu === false && activeSubMenu3 === false) {
        handleMenuClick();
      }
      setActiveSubMenu3(!activeSubMenu3);
      setActiveSubMenu1(false);
      setActiveSubMenu2(false);
    } else {
      console.error("Need more subMenus!");
    }
  };
  const handleDisactiveMenu = () => {
    setActiveMenu(false);
    setActiveSubMenu1(false);
    setActiveSubMenu2(false);
    setActiveSubMenu3(false);
  };
  return (
    <nav className="nav">
      <div
        className="menu-icon"
        onClick={() => {
          handleMenuClick();
        }}
      >
        <div className="line-1 no-animation"></div>
        <div className="line-2 no-animation"></div>
        <div className="line-3 no-animation"></div>
      </div>
      <ul className={`dropdown ${activeMenu === true ? "active" : ""}`}>
        {links.map((link, index) => (
          <li
            style={{
              border: `${borderSize} solid var(--black-10)`,
              padding: `${paddingOfEachLinkBlock}`,
            }}
            className={`dropdown-item ${
              (link.sublinksId === 1 && activeSubMenu1) === true ||
              (link.sublinksId === 2 && activeSubMenu2) === true ||
              (link.sublinksId === 3 && activeSubMenu3) === true
                ? "active"
                : ""
            }`}
            key={index}
            onClick={() => {
              link.sublinksId !== 0
                ? handleSubMenu(link.sublinksId)
                : link.itsScroll
                ? document
                    .getElementById(`#${link.href}`)
                    .scrollIntoView({ behavior: "smooth" }) &&
                  handleDisactiveMenu()
                : (window.location.href = `${link.href}`);
            }}
          >
            <span
              className="dropdown-item-text"
              style={{
                fontFamily: fontFamily,
                fontSize: `calc(${fontSize} * var(--multiplier))`,
              }}
            >
              {link.content}
            </span>
            {link.sublinksId > 0 && (
              <ul
                style={{
                  top: `calc(5px + ${index} * (${fontSize} * var(--multiplier) + ${
                    paddingOfEachLinkBlock.split(" ")[0]
                  } + ${
                    paddingOfEachLinkBlock.split(" ")[2]
                  } + ${borderSize} * 2))`,
                }}
                className={`dropdown${link.sublinksId} ${
                  (link.sublinksId === 1 && activeSubMenu1) === true ||
                  (link.sublinksId === 2 && activeSubMenu2) === true ||
                  (link.sublinksId === 3 && activeSubMenu3) === true
                    ? "active"
                    : ""
                }`}
              >
                {link.sublinks.map((sublink, index) => (
                  <li
                    style={{
                      border: `${borderSize} solid var(--black-10)`,
                      padding: `${paddingOfEachLinkBlock}`,
                    }}
                    className="dropdown-item-sublink"
                    key={index}
                    onClick={() => {
                      link.itsScroll
                        ? document
                            .getElementById(`#${link.href}`)
                            .scrollIntoView({ behavior: "smooth" }) &&
                          handleDisactiveMenu()
                        : (window.location.href = `${link.href}`);
                    }}
                  >
                    <span
                      className="dropdown-item-sublink-text"
                      style={{
                        fontFamily: fontFamily,
                        fontSize: `calc(${fontSize} * var(--multiplier))`,
                      }}
                    >
                      {sublink.content}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuDropdown;