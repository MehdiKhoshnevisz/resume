import { FC } from "react";

import cleanURL from "@/utils/cleanURL";

type Props = {
  phone: string;
  email: string;
  website: string;
  location: string;
};

const Contact: FC<Props> = ({ phone, email, website, location }) => (
  <>
    {website && (
      <div>
        <a
          href={website}
          className="mk-general-item-sub-title"
          style={{ fontSize: "0.9em" }}
        >
          {cleanURL(website)}
        </a>
      </div>
    )}

    {email && (
      <div>
        <a
          href={`mailto:${email}`}
          className="mk-general-item-sub-title"
          style={{ fontSize: "0.9em" }}
        >
          {email}
        </a>
      </div>
    )}

    {phone && (
      <div>
        <a
          href={`tel:${phone}`}
          className="mk-general-item-sub-title"
          style={{ fontSize: "0.9em" }}
        >
          {phone}
        </a>
      </div>
    )}

    {location && (
      <div>
        <span className="mk-general-item-sub-title">{location}</span>
      </div>
    )}
  </>
);

export default Contact;
