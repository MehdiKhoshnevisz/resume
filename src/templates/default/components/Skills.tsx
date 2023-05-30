import { FC } from "react";

type Props = {
  list: string[];
  size?: string;
};

const Skills: FC<Props> = ({ list, size }) => {
  let lineHeight = 1.7;
  let fontSize = "0.9em";
  let fontWeight = "bold";
  let marginRight = "0.5em";
  let padding = ".05em 0.5em";
  let border = "1px solid #333";

  if (size === "sm") {
    fontSize = "0.7em";
    fontWeight = "500";
    marginRight = "0.7em";
  }

  return (
    <div style={{ lineHeight }}>
      {list.map((item: string, index: number) => (
        <span
          key={index}
          style={{
            color: "#333",
            border: border,
            padding: padding,
            fontSize: fontSize,
            marginBottom: "0.5em",
            display: "inline-block",
            verticalAlign: "middle",
            fontWeight: fontWeight,
            marginRight: marginRight,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Skills;
