import cleanURL from "../utils/cleanURL";

type Props = {
  fullName: string;
  title: string;
  website: string;
  description: string;
};

export default function Biography({
  fullName,
  title,
  website,
  description,
}: Props) {
  return (
    <header>
      <h1
        style={{
          fontSize: "2rem",
          marginTop: 0,
          marginBottom: ".8rem",
          lineHeight: 1,
          color: "#333",
        }}
      >
        {fullName}
      </h1>
      <span
        style={{ display: "block", fontSize: "1.3rem", marginBottom: "1rem" }}
      >
        {title} &nbsp; <span style={{ fontSize: "1.1rem" }}>|</span> &nbsp;{" "}
        <a
          href="https://imehdi.dev"
          style={{ color: "#333", textDecoration: "none" }}
        >
          {cleanURL(website)}
        </a>
      </span>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.8,
          color: "#a1a1a1",
          margin: 0,
        }}
      >
        {description}
      </p>
    </header>
  );
}
