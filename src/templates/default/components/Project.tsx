import { FC } from "react";

import Skills from "./Skills";

import cleanURL from "@/utils/cleanURL";

const urlIcon = require('../styles/url.png')

type Props = {
  name: string;
  website?: string;
  startDate: string;
  endDate?: string;
  description?: string;
  skills?: string[];
};

const Name = ({ name, website }: any) => (
  <h3 className="mk-general-item-title">
    {name}
    {website && (
    <a href={website} target="_blank">
      <img src={urlIcon} width={14} style={{verticalAlign: 'middle', marginLeft: '0.5em', marginBottom: '0.1em'}}/>
    </a>)}
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

const Project: FC<Props> = ({
  name,
  website,
  startDate,
  endDate,
  description,
  skills,
}) => (
  <div>
    <Name name={name} website={website}/>
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
