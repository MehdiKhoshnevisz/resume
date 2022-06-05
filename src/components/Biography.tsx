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
          fontSize: "2em",
          fontWeight: "900",
          marginTop: 0,
          marginBottom: ".8em",
          lineHeight: 1,
          color: "#333",
        }}
      >
        {fullName}
      </h1>
      <span
        style={{ display: "block", fontSize: "1.3em", marginBottom: "1em" }}
      >
        {title} &nbsp; <span style={{ fontSize: "1.1em" }}>|</span> &nbsp;{" "}
        <a
          href="https://imehdi.dev"
          style={{ color: "#333", textDecoration: "none" }}
        >
          {cleanURL(website)}
        </a>
      </span>
      <p
        style={{
          fontSize: "1em",
          lineHeight: 1.8,
          color: "#777",
          margin: 0,
        }}
      >
        {description}
      </p>
    </header>
  );
}
