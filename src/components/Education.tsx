type Props = {
  title: string;
  field: string;
  startDate: string;
  endDate?: string;
};

const Title = ({ title }: any) => (
  <h3 className="mk-general-item-title">{title}</h3>
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
    <div>
      <Title title={title} />
      <Field field={field} startDate={startDate} endDate={endDate} />
    </div>
  );
}
