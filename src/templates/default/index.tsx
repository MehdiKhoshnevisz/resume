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
  const { t, ready } = useTranslation();
  const skills: string[] = t("skills", { returnObjects: true });
  const experiences: object[] = t("experiences", { returnObjects: true });
  const education: object[] = t("education", { returnObjects: true });
  const projects: object[] = t("projects", { returnObjects: true });
  const socials: object[] = t("socials", { returnObjects: true });
  const languages: object[] = t("languages", { returnObjects: true });

  useEffect(() => {
    document.title = `${t("bio.firstName")} ${t("bio.lastName")} Resume`;
  }, [t]);

  if (!ready) return <></>;

  return (
    <main id="app">
      <Biography {...t("bio", { returnObjects: true })} />

      <LineSeparator />

      <ItemWrapper title="Contact">
        <Contact {...t("contact", { returnObjects: true })} />
      </ItemWrapper>

      <LineSeparator />

      <ItemWrapper title="Skills">
        <Skills list={skills} />
      </ItemWrapper>

      <LineSeparator />

      <ItemWrapper title="Work Exprience">
        {experiences &&
          experiences.map((item: any, index: number) => {
            return <Exprience {...item} key={index} />;
          })}
      </ItemWrapper>

      <LineSeparator />

      <ItemWrapper title="Education">
        {education &&
          education.map((item: any, index: number) => {
            return <Education {...item} key={index} />;
          })}
      </ItemWrapper>

      <LineSeparator />

      <ItemWrapper title="Projects">
        {projects &&
          projects.map((item: any, index: number) => {
            return <Project {...item} key={index} />;
          })}
      </ItemWrapper>

      <LineSeparator />

      <ItemWrapper title="Languages">
        <Languages list={languages} />
      </ItemWrapper>

      <LineSeparator />

      <ItemWrapper title="Socials">
        <Socials list={socials} />
      </ItemWrapper>
    </main>
  );
};

export default DefaultTemplate;
