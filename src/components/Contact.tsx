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
          className="inline-block text-slate-500 text-base mb-3 md:mb-0"
        >
          imehdi.dev
        </a>
      </div>
    )}

    {email && (
      <div>
        <a
          href={`mailto:${email}`}
          className="inline-block text-slate-500 text-base mb-3 md:mb-0"
        >
          {email}
        </a>
      </div>
    )}

    {phone && (
      <div>
        <a
          href={`tel:${phone}`}
          className="inline-block text-slate-500 text-base mb-3 md:mb-0"
        >
          {phone}
        </a>
      </div>
    )}

    {location && (
      <div>
        <span className="inline-block text-slate-500 text-base mb-6 md:mb-0">
          {location}
        </span>
      </div>
    )}
  </>
);

export default Contact;
