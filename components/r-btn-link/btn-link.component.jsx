"use client";
// Styles
import "./btn-link.styles.scss";

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
*/

const Btn = ({
  content,
  itsScroll = false,
  href,
  fontSize,
  fontFamily,
  borderRadius = "0px",
  borderSize = "1px",
  opacity = 1,
}) => {
  return (
    <button
      className="r-btn"
      style={{
        padding: `calc(${fontSize} * 0.3 + 2.5px) calc(${fontSize} + 5px)`,
        borderRadius: `${borderRadius}`,
        border: `${borderSize} solid var(--black-100)`,
      }}
      onClick={() => {
        itsScroll
          ? document
              .getElementById(`#${href}`)
              .scrollIntoView({ behavior: "smooth" })
          : (window.location.href = `${href}`);
      }}
    >
      <span
        className="r-btn-bg"
        style={{ opacity: opacity, borderRadius: `calc(${borderRadius} - 0.5 * ${borderRadius})` }}
      ></span>
      <span
        className="r-btn-text"
        style={{
          fontFamily: fontFamily,
          fontSize: `calc(${fontSize} * var(--multiplier))`,
        }}
      >
        {content}
      </span>
    </button>
  );
};

export default Btn;
