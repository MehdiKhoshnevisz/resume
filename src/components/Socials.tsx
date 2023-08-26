import { useState, useEffect, FC } from "react";

import { getIcon, originURL } from "@/utils";

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
        <a
          className="flex items-center mr-4 mb-4 md:mb-0 text-base"
          href={item.url}
          key={index}
        >
          <img
            src={icon}
            className="mr-1"
            style={{ width: "1rem", height: "1rem" }}
            alt={item.name}
          />
          {item.name}
        </a>
      );

      setLinks((oldArray: any) => [...oldArray, listItem]);
    });
  }, [list]);

  return (
    <>
      <div className="md:flex">{links}</div>
    </>
  );
};

export default Socials;
