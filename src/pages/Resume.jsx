import Navbar from "../components/Navbar";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import sass from "../assets/images/sass.png";
import bootstrap from "../assets/images/bootstrap.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import db from "../assets/images/db.png";

const Resume = () => {
    return (
        <div>
            <Navbar />
            <div className="resume-container flex f-column">
                {/* ----------  EDUCATION SECTION  ---------- */}

                <div id="education">
                    <h1>EDUCATION</h1>
                    <div class="eduContent flex f-column f-center">
                        <div class="eduContent1 flex f-align-center f-around">
                            <div class="eduYear">
                                <p>10th-Standard</p>
                                <p>(2017-2018)</p>
                            </div>
                            <div class="eduSchool">
                                <h3>NALANDAS HIGHER SECONDARY SCHOOL</h3>
                                <p>Tiruchengode, Tamil Nadu.</p>
                                <p>Percentage - 88.6%</p>
                            </div>
                        </div>
                        <div class="eduContent1 flex f-align-center f-around">
                            <div class="eduYear">
                                <p>12th-Standard</p>
                                <p>(2019-2020)</p>
                            </div>
                            <div class="eduSchool">
                                <h3>NALANDAS HIGHER SECONDARY SCHOOL</h3>
                                <p>Tiruchengode, Tamil Nadu.</p>
                                <p>Percentage - 65.1%</p>
                            </div>
                        </div>
                        <div
                            class="eduContent1 flex f-align-center f-between"
                            style={{ width: "67%" }}
                        >
                            <div class="eduYear">
                                <p>Bachelor of Technology</p>
                                <p>(2020-2024)</p>
                            </div>
                            <div class="eduSchool">
                                <h3>
                                    SRI KRISHNA COLLEGE OF ENGINEERING AND
                                    TECHNOLOGY
                                </h3>
                                <p>Coimbatore, Tamil Nadu.</p>
                                <p>CGPA - 8.19</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------  TECH STACK SECTION  ---------- */}

                <div id="tech-stack">
                    <h1>TECH STACK</h1>
                    <div className="techContent flex f-column f-center">
                        <div className="branch flex f-around">
                            <div className="techContent1 flex f-column f-align-center">
                                <div className="techImg">
                                    <img src={html} width="80" />
                                </div>
                                <div className="techTool">
                                    <h3>HTML</h3>
                                </div>
                            </div>
                            <div className="techContent1 flex f-column f-align-center">
                                <div className="techImg">
                                    <img src={css} width="80" />
                                </div>
                                <div className="techTool">
                                    <h3>CSS</h3>
                                </div>
                            </div>
                            <div className="techContent1 flex f-column f-align-center">
                                <div className="techImg">
                                    <img src={sass} width="80" />
                                </div>
                                <div className="techTool">
                                    <h3>SASS & SCSS</h3>
                                </div>
                            </div>
                            <div className="techContent1 flex f-column f-align-center">
                                <div className="techImg">
                                    <img src={bootstrap} width="80" />
                                </div>
                                <div className="techTool">
                                    <h3>Bootstrap</h3>
                                </div>
                            </div>
                            <div className="techContent1 flex f-column f-align-center">
                                <div className="techImg">
                                    <img src={js} width="80" />
                                </div>
                                <div className="techTool">
                                    <h3>JavaScript</h3>
                                </div>
                            </div>
                        </div>
                        <div className="branch flex f-around">
                            <div className="techContent1 flex f-column f-align-center">
                                <div className="techImg">
                                    <img src={react} width="80" />
                                </div>
                                <div className="techTool">
                                    <h3>React JS</h3>
                                </div>
                            </div>
                            <div className="techContent1 flex f-column f-align-center">
                                <div className="techImg">
                                    <img src={node} width="80" />
                                </div>
                                <div className="techTool">
                                    <h3>Node JS</h3>
                                </div>
                            </div>
                            <div className="techContent1 flex f-column f-align-center">
                                <div className="techImg">
                                    <img src={express} width="80" />
                                </div>
                                <div className="techTool">
                                    <h3>Express JS</h3>
                                </div>
                            </div>
                            <div className="techContent1 flex f-column f-align-center">
                                <div className="techImg">
                                    <img src={db} width="80" />
                                </div>
                                <div className="techTool">
                                    <h3>MongoDB</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------  SOFT SKILLS SECTION  ---------- */}

                <div id="soft-skills">
                    <h1>SOFT SKILLS</h1>
                    <div className="skillContent flex f-column f-center">
                        <p>
                            <span>Time Management: </span>Prioritize tasks
                            efficiently to meet deadlines.
                        </p>
                        <p>
                            <span>Communication: </span>The ability to convey
                            information effectively and efficiently.
                        </p>
                        <p>
                            <span>Collaboration: </span>Work well in a team
                            environment, sharing knowledge and ideas.
                        </p>
                        <p>
                            <span>Work Ethic: </span>Demonstrating dedication,
                            reliability, and a strong sense of responsibility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
