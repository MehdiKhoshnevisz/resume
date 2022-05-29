type Props = {
  description: string;
};

export default function Achievement({ description }: Props) {
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
      {description}
    </div>
  );
}
