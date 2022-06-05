type Props = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  details?: string[];
};

const Company = ({ title }: any) => (
  <h3 className="mk-general-item-title">{title}</h3>
);

const Position = ({ title, startDate, endDate }: any) => {
  return (
    <span className="mk-general-item-sub-title">
      {title} &nbsp; <span style={{ fontSize: "0.9rem" }}>|</span> &nbsp;{" "}
      {startDate} - {endDate || "Present"}
    </span>
  );
};

const Details = ({ details }: any) => {
  return (
    <ul
      style={{
        fontSize: "1rem",
        listStyle: "none",
        padding: 0,
        margin: 0,
        color: "#333",
      }}
    >
      {details.map((item: string, index: number) => (
        <li key={index} style={{ marginBottom: "0.25rem" }}>
          {details.length > 1 && "-"} {item}
        </li>
      ))}
    </ul>
  );
};

export default function Exprience({
  company,
  position,
  startDate,
  endDate,
  details,
}: Props) {
  return (
    <div>
      <Company title={company} />
      <Position title={position} startDate={startDate} endDate={endDate} />
      {details && <Details details={details} />}
    </div>
  );
}
