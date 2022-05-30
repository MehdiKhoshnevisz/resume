import "./App.css";
import Header from "./components/Header";
import Exprience from "./components/Exprience";
import Education from "./components/Education";
import Achievement from "./components/Achievement";
import ItemWrapper from "./components/ItemWrapper";

function App() {
  return (
    <main id="app">
      <Header />

      <hr style={{ margin: "3rem 0", opacity: 0.3 }} />

      <div>
        <div className="mk-resume-data">
          <ItemWrapper title="Exprience">
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

          <ItemWrapper title="Exprience">
            <Exprience
              company="Apple Company"
              position="Technical lead"
              startDate="2021"
              details={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vitae tincidunt congue, nisl nunc egestas nisi, euismod aliquet nisl nunc eget.",
              ]}
            />
          </ItemWrapper>

          <ItemWrapper title="Achievement">
            <Achievement description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vitae tincidunt congue, nisl nunc egestas nisi, euismod aliquet nisl nunc eget." />
          </ItemWrapper>
        </div>
      </div>
    </main>
  );
}

export default App;
