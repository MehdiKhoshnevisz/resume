import { FC } from "react";

type Props = {
  description: string;
};

const Achievement: FC<Props> = ({ description }) => (
  <div className="mk-general-item-title">{description}</div>
);

export default Achievement;
