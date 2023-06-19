import { FC } from "react";

type Props = {
  list: string[];
  size?: string;
};

const Skills: FC<Props> = ({ list, size }) => {
  let lineHeight = 1.7;
  let fontSize = "1em";

  if (size === "sm") {
    fontSize = "0.7em";
  }

  return (
    <div style={{ lineHeight }}>
      {list.map((item: string, index: number) => (
        <span
          key={index}
          style={{
            border: "1px solid #989898",
            borderRadius: "1em",
            marginRight: "0.5em",
            marginBottom: "0.5em",
            padding: "0.1em 0.65em",
            color: "#4D4D4D",
            fontSize: fontSize,
            display: "inline-block",
            verticalAlign: "middle",
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Skills;
