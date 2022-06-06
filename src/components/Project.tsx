import cleanURL from "../utils/cleanURL";

type Props = {
  title: string;
  url?: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

const Title = ({ title, url }: any) => (
  <h3 className="mk-general-item-title">
    <span style={{ display: "block", color: "#333" }}>{title}</span>
    {url && (
      <a
        href={url}
        style={{
          textDecoration: "none",
          fontSize: "0.8em",
          color: "#aaa",
          fontWeight: "500",
        }}
      >
        {cleanURL(url)}
      </a>
    )}
  </h3>
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
