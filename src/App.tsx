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

          <div className="mk-resume-data__item">
            <h2 style={{ color: "#777" }}>Exprience</h2>
            <div>
              <h3 style={{ color: "#333", marginBottom: ".25rem" }}>
                Buzzjective Company
              </h3>
              <span
                style={{
                  display: "block",
                  fontSize: "1.17rem",
                  color: "#777",
                  marginBottom: ".25rem",
                }}
              >
                Software Developer &nbsp;{" "}
                <span style={{ fontSize: "1rem" }}>|</span> &nbsp; 2022 -
                Present
              </span>
              <ul
                style={{
                  fontSize: "1.17rem",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: "#333",
                }}
              >
                <li style={{ marginBottom: "0.25rem" }}>
                  - Started and scaled design team to 6 product designers
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  - Implemented a web application desgin System
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  - Scaled Business to a $120m/yr business
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "#333", marginBottom: ".25rem" }}>
                Apple introduce
              </h3>
              <span
                style={{
                  display: "block",
                  fontSize: "1.17rem",
                  color: "#777",
                  marginBottom: ".25rem",
                }}
              >
                Software Engineer Team Lead &nbsp;{" "}
                <span style={{ fontSize: "1rem" }}>|</span> &nbsp; 1998 - 2020
              </span>
              <ul
                style={{
                  fontSize: "1.17rem",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: "#333",
                }}
              >
                <li style={{ marginBottom: "0.25rem" }}>
                  - Started and scaled design team to 6 product designers
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  - Implemented a web application desgin System
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  - Scaled Business to a $120m/yr business
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  - Lorem Ipsum is created by my in apple company
                </li>
              </ul>
            </div>
          </div>

          <div className="mk-resume-data__item">
            <h2 style={{ color: "#777" }}>Exprience</h2>
            <div>
              <h3 style={{ color: "#333", marginBottom: ".25rem" }}>
                Buzzjective Company
              </h3>
              <span
                style={{
                  display: "block",
                  fontSize: "1.17rem",
                  color: "#777",
                  marginBottom: ".25rem",
                }}
              >
                Software Developer &nbsp;{" "}
                <span style={{ fontSize: "1rem" }}>|</span> &nbsp; 2022 -
                Present
              </span>
              <ul
                style={{
                  fontSize: "1.17rem",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: "#333",
                }}
              >
                <li style={{ marginBottom: "0.25rem" }}>
                  - Started and scaled design team to 6 product designers
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  - Implemented a web application desgin System
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  - Scaled Business to a $120m/yr business
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "#333", marginBottom: ".25rem" }}>
                Apple introduce
              </h3>
              <span
                style={{
                  display: "block",
                  fontSize: "1.17rem",
                  color: "#777",
                  marginBottom: ".25rem",
                }}
              >
                Software Engineer Team Lead &nbsp;{" "}
                <span style={{ fontSize: "1rem" }}>|</span> &nbsp; 1998 - 2020
              </span>
              <ul
                style={{
                  fontSize: "1.17rem",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: "#333",
                }}
              >
                <li style={{ marginBottom: "0.25rem" }}>
                  - Started and scaled design team to 6 product designers
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  - Implemented a web application desgin System
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  - Scaled Business to a $120m/yr business
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  - Lorem Ipsum is created by my in apple company
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
