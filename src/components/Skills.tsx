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
            marginRight: "0.5em",
            marginBottom: "0.5em",
            padding: ".2em 0.5em",
            backgroundColor: "#ebebeb",
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
