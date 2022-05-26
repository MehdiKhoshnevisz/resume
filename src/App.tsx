import "./App.css";
import Header from "./components/Header";
import Exprience from "./components/Exprience";
import ItemWrapper from "./components/ItemWrapper";

function App() {
  return (
    <main id="app">
      <Header />

      <hr style={{ margin: "3rem 0", opacity: 0.3 }} />

      <div>
        <div className="mk-resume-data">
          <ItemWrapper>
            <Exprience
              company="Buzzjective Company"
              position="Software Developer"
              startDate="2021"
              details={[
                "Started and scaled design team to 6 product designers",
                "Implemented a web application desgin System",
                "Scaled Business to a $120m/yr business",
              ]}
            />
          </ItemWrapper>

          <div className="mk-resume-data__item">
            <h2 style={{ color: "#777" }}>Education</h2>
            <div>
              <h3 style={{ color: "#333", marginBottom: ".25rem" }}>
                Shahab Danesh University
              </h3>
              <span
                style={{
                  display: "block",
                  fontSize: "1.17rem",
                  color: "#777",
                  marginBottom: ".25rem",
                }}
              >
                Computer Engineer &nbsp; - &nbsp; Information Technology
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "1.17rem",
                  color: "#777",
                  marginBottom: ".25rem",
                }}
              >
                2014-2018
              </span>
            </div>
          </div>

          <ItemWrapper>
            <Exprience
              company="Buzzjective Company"
              position="Software Developer"
              startDate="2021"
              details={[
                "Started and scaled design team to 6 product designers",
                "Implemented a web application desgin System",
              ]}
            />
          </ItemWrapper>

          <ItemWrapper>
            <Exprience
              company="Buzzjective Company"
              position="Software Developer"
              startDate="2021"
              details={[
                "Started and scaled design team to 6 product designers",
                "Implemented a web application desgin System",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              ]}
            />
          </ItemWrapper>
        </div>
      </div>
    </main>
  );
}

export default App;
