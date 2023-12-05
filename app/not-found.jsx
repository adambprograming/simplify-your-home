// Componenets
import BtnLink from "@/components/r-btn-link/btn-link.component";

export default function NotFound() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        WebkitTransform: "translate(-50%, -50%)",
      }}
    >
      <h2>Not Found</h2>
      <p style={{ marginBottom: 20 }}>Could not find requested content.</p>
      <BtnLink
        content="Return Home"
        itsScroll={false}
        href="/"
        fontSize="16px"
        fontFamily="var(--font-primary), sans-serif"
        borderRadius="20px"
        borderSize="1.5px"
        opacity={1}
      ></BtnLink>
    </div>
  );
}
