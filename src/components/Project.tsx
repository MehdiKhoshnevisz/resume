type Props = {
  title: string;
  url?: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

const Title = ({ title, url }: any) => (
  <h3 className="mk-general-item-title">
    <a href={url || "#"} style={{ color: "#333", textDecoration: "none" }}>
      {title}
    </a>
    &nbsp;
    <span style={{ fontSize: "0.8rem", color: "#aaa", fontWeight: "500" }}>
      github
    </span>
  </h3>
);

const Date = ({ startDate, endDate }: any) => {
  return (
    <span
      style={{
        display: "block",
        fontSize: "1rem",
        color: "#777",
        marginBottom: ".25rem",
      }}
    >
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
        fontSize: "1rem",
      }}
    >
      {description}
    </p>
  );
};

export default function Projects({
  title,
  url,
  startDate,
  endDate,
  description,
}: Props) {
  return (
    <div>
      <Title title={title} url={url} />
      <Date startDate={startDate} endDate={endDate} />
      {description && <Description description={description} />}
    </div>
  );
}
