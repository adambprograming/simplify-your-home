"use client";
// Styles
import "./btn-link.styles.scss";
// React Functions
import Link from "next/link";

/*
INSTRUCTIONS 
  content       text of button
  itsScroll     false(default, link to another page)/true(link to something on page)
  href          target of button onClick (if itsScroll===true, href must be id of target element)
  fontSize      fontSize in px (* multiplier)
  fontFamily    fontFamily (could be like var(--font-primary), if fonts are set in variables)
  borderRadius  borderRadius (default set to 0px)
  borderSize    size of border (default set to 1px)
  opacity       opacity of button background (default set to 1.0)
  paddingOfLink padding will be aplied if fontSize is not defined
*/

const BtnLink = ({
  content,
  itsScroll = false,
  href,
  fontSize,
  fontFamily,
  borderRadius = "0px",
  borderSize = "1px",
  opacity = 1,
  paddingOfLink = "10px 20px 5px 20px",
}) => {
  return (
    <button
      className="btn-link"
      style={{
        borderRadius: `${borderRadius}`,
        border: `${borderSize} solid var(--black-100)`,
        ...(typeof fontSize === 'undefined' ? {padding: paddingOfLink,} : {padding: `calc(${fontSize} * 0.3 + 2.5px) calc(${fontSize} + 5px)`,}),
      }}
      onClick={() => {
        itsScroll &&
          document
            .getElementById(`${href}`)
            .scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span
        className="btn-link-bg"
        style={{
          opacity: opacity,
        }}
      ></span>
      {itsScroll === false && <Link className="btn-link-link" href={href}></Link>}
      <h4
        className="btn-link-text"
        style={{
          ...(typeof fontSize !== 'undefined' && {fontSize: `calc(${fontSize} * var(--multiplier))`,}),
          ...(typeof fontFamily !== 'undefined' && {fontFamily: fontFamily,}),
        }}
      >
        {content}
      </h4>
    </button>
  );
};

export default BtnLink;
