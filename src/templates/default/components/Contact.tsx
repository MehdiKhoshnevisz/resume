import { FC } from "react";
import cleanURL from "../../../utils/cleanURL";

type Props = {
  phone: string;
  email: string;
  website: string;
  location: string;
};

const Contact: FC<Props> = ({ phone, email, website, location }) => (
  <>
    <div>
      <h3 className="mk-general-item-title">Phone</h3>
      <a href={`tel:${phone}`} className="mk-general-item-sub-title">
        {phone}
      </a>
    </div>

    <div>
      <h3 className="mk-general-item-title">Email</h3>
      <a href={`mailto:${email}`} className="mk-general-item-sub-title">
        {email}
      </a>
    </div>

    <div>
      <h3 className="mk-general-item-title">Website</h3>
      <a href={website} className="mk-general-item-sub-title">
        {cleanURL(website)}
      </a>
    </div>

    <div>
      <h3 className="mk-general-item-title">Location</h3>
      <span className="mk-general-item-sub-title">{location}</span>
    </div>
  </>
);

export default Contact;
