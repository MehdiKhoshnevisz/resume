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
        // TODO: a lot of class :))
        <span
          key={index}
          className="text-primary border border-primary border-opacity-60 inline-block align-middle rounded-full mr-1.5 mb-2 py-0.5 px-2.5"
          style={{ fontSize: fontSize }}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Skills;
