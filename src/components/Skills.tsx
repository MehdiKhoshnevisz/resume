import { FC } from "react";

type Props = {
  list: string[];
};

const Skills: FC<Props> = ({ list }) => (
  <div>
    {list.map((item: string, index: number) => (
      <span
        key={index}
        style={{
          color: "#333",
          fontSize: "0.9em",
          fontWeight: "bold",
          marginRight: "0.5em",
          marginBottom: "0.5em",
          padding: ".05em 0.5em",
          display: "inline-block",
          border: "2px solid #333",
          verticalAlign: "middle",
        }}
      >
        {item}
      </span>
    ))}
  </div>
);

export default Skills;
