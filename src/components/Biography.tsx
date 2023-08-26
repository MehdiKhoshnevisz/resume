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
      <div>
        <h1
          className="text-dark text-5xl font-bold -translate-x-1 mb-4"
          dangerouslySetInnerHTML={{ __html: fullName }}
        />

        <div className="md:flex gap-4 items-baseline">
          <span className="block text-primary text-lg mr-2 mb-2 md:mb-2">
            {jobTitle}
          </span>

          {isExistContact && (
            <div className="md:flex gap-4">
              <Contact {...contact} />
            </div>
          )}
        </div>
      </div>

      <p className="text-primary leading-loose">{about}</p>
    </header>
  );
};

export default Biography;
