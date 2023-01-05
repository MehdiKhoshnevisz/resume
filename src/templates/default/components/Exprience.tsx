import { FC } from "react";

import Skills from "./Skills";

import cleanURL from "@/utils/cleanURL";

type Props = {
  company: string;
  type?: string;
  icon?: string;
  position: string;
  startDate: string;
  endDate?: string;
  website?: string;
  description?: string;
  skills?: string[];
};

const Company = ({ title, type, icon }: any) => (
  <h3 className="mk-general-item-title">
    {icon && (
      <span className="mk-general-item-icon">
        <img src={icon} alt={title} />
      </span>
    )}
    {title}{" "}
    {type && (
      <span style={{ color: "#999", fontWeight: "normal", fontSize: "0.8em" }}>
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
        display: "inline-block",
        textDecoration: "none",
        fontSize: "0.8em",
        color: "#aaa",
        fontWeight: "500",
        marginBottom: ".5em",
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
  icon,
  position,
  startDate,
  endDate,
  website,
  description,
  skills,
}) => (
  <div style={{ width: "100%" }}>
    <Company title={company} type={type} icon={icon}/>
    <Position title={position} startDate={startDate} endDate={endDate} />
    {description && <Description description={description} />}
    {website && <Website website={website} />}
    {skills && <Skills list={skills} size="sm" />}
  </div>
);

export default Exprience;
