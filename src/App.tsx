import { useTranslation } from "react-i18next";

import "./App.css";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Biography from "./components/Biography";
import Exprience from "./components/Exprience";
import Education from "./components/Education";
import ItemWrapper from "./components/ItemWrapper";
import LineSeparator from "./components/LineSeparator";

function App() {
  const { t, ready } = useTranslation();
  const skills: string[] = t("skills", { returnObjects: true });
  const experiences: object[] = t("experiences", { returnObjects: true });
  const education: object[] = t("education", { returnObjects: true });
  const projects: object[] = t("projects", { returnObjects: true });
  const socials: object[] = t("socials", { returnObjects: true });

  if (!ready) return <></>;

  return (
    <>
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
          {experiences.map((item: any) => {
            return <Exprience {...item} />;
          })}
        </ItemWrapper>

        <LineSeparator />

        <ItemWrapper title="Education">
          {education.map((item: any) => {
            return <Education {...item} />;
          })}
        </ItemWrapper>

        <LineSeparator />

        <ItemWrapper title="Projects">
          {projects.map((item: any) => {
            return <Project {...item} />;
          })}
        </ItemWrapper>

        <LineSeparator />

        <ItemWrapper title="Socials">
          <Socials list={socials} />
        </ItemWrapper>
      </main>

      <Footer />
    </>
  );
}

export default App;
