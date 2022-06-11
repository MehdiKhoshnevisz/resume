import { FC } from "react";

type Props = {
  list: string[];
  size?: string;
};

const Skills: FC<Props> = ({ list, size }) => {
  let fontSize = "0.9em";
  let border = "2px solid #333";
  let padding = ".05em 0.5em";
  let marginRight = "0.5em";
  let fontWeight = "bold";

  switch (size) {
    case "sm":
      fontSize = "0.7em";
      padding = "0";
      border = "";
      marginRight = "0.7em";
      fontWeight = "normal";
      break;

    case "lg":
      fontSize = "0.9em";
      border = "2px solid #333";
      padding = ".05em 0.5em";
      marginRight = "0.5em";
      fontWeight = "bold";
      break;

    default:
      break;
  }

  return (
    <div>
      {list.map((item: string, index: number) => (
        <span
          key={index}
          style={{
            color: "#333",
            fontSize: fontSize,
            fontWeight: "bold",
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
