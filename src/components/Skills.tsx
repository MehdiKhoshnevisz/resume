import { FC } from "react";

type Props = {
  list: string[];
  size?: string;
};

const Skills: FC<Props> = ({ list, size }) => {
  let lineHeight = 1.7;
  let fontSize = "1em";

  if (size === "sm") {
    fontSize = "0.8em";
  }

  return (
    <div style={{ lineHeight }}>
      {list.map((item: string, index: number) => (
        // TODO: a lot of class :))
        <span
          key={index}
          className="text-slate-600 border border-slate-800 border-opacity-70 inline-block align-middle rounded-full mr-1.5 mb-2 py-0.5 px-2.5 font-semibold"
          style={{ fontSize: fontSize }}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Skills;
