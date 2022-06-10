import { FC } from "react";
import cleanURL from "../utils/cleanURL";

type Props = {
  company: string;
  type?: string;
  position: string;
  startDate: string;
  endDate?: string;
  website?: string;
  description?: string;
};

const Company = ({ title, type }: any) => (
  <h3 className="mk-general-item-title">
    {title}{" "}
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

const Position = ({ title, startDate, endDate }: any) => (
  <span className="mk-general-item-sub-title">
    {title} &nbsp; <span style={{ fontSize: "0.9em" }}>|</span> &nbsp;{" "}
    {startDate} - {endDate || "Present"}
  </span>
);

const Description = ({ description }: any) => (
  <p
    style={{
      fontSize: "1em",
      listStyle: "none",
      padding: 0,
      margin: 0,
      color: "#333",
    }}
  >
    {description}
  </p>
);

const Exprience: FC<Props> = ({
  company,
  type,
  position,
  startDate,
  endDate,
  website,
  description,
}) => (
  <div>
    <Company title={company} type={type} />
    <Position title={position} startDate={startDate} endDate={endDate} />
    {description && <Description description={description} />}
    {website && <Website website={website} />}
  </div>
);

export default Exprience;
