type Props = {
  title: string;
  field: string;
  startDate: string;
  endDate?: string;
};

const Title = ({ title }: any) => (
  <h3 style={{ fontSize: "1rem", color: "#333", marginBottom: ".25rem" }}>
    {title}
  </h3>
);

const Field = ({ field, startDate, endDate }: any) => {
  return (
    <span
      style={{
        display: "block",
        fontSize: "1rem",
        color: "#777",
        marginBottom: ".25rem",
      }}
    >
      {field} <br />
      {startDate} - {endDate || "Present"}
    </span>
  );
};

export default function Education({ title, field, startDate, endDate }: Props) {
  return (
    <>
      <Title title={title} />
      <Field field={field} startDate={startDate} endDate={endDate} />
    </>
  );
}
