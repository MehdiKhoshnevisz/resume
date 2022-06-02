import "./App.css";
import Biography from "./components/Biography";
import Exprience from "./components/Exprience";
import Education from "./components/Education";
import Achievement from "./components/Achievement";
import ItemWrapper from "./components/ItemWrapper";
import LineSeparator from "./components/LineSeparator";

function App() {
  return (
    <main id="app">
      <Biography
        fullName="Mehdi Khoshnevis"
        title="Senior Software Developer"
        website="https://imehdi.dev"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate
        repellat ipsam repudiandae explicabo ratione aliquid, quo maxime ab unde
        distinctio nihil quod iure at ad, tempora odit mollitia. Amet repellat
        ipsam repudiandae explicabo ratione aliquid, quo maxime ab unde
        distinctio nihil quod iure at ad, tempora odit mollitia. Amet."
      />

      <LineSeparator />

      <ItemWrapper title="Work Exprience">
        <Exprience
          company="Apple Company"
          position="Technical lead"
          startDate="2021"
          details={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vitae tincidunt congue, nisl nunc egestas nisi, euismod aliquet nisl nunc eget.",
          ]}
        />

        <Exprience
          company="Google"
          position="Senior Software Developer"
          startDate="2018"
          endDate="2020"
          details={[
            "Started and scaled design team to 6 product designers",
            "Implemented a web application desgin System",
          ]}
        />

        <Exprience
          company="Buzzjective Company"
          position="Software Developer"
          startDate="2016"
          endDate="2018"
          details={[
            "Started and scaled design team to 6 product designers",
            "Implemented a web application desgin System",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ]}
        />
      </ItemWrapper>

      <LineSeparator />

      <ItemWrapper title="Education">
        <Education
          title="Sharif University"
          field="Computer Science &nbsp; - &nbsp; Software Engineering"
          startDate="2018"
          endDate="2022"
        />

        <Education
          title="Shahab Danesh University"
          field="Computer Engineer &nbsp; - &nbsp; Information Technology"
          startDate="2014"
          endDate="2018"
        />
      </ItemWrapper>

      <LineSeparator />

      <ItemWrapper title="Achievement">
        <Achievement description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vitae tincidunt congue, nisl nunc egestas nisi, euismod aliquet nisl nunc eget." />
      </ItemWrapper>
    </main>
  );
}

export default App;
