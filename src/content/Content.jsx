import './home.css'

const personalInfo = {
    firstName: "Gonzalo",
    lastName: "Lepetic",
    role: "Software Engineer",
    facebook: "https://www.facebook.com/LepeticG/",
    github: "https://github.com/glepetic",
    linkedin: "https://www.linkedin.com/in/gonzalo-lepetic/",
    instagram: "https://www.instagram.com/glepetic",
}

const openNewTab = url => window.open(url, url);

function Content() {
    return (
        <main>
            <div className={"bg-left"}/>
            <div className={"bg-right"}/>
            <div className={"home-floating-content"}>
                <div className={"floating-half profile-card"}>
                    <div className={"home-card-container"}>
                        <img className={"profile-picture"} src={"/images/me2.jpg"} alt={"me"}/>
                        <div className={"profile-name"}>
                            <span className={"home-card-name"}>{personalInfo.firstName}</span>
                            <span className={"home-card-name"}>{personalInfo.lastName}</span>
                        </div>
                        <div className={"blue-line"}></div>
                        <span className={"home-card-role"}>{personalInfo.role}</span>
                    </div>
                    <div className={"home-card-footer-container"}>
                        <div className={"home-card-footer"}>
                            <img onClick={() => openNewTab(personalInfo.facebook)} src={"/images/facebook.svg"} alt={"facebook logo"}/>
                            <img onClick={() => openNewTab(personalInfo.github)} src={"/images/github.svg"} alt={"github logo"}/>
                            <img onClick={() => openNewTab(personalInfo.linkedin)} src={"/images/linkedin.svg"} alt={"linkedin logo"}/>
                            <img onClick={() => openNewTab(personalInfo.instagram)} src={"/images/instagram.svg"} alt={"instagram logo"}/>
                        </div>
                    </div>
                </div>
                <div className={"floating-half home-content-container"}>
                    <span className={"home-content-title"}>Gonzalo</span>
                    <p className={"home-content-subtitle"}>Here's who I am & what I do</p>
                    <div className={"home-buttons"}>
                        <button className={"home-button active"}>Resume</button>
                        <button className={"home-button"}> Projects</button>
                    </div>
                    <p className={"home-description"}>I'm a paragraph. Click here to add your own text and edit me. It’s
                        easy. Just click “Edit Text” or double click me to add your own content and make changes to the
                        font.</p>
                    <p className={"home-description"}>I’m a great place for you to tell a story and let your users know
                        a little more about you.</p>
                </div>
            </div>
        </main>
    );
}

export default Content;
