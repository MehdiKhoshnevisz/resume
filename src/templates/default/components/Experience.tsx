import { FC } from "react";

type Props = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

const Company = ({ title }: any) => (
  <h3
    className="mk-general-item-title mk-experience-item-title"
    style={{ marginRight: "0.75em" }}
  >
    {title}{" "}
  </h3>
);

const Position = ({ title }: any) => (
  <span
    className="mk-general-item-title mk-experience-item-title"
    style={{ color: "#989898" }}
  >
    {title}
  </span>
);

const Date = ({ startDate, endDate }: any) => (
  <span className="mk-general-item-sub-title">
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
      lineHeight: 2,
      color: "#4D4D4D",
    }}
  >
    {description}
  </p>
);

const Experience: FC<Props> = ({
  company,
  position,
  startDate,
  endDate,
  description,
}) => (
  <div style={{ width: "100%" }}>
    <div style={{ display: "flex", marginBottom: "0.2em" }}>
      <Company title={company} />
      <Position title={position} />
    </div>
    <Date startDate={startDate} endDate={endDate} />
    {description && <Description description={description} />}
  </div>
);

export default Experience;
