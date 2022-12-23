import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./styles/index.css";

import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Biography from "./components/Biography";
import Exprience from "./components/Exprience";
import Education from "./components/Education";
import Languages from "./components/Languages";
import ItemWrapper from "./components/ItemWrapper";
import LineSeparator from "./components/LineSeparator";

const DefaultTemplate: FC = () => {
  const { i18n, t, ready } = useTranslation();

  const bio: any = t("bio", { returnObjects: true });
  const isExistBio = i18n.exists("bio");

  const contact: any = t("contact", { returnObjects: true });
  const isExistContact = i18n.exists("contact");

  const skills: string[] = t("skills", { returnObjects: true });
  const isExistSkills = i18n.exists("skills");

  const experiences: object[] = t("experiences", { returnObjects: true });
  const isExistExperiences = i18n.exists("experiences");

  const education: object[] = t("education", { returnObjects: true });
  const isExistEducation = i18n.exists("education");

  const projects: object[] = t("projects", { returnObjects: true });
  const isExistProjects = i18n.exists("projects");

  const languages: object[] = t("languages", { returnObjects: true });
  const isExistLanguages = i18n.exists("languages");

  const socials: object[] = t("socials", { returnObjects: true });
  const isExistSocials = i18n.exists("socials");

  useEffect(() => {
    document.title = `${t("bio.firstName")} ${t("bio.lastName")} Resume`;
  }, [t]);

  if (!ready) return <></>;

  return (
    <main id="app">
      {isExistBio && (
        <>
          <Biography {...bio} /> <LineSeparator />
        </>
      )}

      {isExistContact && (
        <>
          <ItemWrapper title="Contact">
            <Contact {...contact} />
          </ItemWrapper>

          <LineSeparator />
        </>
      )}

      {isExistSkills && (
        <>
          <ItemWrapper title="Skills">
            <Skills list={skills} />
          </ItemWrapper>

          <LineSeparator />
        </>
      )}

      {isExistExperiences && (
        <>
          <ItemWrapper title="Work Experience">
            {experiences.map((item: any, index: number) => {
              return <Exprience {...item} key={index} />;
            })}
          </ItemWrapper>

          <LineSeparator />
        </>
      )}

      {isExistEducation && (
        <>
          <ItemWrapper title="Education">
            {education.map((item: any, index: number) => {
              return <Education {...item} key={index} />;
            })}
          </ItemWrapper>

          <LineSeparator />
        </>
      )}

      {isExistProjects && (
        <>
          <ItemWrapper title="Projects">
            {projects.map((item: any, index: number) => {
              return <Project {...item} key={index} />;
            })}
          </ItemWrapper>

          <LineSeparator />
        </>
      )}

      {isExistLanguages && (
        <>
          <ItemWrapper title="Languages">
            <Languages list={languages} />
          </ItemWrapper>

          <LineSeparator />
        </>
      )}

      {isExistSocials && (
        <ItemWrapper title="Socials">
          <Socials list={socials} />
        </ItemWrapper>
      )}
    </main>
  );
};

export default DefaultTemplate;
