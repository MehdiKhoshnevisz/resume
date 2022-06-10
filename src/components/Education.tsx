import { FC } from "react";

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

const Education: FC<Props> = ({ title, field, startDate, endDate }) => (
  <div>
    <Title title={title} />
    <Field field={field} startDate={startDate} endDate={endDate} />
  </div>
);

export default Education;
