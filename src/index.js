import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./img.jpg" alt="Beyud" />;
}

function Intro() {
  return (
    <div>
      <h1>Beyud</h1>
      <p>God-like Skill</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪🏿" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪🏿" color="purple" />
      <Skill skill="JavaScript" emoji="💪🏿" color="brown" />
      <Skill skill="Node" emoji="💪🏿" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      className="skill"
      style={{
        backgroundColor: props.color,
        color: "#fff"
      }}
    >
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
