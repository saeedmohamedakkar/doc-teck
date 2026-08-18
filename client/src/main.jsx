// DocTeck visual reminder: application entry activates the premium dark clinic interface; use JavaScript and JSX only.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);

