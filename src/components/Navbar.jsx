import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex f-around f-align-center">
            <div className="nav-left flex f-center">
                <div className="round"></div>
                <Link className="links" to="/">PRAVIN R K</Link>
                <h5>[MERN Stack Developer]</h5>
            </div>
            <div className="nav-right flex f-center">
                <Link className="links" id="resume" to="/resume">
                    Resume
                </Link>
                <Link className="links" id="projects" to="/projects">
                    Projects
                </Link>
                <Link className="links" id="contact" to="/contact">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
