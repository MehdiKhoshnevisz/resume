import { FC } from "react";

type Props = {
  firstName: string;
  lastName?: string;
  jobTitle: string;
  about: string;
  avatar?: string;
};

const Biography: FC<Props> = ({
  firstName,
  lastName,
  jobTitle,
  about,
  avatar,
}) => {
  const fullName = `${firstName} ${lastName || ""}`;
  const fullNameNewLine = `${firstName} <br /> ${lastName || ""}`;

  return (
    <header>
      <div className="mk-biography__header-top">
        {avatar && (
          <div className="mk-biography__avatar">
            <img src={avatar} alt={fullName} />
          </div>
        )}

        <div>
          <h1
            className="mk-biography__title"
            dangerouslySetInnerHTML={{ __html: fullNameNewLine }}
          />
          <span className="mk-biography__job-title">{jobTitle}</span>
        </div>
      </div>

      <p
        style={{
          fontSize: "1em",
          lineHeight: 1.8,
          color: "#777",
          margin: 0,
        }}
      >
        {about}
      </p>
    </header>
  );
};

export default Biography;
