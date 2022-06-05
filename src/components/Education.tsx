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
    <span className="mk-general-item-sub-title">
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
