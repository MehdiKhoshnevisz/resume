import { FC } from "react";

type Props = {
  list: object[];
};

const Languages: FC<Props> = ({ list }) => (
  <>
    {list.map((item: any, index: number) => (
      <div key={index}>
        <h3 className="mk-general-item-title">{item.language}</h3>
        <span className="mk-general-item-sub-title">{item.fluency}</span>
      </div>
    ))}
  </>
);

export default Languages;
