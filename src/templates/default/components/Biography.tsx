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
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {avatar && (
          <div
            style={{
              marginRight: "1em",
              marginBottom: "0.5rem",
            }}
          >
            <img
              src={avatar}
              style={{
                width: "135px",
                height: "135px",
                objectFit: "cover",
                verticalAlign: "middle",
                objectPosition: "center",
                filter: "grayscale(100%)",
              }}
              alt={fullName}
            />
          </div>
        )}

        <div>
          <h1
            style={{
              fontSize: "3em",
              fontWeight: "900",
              marginTop: 0,
              marginBottom: ".1em",
              lineHeight: 1,
              color: "#333",
              transform: "translateX(-2px)",
            }}
            dangerouslySetInnerHTML={{ __html: fullNameNewLine }}
          />
          <span style={{ display: "block", fontSize: "1.3em" }}>
            {jobTitle}
          </span>
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
