import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-page flex f-align-center f-around">
                <div className="cont-left flex f-column">
                    <div>
                        <h1>CONTACT</h1>
                        <p>Looking Forward To Hearing From You.</p>
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <p>+91 9361261397</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>rkpravin2003@gmail.com</p>
                    </div>
                </div>
                <div className="cont-right flex f-column f-align-center f-around">
                    <div className="parts flex f-around">
                        <div className="sub-part flex f-column">
                            <label>FIRST NAME</label>
                            <input type="text" placeholder="Pravin" />
                        </div>
                        <div className="sub-part flex f-column">
                            <label>LAST NAME</label>
                            <input type="text" placeholder="R K" />
                        </div>
                    </div>
                    <div className="parts flex f-around">
                        <div className="sub-part flex f-column">
                            <label>EMAIL</label>
                            <input
                                type="email"
                                placeholder="yours@awesome.com"
                            />
                        </div>
                        <div className="sub-part flex f-column">
                            <label>SUBJECT</label>
                            <input type="text" placeholder="Subject Here!" />
                        </div>
                    </div>
                    <div
                        className="last-part flex f-align-center f-between"
                        style={{ width: "86%" }}
                    >
                        <div className="sub-part flex f-column">
                            <label>MESSAGE</label>
                            <textarea
                                rows="5"
                                cols="30"
                                placeholder="Enter Your Message Briefly!"
                            ></textarea>
                        </div>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
