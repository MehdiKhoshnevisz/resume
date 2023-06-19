import { useState, useEffect, FC } from "react";

import { cleanURL, getIcon, originURL } from "@/utils";

type Props = {
  list: object[];
};

const Socials: FC<Props> = ({ list }) => {
  const linkList: any = [];
  const [links, setLinks] = useState(linkList);

  useEffect(() => {
    list.forEach((item: any, index) => {
      const icon = getIcon(originURL(item.url));

      const listItem = (
        <div className="mk-link-list" key={index}>
          <img src={icon} className="mk-link-list__icon" alt=" " />
          <h3
            className="mk-general-item-title"
            style={{ fontSize: ".7em", marginRight: ".3em" }}
          >
            <a
              className="mk-general-item-title mk-link-list__url"
              href={item.url}
            >
              {item.name}
            </a>
          </h3>
        </div>
      );

      setLinks((oldArray: any) => [...oldArray, listItem]);
    });
  }, [list]);

  return <>{links}</>;
};

export default Socials;
