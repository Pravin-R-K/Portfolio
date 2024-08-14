import Navbar from "../components/Navbar";
import book from "../assets/images/book.png";
import house from "../assets/images/house.png";
import task from "../assets/images/task.png";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div className="project-page">
                <h1>PROJECTS</h1>
                <div className="projectContainer flex f-column f-center">
                    <div className="projects flex f-center">
                        <div class="projectImg">
                            <img src={book} width="300" />
                        </div>
                        <div class="projectContent">
                            <h4>BOOKIT</h4>
                            <p>
                                BOOKIT is an innovative online platform designed
                                to make books more accessible and affordable to
                                everyone. The website specializes in offering a
                                wide range of books across various genres at the
                                lowest possible prices, catering to
                                budget-conscious readers who value both quality
                                and cost-efficiency. BOOKIT utilizes advanced
                                algorithms to provide personalized book
                                recommendations based on users' browsing
                                history, past purchases, and reading
                                preferences, helping them discover new titles
                                that match their interests.
                            </p>
                        </div>
                    </div>
                    <div className="projects flex f-center">
                        <div class="projectImg">
                            <img src={house} width="300" />
                        </div>
                        <div class="projectContent">
                            <h4>HOME PICK</h4>
                            <p>
                                HOME PICK is a cutting-edge online platform
                                designed to predict house prices accurately and
                                efficiently. The website leverages advanced
                                machine learning algorithms and data analytics
                                to provide users with reliable estimates of
                                property values. Whether for potential buyers,
                                sellers, or real estate professionals, HOME PICK
                                offers valuable insights to guide
                                decision-making in the housing market. The
                                platform offers a sleek and intuitive interface
                                where users can easily input property details
                                such as location, size, number of rooms, and
                                other relevant factors. Within seconds, HOME
                                PICK provides a detailed price estimate along
                                with confidence intervals.
                            </p>
                        </div>
                    </div>
                    <div className="projects flex f-center">
                        <div class="projectImg">
                            <img src={task} width="300" />
                        </div>
                        <div class="projectContent">
                            <h4>TASK MANAGEMENT</h4>
                            <p>
                                TASK MANAGEMENT is an intuitive and efficient
                                online platform designed to help users organize
                                their daily tasks, notes, and schedules in one
                                centralized location. The website is tailored to
                                meet the needs of individuals, teams, and
                                organizations, providing tools that enhance
                                productivity and ensure that tasks are completed
                                on time. The platform features a robust
                                note-taking system where users can jot down
                                ideas, meeting minutes, or any important
                                information. It is particularly beneficial for
                                those who need to keep track of multiple tasks
                                and projects, offering a solution that is both
                                flexible and comprehensive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
