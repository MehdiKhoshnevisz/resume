import { useState, useEffect } from "react";
import { cleanURL, getIcon, originURL } from "../utils";

type Props = {
  items: object[];
};

export default function Contact({ items }: Props) {
  const linkList: any = [];
  const [links, setLinks] = useState(linkList);

  useEffect(() => {
    items.forEach((item: any, index) => {
      const icon = getIcon(originURL(item.url));

      const listItem = (
        <div className="mk-link-list" key={index}>
          <img src={icon} className="mk-link-list__icon" alt=" " />
          <h3 className="mk-general-item-title" style={{ marginRight: ".3em" }}>
            {item.title}
          </h3>
          <a
            href={item.url}
            className="mk-general-item-sub-title mk-link-list__url "
          >
            {cleanURL(item.url)}
          </a>
        </div>
      );

      setLinks((oldArray: any) => [...oldArray, listItem]);
    });
  }, [items]);

  return <>{links}</>;
}
