import { FC } from "react";

import Skills from "./Skills";

const urlIcon = require("../styles/url.png");

type Props = {
  name: string;
  website?: string;
  startDate: string;
  endDate?: string;
  description?: string;
  skills?: string[];
};

const Name = ({ name, website }: any) => (
  <h3 className="text-slate-900 text-3xl font-bold mb-2">
    {name}
    {website && (
      <a href={website} target="_blank">
        <img
          src={urlIcon}
          width={16}
          className="inline-block align-middle ml-3"
        />
      </a>
    )}
  </h3>
);

const Date = ({ startDate, endDate }: any) => {
  return (
    <span className="text-slate-500 block text-base mb-1">
      {startDate} - {endDate || "Present"}
    </span>
  );
};

const Description = ({ description }: any) => {
  return (
    <p className="text-slate-800 text-lg font-light leading-relaxed m-0 p-0 mb-3">
      {description}
    </p>
  );
};

const Project: FC<Props> = ({
  name,
  website,
  startDate,
  endDate,
  description,
  skills,
}) => (
  <div>
    <Name name={name} website={website} />
    <Date startDate={startDate} endDate={endDate} />
    {description && <Description description={description} />}
    {skills && (
      <div style={{ marginTop: "0.5em" }}>
        <Skills list={skills} size="sm" />
      </div>
    )}
  </div>
);

export default Project;
