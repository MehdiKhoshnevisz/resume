import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Project from "@/components/Project";
import Biography from "@/components/Biography";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ItemWrapper from "@/components/ItemWrapper";
import LineSeparator from "@/components/LineSeparator";

import "@/styles/index.scss";

const ResumePage: FC = () => {
  const { i18n, t, ready } = useTranslation();

  const bio: any = t("bio", { returnObjects: true });
  const isExistBio = i18n.exists("bio");

  const skills: string[] = t("skills", { returnObjects: true });
  const isExistSkills = i18n.exists("skills");

  const experiences: object[] = t("experiences", { returnObjects: true });
  const isExistExperiences = i18n.exists("experiences");

  const education: object[] = t("education", { returnObjects: true });
  const isExistEducation = i18n.exists("education");

  const projects: object[] = t("projects", { returnObjects: true });
  const isExistProjects = i18n.exists("projects");

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
          <Biography {...bio} />
          <LineSeparator />
        </>
      )}

      {isExistExperiences && (
        <>
          <ItemWrapper title="Experience">
            {experiences.map((item: any, index: number) => {
              return <Experience {...item} key={index} />;
            })}
          </ItemWrapper>

          <LineSeparator />
        </>
      )}

      {isExistProjects && (
        <>
          <ItemWrapper title="Projects">
            <div className="grid grid-cols-12 gap-4">
              {projects.map((item: any, index: number) => {
                return (
                  <div className="col-span-12 lg:col-span-4">
                    <Project {...item} key={index} />
                  </div>
                );
              })}
            </div>
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

      {isExistSocials && (
        <ItemWrapper>
          <Socials list={socials} />
        </ItemWrapper>
      )}
    </main>
  );
};

export default ResumePage;
