import { FC } from "react";
import cleanURL from "../utils/cleanURL";

type Props = {
  name: string;
  type?: string;
  website?: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

const Name = ({ name, type }: any) => (
  <h3 className="mk-general-item-title">
    {name}{" "}
    {type && (
      <span style={{ color: "#aaa", fontWeight: "normal", fontSize: "0.8em" }}>
        {type}
      </span>
    )}
  </h3>
);

const Website = ({ website }: any) => (
  <div>
    <a
      href={website}
      style={{
        textDecoration: "none",
        fontSize: "0.8em",
        color: "#aaa",
        fontWeight: "500",
      }}
    >
      {cleanURL(website)}
    </a>
  </div>
);

const Date = ({ startDate, endDate }: any) => {
  return (
    <span className="mk-general-item-sub-title">
      {startDate} - {endDate || "Present"}
    </span>
  );
};

const Description = ({ description }: any) => {
  return (
    <p
      style={{
        padding: 0,
        margin: 0,
        color: "#333",
        fontSize: "1em",
      }}
    >
      {description}
    </p>
  );
};

const Project: FC<Props> = ({
  name,
  type,
  website,
  startDate,
  endDate,
  description,
}) => (
  <div>
    <Name name={name} type={type} />
    <Date startDate={startDate} endDate={endDate} />
    {description && <Description description={description} />}
    {website && <Website website={website} />}
  </div>
);

export default Project;
