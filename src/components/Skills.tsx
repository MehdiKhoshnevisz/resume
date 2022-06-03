type Props = {
  list: string[];
};

export default function Skills({ list }: Props) {
  return (
    <div>
      {list.map((item: string, index: number) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            marginRight: "0.5rem",
            marginBottom: "0.5rem",
            padding: ".2rem 0.5rem",
            backgroundColor: "#ebebeb",
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
