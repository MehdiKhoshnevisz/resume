import { FC } from "react";

const Footer: FC = () => (
  <footer
    style={{
      textAlign: "center",
      padding: "2em 0 1em 0",
    }}
  >
    <span style={{ color: "#333", fontSize: "0.9em", fontWeight: 300 }}>
      Made With{" "}
      <span style={{ verticalAlign: "middle" }} title="keyboard">
        ⌨️
      </span>{" "}
      by{" "}
      <a
        href="https://imehdi.dev"
        style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
      >
        Mehdi
      </a>
    </span>
  </footer>
);

export default Footer;
