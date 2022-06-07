import "./App.css";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Biography from "./components/Biography";
import Exprience from "./components/Exprience";
import Education from "./components/Education";
import Achievement from "./components/Achievement";
import ItemWrapper from "./components/ItemWrapper";
import LineSeparator from "./components/LineSeparator";

function App() {
  return (
    <>
      <main id="app">
        <Biography
          firstName="Mehdi"
          lastName="Khoshnevis"
          title="Senior Software Developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate
          repellat ipsam repudiandae explicabo ratione aliquid, quo maxime ab unde
          distinctio nihil quod iure at ad, tempora odit mollitia. Amet repellat
          ipsam repudiandae explicabo ratione aliquid, quo maxime ab unde
          distinctio nihil quod iure at ad, tempora odit mollitia. Amet."
        />

        <LineSeparator />

        <ItemWrapper title="Contact">
          <Contact
            phone="+98 910 965 7619"
            email="mkhnsz1996@gmail.com"
            website="https://imehdi.dev"
            location="Iran"
          />
        </ItemWrapper>

        <LineSeparator />

        <ItemWrapper title="Skills">
          <Skills
            list={["HTML5", "CSS3", "Javascript", "Vuejs", "Reactjs", "Nodejs"]}
          />
        </ItemWrapper>

        <LineSeparator />

        <ItemWrapper title="Work Exprience">
          <Exprience
            company="Apple Company"
            type="Full-Time"
            position="Technical lead"
            startDate="2021"
            website="https://apple.com"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vitae tincidunt congue, nisl nunc egestas nisi, euismod aliquet nisl nunc eget."
          />

          <Exprience
            company="Google"
            type="Full-Time"
            position="Senior Software Developer"
            startDate="2018"
            endDate="2020"
            website="https://google.com"
            description="Started and scaled design team to 6 product designers and Implemented a web application desgin System"
          />

          <Exprience
            company="Buzzjective Company"
            type="Contract"
            position="Software Developer"
            startDate="2016"
            endDate="2018"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vitae tincidunf."
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

        <ItemWrapper title="Projects">
          <Project
            title="vue-splash"
            type="Personal"
            url="https://github.com/MehdiKhoshnevisz/vue-splash"
            startDate="2020"
            endDate="2022"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vitae tincidunt congue, nisl nunc egestas nisi, euismod aliquet nisl nunc eget."
          />

          <Project
            title="simple-resume-builder"
            type="Freelance"
            url="https://github.com/MehdiKhoshnevisz/simple-resume-builder"
            startDate="2020"
            endDate="2022"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vitae tincidunt congue, nisl nunc egestas nisi, euismod aliquet nisl nunc eget."
          />
        </ItemWrapper>

        <LineSeparator />

        <ItemWrapper title="Achievement">
          <Achievement description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vitae tincidunt congue, nisl nunc egestas nisi, euismod aliquet nisl nunc eget." />
        </ItemWrapper>

        <LineSeparator />

        <ItemWrapper title="Where to find me">haha</ItemWrapper>
      </main>

      <Footer />
    </>
  );
}

export default App;
