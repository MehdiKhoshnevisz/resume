import React from "react";
import "./App.css";

function App() {
  return (
    <main id="app">
      <header>
        <h1
          style={{
            fontSize: "3.5rem",
            marginTop: 0,
            marginBottom: "1rem",
            lineHeight: 1,
            color: "#333",
          }}
        >
          Mehdi Khoshnevis
        </h1>
        <span
          style={{ display: "block", fontSize: "1.5rem", marginBottom: "2rem" }}
        >
          Senior Software Developer &nbsp;{" "}
          <span style={{ fontSize: "1.2rem" }}>|</span> &nbsp;{" "}
          <a
            href="https://imehdi.dev"
            style={{ color: "#333", textDecoration: "none" }}
          >
            imehdi.dev
          </a>
        </span>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 2,
            color: "#a1a1a1",
            margin: 0,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptate repellat ipsam repudiandae explicabo ratione aliquid, quo
          maxime ab unde distinctio nihil quod iure at ad, tempora odit
          mollitia. Amet repellat ipsam repudiandae explicabo ratione aliquid,
          quo maxime ab unde distinctio nihil quod iure at ad, tempora odit
          mollitia. Amet.
        </p>
      </header>

      <hr style={{ margin: "3rem 0", opacity: 0.3 }} />

      <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ flexGrow: 1 }}>
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

          <div style={{ flexGrow: 1 }}>
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
        </div>
      </div>
    </main>
  );
}

export default App;
