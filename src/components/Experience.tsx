import { FC } from "react";

type Props = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

const Company = ({ title }: any) => (
  <h3 className="mb-0 text-primary text-2xl font-bold mr-4">{title}</h3>
);

const Position = ({ title }: any) => (
  <span className="mb-0 text-primary text-2xl font-extralight text-opacity-50">
    {title}
  </span>
);

const Date = ({ startDate, endDate }: any) => (
  <span className="text-primary block text-sm mb-1">
    {startDate} - {endDate || "Present"}
  </span>
);

const Description = ({ description }: any) => (
  <p className="text-primary text-base font-light leading-loose m-0 p-0">
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
  <div className="mb-8" style={{ width: "100%" }}>
    <div className="flex flex-wrap mb-2">
      <Company title={company} />
      <Position title={position} />
    </div>
    <Date startDate={startDate} endDate={endDate} />
    {description && <Description description={description} />}
  </div>
);

export default Experience;
