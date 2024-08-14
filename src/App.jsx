import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
