import ReactDOM from "react-dom";
import { StrictMode } from "react";
import App from "./App";

import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root"));
//.render(<h1>Hello, World!</h1>);

//const root = document.getElementById("root");
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
