import { FC } from "react";

type Props = {
  firstName: string;
  lastName?: string;
  jobTitle: string;
  about: string;
};

const Biography: FC<Props> = ({
  firstName,
  lastName,
  jobTitle,
  about,
}) => {
  const fullName = `${firstName} ${lastName || ""}`;

  return (
    <header>
      <div className="mk-biography__header-top">
          <h1
            className="mk-biography__title"
            dangerouslySetInnerHTML={{ __html: fullName }}
          />
          <span className="mk-biography__job-title">{jobTitle}</span>
      </div>

      <p className="mk-biography__about">{about}</p>
    </header>
  );
};

export default Biography;
