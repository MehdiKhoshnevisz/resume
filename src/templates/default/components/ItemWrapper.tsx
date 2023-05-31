import { FC, ReactNode } from "react";

type Props = {
  title?: string;
  row?: string;
  children: ReactNode | ReactNode[];
};

const ItemWrapper: FC<Props> = ({ title, children, row  }) => {
  const childrenClass = () => {
    let className = 'mk-item-wrapper__children';

    if (!row) return className;

    switch (row) {
      case 'between':
        className = 'mk-item-wrapper__children--row-between';
        break;

      case 'start':
        className = 'mk-item-wrapper__children--row-start';
        break;
    }

    return className
  }

  return (
    <div className="mk-item-wrapper">
      <h2 className="mk-item-wrapper__title">{title}</h2>
      <div className={childrenClass()}>{children || ""}</div>
    </div>
  );
}
export default ItemWrapper;
