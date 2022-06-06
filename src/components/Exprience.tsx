import cleanURL from "../utils/cleanURL";

type Props = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  website?: string;
  description?: string;
};

const Company = ({ title, website }: any) => (
  <h3 className="mk-general-item-title">
    {title} &nbsp;
    {website && (
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
    )}
  </h3>
);

const Position = ({ title, startDate, endDate }: any) => {
  return (
    <span className="mk-general-item-sub-title">
      {title} &nbsp; <span style={{ fontSize: "0.9em" }}>|</span> &nbsp;{" "}
      {startDate} - {endDate || "Present"}
    </span>
  );
};

const Description = ({ description }: any) => {
  return (
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
};

export default function Exprience({
  company,
  position,
  startDate,
  endDate,
  website,
  description,
}: Props) {
  return (
    <div>
      <Company title={company} website={website} />
      <Position title={position} startDate={startDate} endDate={endDate} />
      {description && <Description description={description} />}
    </div>
  );
}
