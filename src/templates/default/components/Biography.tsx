import { FC } from "react";
import { useTranslation } from "react-i18next";

import Contact from "../components/Contact";

type Props = {
  firstName: string;
  lastName?: string;
  jobTitle: string;
  about: string;
};

const Biography: FC<Props> = ({ firstName, lastName, jobTitle, about }) => {
  const { i18n, t, ready } = useTranslation();
  const fullName = `${firstName} ${lastName || ""}`;
  const contact: any = t("contact", { returnObjects: true });
  const isExistContact = i18n.exists("contact");

  return (
    <header>
      <div className="mk-biography__header-top">
        <div>
          <h1
            className="mk-biography__title"
            dangerouslySetInnerHTML={{ __html: fullName }}
          />
          <div className="mk-general-row" style={{ alignItems: "baseline" }}>
            <span
              className="mk-biography__job-title"
              style={{ marginRight: "1em" }}
            >
              {jobTitle}
            </span>
            {isExistContact && (
              <div className="mk-general-row">
                <Contact {...contact} />
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="mk-biography__about">{about}</p>
    </header>
  );
};

export default Biography;
