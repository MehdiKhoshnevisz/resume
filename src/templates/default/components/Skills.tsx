import { FC } from "react";

type Props = {
  list: string[];
  size?: string;
};

const Skills: FC<Props> = ({ list, size }) => {
  let fontSize = "0.9em";
  let border = "1px solid #333";
  let padding = ".05em 0.5em";
  let marginRight = "0.5em";
  let fontWeight = "bold";
  let lineHeight = 1.7;

  switch (size) {
    case "sm":
      fontSize = "0.7em";
      padding = "0";
      border = "";
      marginRight = "0.7em";
      fontWeight = "normal";
      lineHeight = 1;
      break;

    default:
      break;
  }

  return (
    <div style={{ lineHeight }}>
      {list.map((item: string, index: number) => (
        <span
          key={index}
          style={{
            color: "#333",
            fontSize: fontSize,
            fontWeight: fontWeight,
            marginRight: marginRight,
            marginBottom: "0.5em",
            padding: padding,
            display: "inline-block",
            border: border,
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
