import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import profile from "../assets/images/profile.png";

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className="dashboard flex f-center">
                <div className="dashImg">
                    <img src={profile} width="450" />
                </div>
                <div className="dashCont flex f-column f-around">
                    <div>
                        <h1>Hello!</h1>
                    </div>
                    <div className="about">
                        <h3>A Bit About Me</h3>
                        <p>
                            An inspiring Computer Science student with a passion
                            for problem-solving through creative solutions.
                            Seeking to leverage acquired academic knowledge and
                            experience to effectively fill the Software
                            Engineering role. Willing to take any task to help
                            team. Reliable and dedicated team player with
                            hardworking and resourceful approach.
                        </p>
                    </div>
                    <div className="route flex">
                        <div
                            onClick={() => {
                                navigate("/resume");
                            }}
                            className="round one flex f-center"
                        >
                            <Link className="links" to="/resume">
                                Resume
                            </Link>
                        </div>
                        <div
                            onClick={() => {
                                navigate("/projects");
                            }}
                            className="round two flex f-center"
                        >
                            <Link className="links" to="/projects">
                                Projects
                            </Link>
                        </div>
                        <div
                            onClick={() => {
                                navigate("/contact");
                            }}
                            className="round three flex f-center"
                        >
                            <Link className="links" to="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
