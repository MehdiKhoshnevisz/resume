import cleanURL from "../utils/cleanURL";

type Props = {
  title: string;
  type?: string;
  url?: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

const Title = ({ title, type }: any) => (
  <h3 className="mk-general-item-title">
    {title}{" "}
    {type && (
      <span style={{ color: "#aaa", fontWeight: "normal", fontSize: "0.8em" }}>
        {type}
      </span>
    )}
  </h3>
);

const ProjectURL = ({ url }: any) => (
  <div>
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

export default function Projects({
  title,
  type,
  url,
  startDate,
  endDate,
  description,
}: Props) {
  return (
    <div>
      <Title title={title} type={type} />
      <Date startDate={startDate} endDate={endDate} />
      {description && <Description description={description} />}
      {url && <ProjectURL url={url} />}
    </div>
  );
}
