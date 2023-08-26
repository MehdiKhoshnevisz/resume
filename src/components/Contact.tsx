import { FC } from "react";

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
          className="inline-block text-primary text-sm mb-3 md:mb-0"
        >
          imehdi.dev
        </a>
      </div>
    )}

    {email && (
      <div>
        <a
          href={`mailto:${email}`}
          className="inline-block text-primary text-sm mb-3 md:mb-0"
        >
          {email}
        </a>
      </div>
    )}

    {phone && (
      <div>
        <a
          href={`tel:${phone}`}
          className="inline-block text-primary text-sm mb-3 md:mb-0"
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
