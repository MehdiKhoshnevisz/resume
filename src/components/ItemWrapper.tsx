import React from "react";

type Props = {
  title: string;
  children: React.ReactChild | React.ReactChild[];
};

export default function ItemWrapper({ title, children }: Props) {
  return (
    <div className="mk-resume-data__item">
      <h2 style={{ color: "#777", margin: 0 }}>{title}</h2>
      {children}
    </div>
  );
}
