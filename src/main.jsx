import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppContext from "./context/cardDeckContext.jsx";
import LogicContext from "./context/gameLogicContext.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AppContext>
    <LogicContext>
      <App />
    </LogicContext>
  </AppContext>
  // </React.StrictMode>
);
