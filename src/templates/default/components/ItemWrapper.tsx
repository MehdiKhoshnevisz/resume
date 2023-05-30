import { FC, ReactNode } from "react";

type Props = {
  title?: string;
  row?: boolean;
  children: ReactNode | ReactNode[];
};

const ItemWrapper: FC<Props> = ({ title, children, row  }) => (
  <div className="mk-item-wrapper">
    <h2 className="mk-item-wrapper__title">{title}</h2>
    <div className={`${row ? 'mk-item-wrapper__children--row' : "mk-item-wrapper__children"}`}>{children || ""}</div>
  </div>
);
export default ItemWrapper;
