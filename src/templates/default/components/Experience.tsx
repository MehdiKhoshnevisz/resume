import { FC } from "react";

type Props = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

const Company = ({ title }: any) => (
  <h3 className="mk-general-item-title">
    {title}{" "}
  </h3>
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

const Experience: FC<Props> = ({
  company,
  position,
  startDate,
  endDate,
  description,
}) => (
  <div style={{ width: "100%" }}>
    <Company title={company} />
    <Position title={position} startDate={startDate} endDate={endDate} />
    {description && <Description description={description} />}
  </div>
);

export default Experience;
