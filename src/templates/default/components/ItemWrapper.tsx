import { FC, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode | ReactNode[];
};

const ItemWrapper: FC<Props> = ({ title, children }) => (
  <div className="mk-item-wrapper">
    <h2 className="mk-item-wrapper__title">{title}</h2>
    <div className="mk-item-wrapper__children">{children || ""}</div>
  </div>
);
export default ItemWrapper;
