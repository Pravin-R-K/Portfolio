import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./assets/css/global.css";
import "./assets/css/components/navbar.css";
import "./assets/css/pages/dashboard/dashboard.css";
import "./assets/css/pages/resume/resume.css";
import "./assets/css/pages/projects/projects.css";
import "./assets/css/pages/contact/contact.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
