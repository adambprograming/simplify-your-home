"use client";
// Styles
import "./menu.styles.scss";
// React Functions
import { useState, useEffect } from "react";

/*
INSTRUCTIONS 
  links         json with data
    content       text of button
    itsScroll     false(default, link to another page)/true(link to something on page)
    href          target of button onClick (if itsScroll===true, href must be id of target element)
    sublinksId    0 for link and 1/2/3 if link used to be for sublinks (first of it must have value of 1, second value of 2 and third value of 3)
    sublinks      list of sublinks with params same as link (content, itsScroll, href)
  menuInLine    define if menu can be inline (if there is eneugh space) (default true)
  fontSize      fontSize in px for mobile (it will be * by multiplier for desktop) (default set to 24px for mobile)
  fontFamily    fontFamily (could be like var(--font-primary), if fonts are set in variables) (default set to var(--font-primary))
  borderSize    size of border (default set to 1px)
*/

const Menu = ({
  links,
  menuInLine = true,
  borderSize = "0px",
  fontSize = "24px",
  fontFamily = "var(--font-primary)",
  paddingOfEachLinkBlock = "10px 10px 5px 10px",
}) => {
  // if menu is dropdown, this state have value if its active or not
  const [activeMenu, setActiveMenu] = useState(false);
  // submenus active or not
  const [activeSubMenu1, setActiveSubMenu1] = useState(false);
  const [activeSubMenu2, setActiveSubMenu2] = useState(false);
  const [activeSubMenu3, setActiveSubMenu3] = useState(false);
  // width of container for left side of header, where should be only menu
  const [widthOfContainer, setWidthOfContainer] = useState(0);
  // width of all links in row
  const [widthOfLinks, setWidthOfLinks] = useState(0);
  // menu will be dropdown (false) or inline (true)
  const [canBeInline, setCanBeInline] = useState(false);
  // number of links
  const numOfLinks = links.length;
  // update state widthOfContainer
  const updateWidthOfContainer = () => {
    const newWidth = document.querySelector(
      "#article-header .container-left"
    ).scrollWidth;
    setWidthOfContainer(newWidth);
  };
  // update state widthOfLinks
  const updateWidthOfLinks = () => {
    try {
      // find all inline items
      const listOfLinks = document.querySelectorAll(
        "#nav-inline .menu-inline .inline-item"
      );
      const listOfWidths = [];
      for (let i = 0; i < listOfLinks.length; i++) {
        const width = listOfLinks[i].scrollWidth;
        listOfWidths.push(width);
      }
      /* if listOfWidths doesnt have any values, its bcs of menu isn't inline, 
      but dropdown, so its needs to do it again but insted of find all inline items, 
      it will find all dropdown items */
      if (listOfWidths[0] == undefined) {
        const listOfLinks = document.querySelectorAll(
          "#nav-dropdown .menu-dropdown .dropdown-item"
        );
        for (let i = 0; i < listOfLinks.length; i++) {
          const width = listOfLinks[i].scrollWidth;
          listOfWidths.push(width);
        }
      }
      // choose max value
      const newWidth = Math.max(...listOfWidths);
      setWidthOfLinks(newWidth * numOfLinks);
    } catch (error) {}
  };
  // on initial load make listeners for resize that will call both func; updateWidthOfContainer & updateWidthOfLinks
  useEffect(() => {
    window.addEventListener("resize", updateWidthOfContainer);
    updateWidthOfContainer();
    window.addEventListener("resize", updateWidthOfLinks);
    updateWidthOfLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // if widthOfContainer or widthOfLinks change, setCanBeInline to equal value
  useEffect(() => {
    if (widthOfContainer > widthOfLinks && menuInLine) {
      setCanBeInline(true);
    } else {
      setCanBeInline(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widthOfContainer, widthOfLinks]);
  /* animation of menu icon & if activeMenu state is active, set state of menu
  and all submenus to false (func handleDisactiveMenu),
  if activeMenu state is false then set it to true */
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
  // handleSubMenu click
  const handleSubMenu = (index) => {
    if (index === 1) {
      // if both menu and submenu isn't active and user click on submenu, active menu will be actived too
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
      /* if this happen, create more submenu(state, add it to handleDisactiveMenu,
      add it to handleSubMenu, add it to link and sublik classname property)*/
      console.error("Need more subMenus!");
    }
  };
  // set all menu & submenu states to false
  const handleDisactiveMenu = () => {
    setActiveMenu(false);
    setActiveSubMenu1(false);
    setActiveSubMenu2(false);
    setActiveSubMenu3(false);
  };
  /* 
  canBeInline make everything suitable for both inline & dropdown options
  all submenu (ul) are generated inside of item (li) after text
  there are three types of onClick interactions (target another page, target id at actual page, dropdown submenu)
  */

  return (
    <nav id={`${canBeInline ? "nav-inline" : "nav-dropdown"}`}>
      <div
        className="menu-icon"
        style={{ display: `${canBeInline ? "none" : "block"}` }}
        onClick={() => {
          handleMenuClick();
        }}
      >
        <div className="line-1 no-animation"></div>
        <div className="line-2 no-animation"></div>
        <div className="line-3 no-animation"></div>
      </div>
      <ul
        className={`${
          canBeInline
            ? "menu-inline"
            : `menu-dropdown ${activeMenu === true ? "active" : ""}`
        }`}
      >
        {links.map((link, index) => (
          <li
            style={{
              padding: `${paddingOfEachLinkBlock}`,
              ...(canBeInline
                ? {
                    borderBottom: `${borderSize} solid var(--black-10)`,
                  }
                : {
                    border: `${borderSize} solid var(--black-10)`,
                  }),
            }}
            className={`${canBeInline ? "inline-item" : "dropdown-item"} ${
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
              className={`${
                canBeInline ? "inline-item-text" : "dropdown-item-text"
              }`}
              style={{
                fontFamily: fontFamily,
                fontSize: `calc(${fontSize} * var(--multiplier))`,
              }}
            >
              {link.content}
            </span>
            {link.sublinksId > 0 && (
              <ul
                style={
                  canBeInline
                    ? {}
                    : {
                        top: `calc(5px + ${index} * (${fontSize} * var(--multiplier) + ${
                          paddingOfEachLinkBlock.split(" ")[0]
                        } + ${
                          paddingOfEachLinkBlock.split(" ")[2]
                        } + ${borderSize} * 2))`,
                      }
                }
                className={`${
                  canBeInline ? "submenu-inline" : "submenu-dropdown"
                }${link.sublinksId} ${
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
                      padding: `${paddingOfEachLinkBlock}`,
                      ...(canBeInline
                        ? {
                            borderBottom: `${borderSize} solid var(--black-10)`,
                          }
                        : {
                            border: `${borderSize} solid var(--black-10)`,
                          }),
                    }}
                    className={`${
                      canBeInline
                        ? "inline-item-sublink"
                        : "dropdown-item-sublink"
                    }`}
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
                      className={`${
                        canBeInline
                          ? "inline-item-sublink-text"
                          : "dropdown-item-sublink-text"
                      }`}
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

export default Menu;
