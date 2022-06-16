import "./i18n";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const createRoot = require("react-dom/client").createRoot;

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
