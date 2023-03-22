import React from "react";
import "./globalStyles/index.css";
import App from "./components/App/App";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import AppDataProvider from "./context/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppDataProvider>
      <App />
    </AppDataProvider>
  </React.StrictMode>
);

reportWebVitals();
