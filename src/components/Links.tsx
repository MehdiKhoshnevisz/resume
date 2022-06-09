import cleanURL from "../utils/cleanURL";

type Props = {
  items: object[];
};

export default function Contact({ items }: Props) {
  return (
    <>
      {items.map((item: any) => (
        <div>
          <h3 className="mk-general-item-title">{item.title}</h3>
          <a href={item.url} className="mk-general-item-sub-title">
            {cleanURL(item.url)}
          </a>
        </div>
      ))}
    </>
  );
}
