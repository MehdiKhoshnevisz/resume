import { FC } from "react";

type Props = {
  firstName: string;
  lastName?: string;
  jobTitle: string;
  about: string;
};

const Biography: FC<Props> = ({ firstName, lastName, jobTitle, about }) => (
  <header>
    <h1
      style={{
        fontSize: "3em",
        fontWeight: "900",
        marginTop: 0,
        marginBottom: ".1em",
        lineHeight: 1,
        color: "#333",
        transform: "translateX(-2px)",
      }}
    >
      {firstName} <br /> {lastName || ""}
    </h1>
    <span style={{ display: "block", fontSize: "1.3em", marginBottom: ".1em" }}>
      {jobTitle}
    </span>
    <p
      style={{
        fontSize: "1em",
        lineHeight: 1.8,
        color: "#777",
        margin: 0,
      }}
    >
      {about}
    </p>
  </header>
);

export default Biography;
