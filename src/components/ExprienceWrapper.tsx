import React from "react";

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

export default function ExprienceWrapper({ children }: Props) {
  return (
    <div className="mk-resume-data__item">
      <h2 style={{ color: "#777" }}>Exprience</h2>
      {children}
    </div>
  );
}
