import React from "react";

type Props = {
  title: string;
  children: React.ReactChild | React.ReactChild[];
};

export default function ItemWrapper({ title, children }: Props) {
  return (
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
}
