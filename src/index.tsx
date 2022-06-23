import "./i18n";
import "./index.css";
import App from "./App";

const createRoot = require("react-dom/client").createRoot;

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
