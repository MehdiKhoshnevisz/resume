import { FC, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode | ReactNode[];
};

const ItemWrapper: FC<Props> = ({ title, children }) => (
  <div className="mk-resume-data__item">
    <h2
      style={{
        fontSize: "1.3em",
        fontWeight: "900",
        color: "#333",
        margin: 0,
        marginBottom: ".5em",
      }}
    >
      {title}
    </h2>
    <div className="mk-item-wrapper__children">{children}</div>
  </div>
);
export default ItemWrapper;
