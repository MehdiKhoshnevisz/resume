type Props = {
  item: string;
};

export default function Achievement({ item }: Props) {
  return (
    <div
      style={{
        fontSize: "1.17rem",
        listStyle: "none",
        padding: 0,
        margin: 0,
        color: "#333",
        marginBottom: "0.25rem",
      }}
    >
      {item}
    </div>
  );
}
